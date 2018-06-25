import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import autobind from 'autobind-decorator'
import get from 'lodash/get'
import isEqual from 'lodash/isEqual'
import LazyLoad, { forceCheck } from 'react-lazyload'
import { Button, ToggleButton, ListingComponents, ListingCell } from '@rentpath/react-ui-core'
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
  width: 318,
  height: 280,
}

@themed(/^Listing/)
export default class Listing extends Component {
  static propTypes = {
    index: PropTypes.number,
    listing: PropTypes.object,
    theme: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
    photos: PropTypes.object,
    ratings: PropTypes.object,
    ctaButtons: PropTypes.arrayOf(buttonPropTypes),
    favoriteButton: buttonPropTypes,
    lazyLoad: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    isActive: PropTypes.bool,
    listingInfoComponents: PropTypes.node,
    listingTopComponents: PropTypes.node,
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
    this.state = {
      loadedCarousel: false,
    }
  }

  shouldComponentUpdate(nextProps) {
    const { isActive, listing, className, photos: photoConfig } = this.props
    const { id, isFavorited, photos } = listing

    return (
      isActive !== nextProps.isActive ||
      id !== nextProps.listing.id ||
      isFavorited !== nextProps.listing.isFavorited ||
      className !== nextProps.className ||
      !isEqual(photos, nextProps.listing.photos) ||
      !isEqual(photoConfig, nextProps.photos)
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

    this.setState({
      loadedCarousel: true,
    })
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
        className={classnames(theme.Listing_CtaButton, className)}
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
        className={classnames(theme.Listing_FavoriteButton, className)}
        inactive={!isActive}
        onClick={this.handleFavoriteClick}
      />
    )
  }

  renderBanners() {
    const { listing, theme } = this.props

    return (
      <div className={theme.Listing_Banner}>
        {listing.banners.map((banner, index) => (
          <Banner key={`${banner}_${index}`} name={banner} />
        ))}
      </div>
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
      <React.Fragment>
        {(isActive || this.state.loadedCarousel) && (
          <ListingComponents.Photos
            showNav
            {...photos}
            lazyLoad={lazyLoad}
            className={theme.Listing_Photos}
            onSlide={this.handlePhotoCarouselSlide}
            renderCustomControls={renderCustomControls}
          />
        )}
        {this.renderPhoto(lazyLoad)}
      </React.Fragment>
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
      isActive,
      lazyLoad,
      listingInfoComponents,
      listingTopComponents,
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
          theme.Listing,
          theme[`Listing-${isActive ? 'active' : 'inactive'}`]
        )}
        isActive={isActive}
        {...props}
      >
        {listing.banners && this.renderBanners()}
        {this.renderFavoriteButton()}
        <div className={theme.Listing_Top}>
          {this.renderPhotoCarousel()}
          {listingTopComponents}
        </div>
        <div className={theme.Listing_Bottom}>
          <div className={theme.Listing_Info} data-tid="listing-info">
            {listingInfoComponents}
          </div>
          { ctaButtons &&
            <div className={theme.Listing_CTAs}>{this.renderCtaButtons()}</div>
          }
        </div>
      </ListingCell>
    )
  }
}
