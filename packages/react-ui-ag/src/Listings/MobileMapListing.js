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
    isActive: PropTypes.bool,
  }

  static defaultProps = {
    isActive: true,
    theme: {},
    listing: {},
    ratings: {},
    photos: {},
  }

  @autobind
  handleCardClick() {
    const { index, listing, onClick } = this.props

    if (onClick) onClick(index, listing)
  }

  @autobind
  handleButtonClick(onClick) {
    const { isActive, listing } = this.props

    return event => {
      if (isActive && onClick) {
        onClick(this.props.listing)
      } else if (!isActive && this.props.onClick) {
        this.props.onClick(this.props.index, listing)
      }

      const shouldStopPropagation =
        isActive && event && event.stopPropagation

      if (shouldStopPropagation) event.stopPropagation()
    }
  }

  @autobind
  handleFavoriteClick(value) {
    const { isActive, listing, favoriteButton } = this.props
    const { onClick } = favoriteButton

    if (isActive && onClick) {
      onClick(this.props.listing, value)
    } else if (!isActive && this.props.onClick) {
      this.props.onClick(this.props.index, listing)
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
      ...rest
    } = props

    const buttonText = get(listing, valueLocation, children)
    let buttonProps = { ...rest }

    if (!buttonText) return null

    if (valueLocation === 'phone') {
      const { phoneNumber = {} } = listing

      if (phoneNumber.display) {
        buttonProps = {
          ...rest,
          nodeType: 'a',
          href: `tel:${phoneNumber.digits}`,
        }
      }
    }

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
        {buttonText}
      </Button>
    )
  }

  renderFavoriteButton() {
    const { theme, favoriteButton, isActive, listing } = this.props
    const { className } = favoriteButton
    return (
      <ToggleButton
        {...favoriteButton}
        value={listing.isFavorited}
        className={classnames(
          theme.MobileMapListing_FavoriteButton,
          className,
        )}
        inactive={!isActive}
        onClick={this.handleFavoriteClick}
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
      isActive,
      ...props
    } = this.props

    return (
      <ListingCell
        listing={listing}
        onClick={this.handleCardClick}
        className={classnames(
          className,
          theme.MobileMapListing,
          theme[`MobileMapListing-${isActive ? 'active' : 'inactive'}`]
        )}
        isActive={isActive}
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
            {listing.rating ?
              <ListingComponents.Ratings {...ratings} /> :
              <div
                className={theme.MobileMapListing_RatingPlaceHolder}
                data-tid="rating-placeholder"
              />
            }
          </div>
          <div className={theme.MobileMapListing_CTAs}>
            {this.renderCtaButtons()}
          </div>
        </div>
      </ListingCell>
    )
  }
}
