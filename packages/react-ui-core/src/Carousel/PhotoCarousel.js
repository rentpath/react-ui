import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from '@rentpath/react-themed'
import classnames from 'classnames'
import LazyLoad from 'react-lazyload'
import autobind from 'autobind-decorator'
import { Photo, BackgroundPhoto } from '../Photo'
import Carousel from './Carousel'

const carouselPhoto = PropTypes.arrayOf(
  PropTypes.shape({
    caption: PropTypes.string,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
)

@themed(['PhotoCarousel', 'PhotoCarousel-empty'])
export default class PhotoCarousel extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    items: PropTypes.oneOfType([
      PropTypes.arrayOf(
        carouselPhoto
      ),
      carouselPhoto,
    ]),
    server: PropTypes.string.isRequired,
    isBackgroundImage: PropTypes.bool,
    lazyLoad: PropTypes.bool,
    lazyLoadGallery: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    lazyLoad: false,
    lazyLoadGallery: false,
    isBackgroundImage: false,
    theme: {},
  }

  photo(item) {
    const { server } = this.props
    const {
      url,
      path,
      id,
    } = item

    return url || `${server}${path || id}`
  }

  lazyLoadGallery() {
    const { lazyLoadGallery } = this.props
    const props = typeof lazyLoadGallery === 'object' ? lazyLoadGallery : {}

    return (
      <LazyLoad
        {...props}
      >
        {this.renderCarousel()}
      </LazyLoad>
    )
  }

  @autobind
  renderItem(item) {
    const { isBackgroundImage } = this.props
    const Component = isBackgroundImage ? BackgroundPhoto : Photo

    return (
      <Component
        alt={item.caption}
        url={this.photo(item)}
        {...item}
      />
    )
  }

  renderCarousel() {
    const {
      className,
      theme,
      items,
      lazyLoadGallery,
      ...rest
    } = this.props

    return (
      <Carousel
        items={items}
        infinite
        renderItem={this.renderItem}
        {...rest}
        className={classnames(
          theme.PhotoCarousel,
          className,
        )}
      />
    )
  }

  render() {
    const {
      theme,
      items,
      lazyLoadGallery,
    } = this.props

    if (!items || !items.length) {
      return (
        <div className={theme['PhotoCarousel-empty']} />
      )
    }

    return lazyLoadGallery ? this.lazyLoadGallery() : this.renderCarousel()
  }
}
