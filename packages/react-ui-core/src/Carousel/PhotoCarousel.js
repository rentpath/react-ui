import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import LazyLoad from 'react-lazyload'
import autobind from 'autobind-decorator'
import Carousel from './Carousel'

@themed(['PhotoCarousel', 'PhotoCarousel_Image', 'PhotoCarousel-empty'])

export default class PhotoCarousel extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string,
        path: PropTypes.string,
        itemProps: PropTypes.object,
      }),
    ),
    dimensions: PropTypes.string,
    server: PropTypes.string.isRequired,
    lazyLoad: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    lazyLoad: false,
    theme: {},
  }

  photo(path) {
    const { server, dimensions } = this.props
    return `${server}${path}${dimensions}`
  }

  lazyLoad() {
    const { lazyLoad } = this.props
    const props = typeof lazyLoad === 'object' ? lazyLoad : {}

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
    return (
      <img
        alt={item.caption}
        src={this.photo(item.path)}
        className={this.props.theme.PhotoCarousel_Image}
        {...item.itemProps}
      />
    )
  }

  renderCarousel() {
    const {
      className,
      theme,
      items,
      lazyLoad,
      ...rest
    } = this.props

    return (
      <Carousel
        items={items}
        infinite
        renderItem={this.renderItem}
        lazyLoad={!!lazyLoad}
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
      lazyLoad,
    } = this.props

    if (!items || !items.length) {
      return (
        <div className={theme['PhotoCarousel-empty']} />
      )
    }

    return lazyLoad ? this.lazyLoad() : this.renderCarousel()
  }
}
