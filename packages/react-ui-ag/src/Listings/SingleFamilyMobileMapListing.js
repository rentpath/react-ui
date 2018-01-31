import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import autobind from 'autobind-decorator'
import { Button, ToggleButton, ListingComponents, ListingCell } from '@rentpath/react-ui-core'
import { Banner } from '../Banners'

const buttonPropTypes = PropTypes.shape({
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
})

@themed(/^MobileMapListing/, { pure: true })

export default class SingleFamilyMobileMapListing extends PureComponent {
  static propTypes = {
    listing: PropTypes.object,
    theme: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
    photos: PropTypes.object,
    ctaButton: buttonPropTypes,
    favoriteButton: buttonPropTypes,
    prioritizeCardClick: PropTypes.bool,
  }

  static defaultProps = {
    theme: {},
    listing: {},
    ctaButton: {},
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

  renderCtaButton() {
    const { theme, ctaButton } = this.props
    const { onClick, className } = ctaButton
    return (
      <Button
        {...ctaButton}
        className={classnames(
          theme.MobileMapListing_CtaButton,
          className,
        )}
        onClick={this.handleButtonClick(onClick)}
        data-tid="cta-button"
      />
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
      ctaButton,
      favoriteButton,
      ...props
    } = this.props

    return (
      <ListingCell
        listing={listing}
        onClick={onClick}
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
            {...props}
            {...photos}
          />
        </div>
        <div className={theme.MobileMapListing_Bottom}>
          <div className={theme.MobileMapListing_Info}>
            <ListingComponents.Price />
            <ListingComponents.Address />
            <div className={theme.MobileMapListing_BedsAndCta}>
              <div>
                <ListingComponents.Bedroom />
                <ListingComponents.Availability />
              </div>
              {this.renderCtaButton()}
            </div>
          </div>
        </div>
      </ListingCell>
    )
  }
}
