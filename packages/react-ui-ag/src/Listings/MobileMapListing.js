import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import autobind from 'autobind-decorator'
import get from 'lodash/get'
import isEqual from 'lodash/isEqual'
import LazyLoad, { forceCheck } from 'react-lazyload'
import {
  Button,
  ToggleButton,
  ListingComponents,
  ListingCell,
} from '@rentpath/react-ui-core'
import { Banner } from '../Banners'

const buttonPropTypes = PropTypes.shape({
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  valueLocation: PropTypes.string,
})

const REACT_LAZYLOAD_PROP_DEFAULTS = {
  offset: [250, -100],
  resize: true,
  width: 280,
  height: 120,
}

@themed(/^MobileMapListing/)
export default class MobileMapListing extends Component {
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
    lazyLoad: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    isActive: PropTypes.bool,
    onPhotoCarouselSlide: PropTypes.func,
    renderCustomControls: PropTypes.func,
  }

  static defaultProps = {
    isActive: true,
    lazyLoad: true,
    theme: {},
    listing: {},
    ratings: {},
    photos: {},
  }

  constructor(props) {
    super(props)
    this.loadedCarousel = false
  }

  shouldComponentUpdate(nextProps) {
    const { listing } = this.props
    return (
      this.props.isActive !== nextProps.isActive ||
      listing.id !== nextProps.listing.id ||
      listing.isFavorited !== nextProps.listing.isFavorited ||
      !isEqual(listing.photos, nextProps.listing.photos)
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.isActive !== prevProps.isActive && !prevProps.isActive) {
      forceCheck()
    }
  }

  get listingPhotos() {
    return get(this.props.listing, 'photos', [])
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

      const shouldStopPropagation = isActive && event && event.stopPropagation

      if (shouldStopPropagation) event.stopPropagation()
    }
  }

  @autobind
  handleFavoriteClick(value, event) {
    const { isActive, listing, favoriteButton } = this.props
    const { onClick } = favoriteButton

    if (isActive && onClick) {
      onClick(this.props.listing, value)
    } else if (!isActive && this.props.onClick) {
      this.props.onClick(this.props.index, listing)
    }

    const shouldStopPropagation = isActive && event && event.stopPropagation

    if (shouldStopPropagation) {
      event.stopPropagation()
    }
  }

  @autobind
  handlePhotoCarouselSlide(index) {
    const { onPhotoCarouselSlide } = this.props

    if (onPhotoCarouselSlide) onPhotoCarouselSlide(index)

    this.loadedCarousel = true
  }

  renderCtaButtons() {
    const { ctaButtons } = this.props
    return ctaButtons.map((cta, index) => this.renderCtaButton(cta, index))
  }

  renderCtaButton(props, key) {
    const { theme, listing } = this.props
    const { className, onClick, valueLocation, children, ...rest } = props

    const buttonText = get(listing, valueLocation, children)
    const buttonProps = { ...rest }

    if (!buttonText) return null

    return (
      <Button
        {...buttonProps}
        className={classnames(theme.MobileMapListing_CtaButton, className)}
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
        className={classnames(theme.MobileMapListing_FavoriteButton, className)}
        inactive={!isActive}
        onClick={this.handleFavoriteClick}
      />
    )
  }

  renderPhotoCarousel() {
    const { listing, theme, photos, isActive, renderCustomControls } = this.props
    let { lazyLoad } = this.props

    if (lazyLoad && typeof lazyLoad === 'boolean') {
      lazyLoad = typeof lazyLoad === 'boolean' ? REACT_LAZYLOAD_PROP_DEFAULTS : lazyLoad
    }

    if (!isActive) {
      const { server, dimensions } = photos
      const firstPhoto = this.listingPhotos[0] || {}
      listing.photo = { url: `${server}${firstPhoto.path}${dimensions}` }
    }

    return (
      <div className={theme.MobileMapListing_Top}>
        {(isActive || this.loadedCarousel) && (
          <ListingComponents.Photos
            showNav
            {...photos}
            lazyLoad={lazyLoad}
            className={theme.MobileMapListing_Photos}
            onSlide={this.handlePhotoCarouselSlide}
            renderCustomControls={renderCustomControls}
          />
        )}
        {this.renderPhoto(lazyLoad)}
      </div>
    )
  }

  renderPhoto(lazyLoad) {
    if (lazyLoad) {
      return (
        <LazyLoad {...lazyLoad}>
          <ListingComponents.Photo />
        </LazyLoad>
      )
    }

    return <ListingComponents.Photo />
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
      lazyLoad,
      onPhotoCarouselSlide,
      renderCustomControls,
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
        {listing.banner && (
          <Banner name={listing.banner} className={theme.MobileMapListing_Banner} />
        )}
        {this.renderPhotoCarousel()}
        <div className={theme.MobileMapListing_Bottom}>
          <div className={theme.MobileMapListing_Info}>
            <ListingComponents.Price />
            <ListingComponents.PropertyName {...propertyName} />
            <div className={theme.MobileMapListing_BedsAndUla}>
              <ListingComponents.Bedroom />
              <ListingComponents.UnitLevelAvailability />
            </div>
            {listing.rating ? (
              <ListingComponents.Ratings {...ratings} />
            ) : (
              <div
                className={theme.MobileMapListing_RatingPlaceHolder}
                data-tid="rating-placeholder"
              />
            )}
          </div>
          <div className={theme.MobileMapListing_CTAs}>{this.renderCtaButtons()}</div>
        </div>
      </ListingCell>
    )
  }
}
