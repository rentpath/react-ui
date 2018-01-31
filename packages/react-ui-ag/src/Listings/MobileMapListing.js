import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import autobind from 'autobind-decorator'
import get from 'lodash/get'
import { Button, ToggleButton, ListingComponents, ListingCell } from '@rentpath/react-ui-core'
import { Banner } from '../Banners'

const buttonPropTypes = PropTypes.shape({
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  valueLocation: PropTypes.string,
})

@themed(/^MobileMapListing/, { pure: true })
export default class MobileMapListing extends PureComponent {
  static propTypes = {
    index: PropTypes.number,
    listing: PropTypes.object,
    theme: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
    photos: PropTypes.object,
    ratings: PropTypes.object,
    propertyName: PropTypes.object,
    ctaButtons: PropTypes.arrayOf(buttonPropTypes),
    favoriteButton: buttonPropTypes,
    prioritizeCardClick: PropTypes.bool,
  }

  static defaultProps = {
    prioritizeCardClick: true,
    theme: {},
    listing: {},
    ratings: {},
    photos: {},
  }

  @autobind
  handleCardClick() {
    const { index, onClick } = this.props

    if (onClick) onClick(index)
  }

  @autobind
  handleButtonClick(onClick) {
    const { prioritizeCardClick } = this.props

    return event => {
      if (!prioritizeCardClick && onClick) onClick(this.props.listing)

      const shouldStopPropagation =
        !prioritizeCardClick && event && event.stopPropagation

      if (shouldStopPropagation) event.stopPropagation()
    }
  }

  renderCtaButtons() {
    const { ctaButtons } = this.props
    return ctaButtons.map((cta, index) => this.renderCtaButton(cta, index))
  }

  renderCtaButton(props, key) {
    const { theme, listing } = this.props
    const {
      className,
      onClick,
      valueLocation,
      children,
      ...buttonProps
    } = props
    return (
      <Button
        {...buttonProps}
        className={classnames(
          theme.MobileMapListing_CtaButton,
          className,
        )}
        onClick={this.handleButtonClick(onClick)}
        key={key}
        data-tid="cta-button"
      >
        {get(listing, valueLocation, children)}
      </Button>
    )
  }

  renderFavoriteButton() {
    const { theme, favoriteButton } = this.props
    const { className, onClick } = favoriteButton
    return (
      <ToggleButton
        {...favoriteButton}
        className={classnames(
          theme.MobileMapListing_FavoriteButton,
          className,
        )}
        onClick={this.handleButtonClick(onClick)}
      />
    )
  }

  render() {
    const {
      theme,
      listing,
      onClick,
      className,
      photos,
      ratings,
      ctaButtons,
      favoriteButton,
      propertyName,
      ...props
    } = this.props

    return (
      <ListingCell
        listing={listing}
        onClick={this.handleCardClick}
        className={theme.MobileMapListing}
        {...props}
      >
        {this.renderFavoriteButton()}
        {listing.banner &&
          <Banner
            name={listing.banner}
            className={theme.MobileMapListing_Banner}
          />
        }
        <div className={theme.MobileMapListing_Top}>
          <ListingComponents.Photos
            showNav
            {...photos}
            className={theme.MobileMapListing_Photos}
          />
        </div>
        <div className={theme.MobileMapListing_Bottom}>
          <div className={theme.MobileMapListing_Info}>
            <ListingComponents.Price />
            <ListingComponents.PropertyName {...propertyName} />
            <div className={theme.MobileMapListing_BedsAndUla}>
              <ListingComponents.Bedroom />
              <ListingComponents.UnitLevelAvailability />
            </div>
            <ListingComponents.Ratings {...ratings} />
          </div>
          <div className={theme.MobileMapListing_CTAs}>
            {this.renderCtaButtons()}
          </div>
        </div>
      </ListingCell>
    )
  }
}
