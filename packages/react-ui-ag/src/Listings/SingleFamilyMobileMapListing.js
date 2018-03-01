import React, { Component } from 'react'
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

const REACT_LAZYLOAD_PROP_DEFAULTS = {
  offset: [250, -100],
  resize: true,
  width: 280,
  height: 120,
}

@themed(/^MobileMapListing/)
export default class SingleFamilyMobileMapListing extends Component {
  static propTypes = {
    index: PropTypes.number,
    listing: PropTypes.object,
    theme: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
    photos: PropTypes.object,
    ctaButton: buttonPropTypes,
    favoriteButton: buttonPropTypes,
    lazyLoad: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
    isActive: PropTypes.bool,
  }

  static defaultProps = {
    theme: {},
    listing: {},
    ctaButton: {},
    isActive: true,
    lazyLoad: true,
  }

  shouldComponentUpdate(nextProps) {
    return this.props.isActive !== nextProps.isActive ||
      this.props.listing.id !== nextProps.listing.id
  }

  @autobind
  handleCardClick() {
    const { index, onClick } = this.props

    if (onClick) onClick(index)
  }

  @autobind
  handleButtonClick(onClick) {
    const { isActive } = this.props

    return event => {
      if (isActive && onClick) {
        onClick(this.props.listing)
      } else if (!isActive && this.props.onClick) {
        this.props.onClick(this.props.index)
      }

      const shouldStopPropagation =
        isActive && event && event.stopPropagation

      if (shouldStopPropagation) event.stopPropagation()
    }
  }

  @autobind
  handleFavoriteClick(value) {
    const { isActive, favoriteButton } = this.props
    const { onClick } = favoriteButton

    if (isActive && onClick) {
      onClick(this.props.listing, value)
    } else if (!isActive && this.props.onClick) {
      this.props.onClick(this.props.index)
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
        onClick={this.handleFavoriteClick}
        inactive={!isActive}
      />
    )
  }

  renderPhotoCarousel() {
    const { theme, photos } = this.props
    let { lazyLoad } = this.props

    if (lazyLoad && typeof lazyLoad === 'boolean') {
      lazyLoad = REACT_LAZYLOAD_PROP_DEFAULTS
    }

    return (
      <div className={theme.MobileMapListing_Top}>
        <ListingComponents.Photos
          showNav
          {...photos}
          lazyLoad={lazyLoad}
          className={theme.MobileMapListing_Photos}
        />
      </div>
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
      isActive,
      lazyLoad,
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
        {this.renderPhotoCarousel()}
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
