import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import autobind from 'autobind-decorator'
import Slider from 'react-image-gallery'
import { forceCheck } from 'react-lazyload'
import { randomId, parseArgs } from '@rentpath/react-ui-utils'
import { Button } from '../Button'
import CarouselNavigation from './CarouselNavigation'

const PAGE_SIZE = 30
const FIRST_PAGE = 1

@themed(['Carousel', 'Carousel-next', 'Carousel-previous'])

export default class Carousel extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    items: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.object,
      ]),
    ),
    lazyLoad: PropTypes.bool,
    selectedIndex: PropTypes.number,
    onSlide: PropTypes.func,
    showNav: PropTypes.bool,
    navigation: PropTypes.shape({
      previous: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.object,
      ]),
      next: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.object,
      ]),
    }),
    pagination: PropTypes.shape({
      pageSize: PropTypes.number,
      pageNumber: PropTypes.number,
      total: PropTypes.number,
      previous: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.object,
      ]),
      next: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.object,
      ]),
    }),
  }

  static defaultProps = {
    showNav: false,
    lazyLoad: false,
    theme: {},
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedIndex !== nextProps.selectedIndex) {
      this.slideToIndex(nextProps.selectedIndex)
    }
  }

  @autobind
  onSlide(index) {
    const { onSlide } = this.props

    if (onSlide) onSlide(index)
    forceCheck()
  }

  get pageInfo() {
    const {
      pageSize = PAGE_SIZE,
      pageNumber = FIRST_PAGE,
      total = this.props.items.length,
      ...rest
    } = this.props.pagination

    return { pageSize, pageNumber, total, ...rest }
  }

  get remainder() {
    const { total, pageNumber, pageSize } = this.pageInfo
    return total - (pageNumber * pageSize)
  }

  get items() {
    const { pagination, items } = this.props

    if (pagination) {
      const { pageNumber, pageSize } = this.pageInfo
      const prepend = pageNumber > 1 ? this.paginationCard('previous') : []
      const append = this.remainder >= pageSize ? this.paginationCard('next') : []

      return [].concat(prepend, items, append)
    }

    return items
  }

  get navigation() {
    const { navigation } = this.props

    if (!navigation) return {}

    return {
      renderLeftNav: this.renderNavigationButton('previous'),
      renderRightNav: this.renderNavigationButton('next'),
      showNav: true,
    }
  }

  slideToIndex(index) {
    if (this.carousel && this.props.items[index]) {
      this.carousel.slideToIndex(index)
    }
  }

  @autobind
  previousPageClick(onClick) {
    const { pageNumber } = this.pageInfo
    const index = pageNumber > 2 ? 1 : 0

    return event => {
      if (onClick) onClick(event, index, this.slideToIndex)
    }
  }

  @autobind
  nextPageClick(onClick) {
    const { pageNumber, total } = this.pageInfo
    const added = pageNumber === 1 ? 1 : 2

    return event => {
      if (onClick) onClick(event, (total + added), this.slideToIndex)
    }
  }

  pageCount(key, pageSize) {
    if (key === 'previous') return pageSize
    return this.remainder < pageSize ? this.remainder : pageSize
  }

  paginationCard(key) {
    const { pagination, theme } = this.props
    const { pageSize } = this.pageInfo
    const name = `carousel-pagination-${key}`

    const [paginationNav, props] = parseArgs(pagination[key], Button, {
      count: this.pageCount(key, pageSize),
      'data-tid': name,
      key: randomId(name),
      className: theme[`Carousel_${key}`],
    })

    return createElement(
      paginationNav,
      { ...props, onClick: this[`${key}PageClick`](props.onClick) },
    )
  }

  renderNavigationButton(key) {
    const { navigation } = this.props
    const [Navigation, props] = parseArgs(navigation[key], CarouselNavigation)

    return (onClick, disabled) => (
      <Navigation
        disabled={disabled}
        {...props}
        direction={key}
        onClick={onClick}
      />
    )
  }

  @autobind
  renderItem(item) {
    return item
  }

  render() {
    const {
      onSlide,
      selectedIndex,
      className,
      theme,
      items,
      navigation,
      pagination,
      ...rest
    } = this.props

    return (
      <div
        className={classnames(
          className,
          theme.Carousel,
        )}
        data-tid="carousel"
      >
        <Slider
          items={this.items}
          renderItem={this.renderItem}
          onSlide={this.onSlide}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          startIndex={selectedIndex}
          infinite={false}
          swipeThreshold={10}
          preventDefaultTouchmoveEvent
          {...rest}
          {...this.navigation}
          ref={carousel => { this.carousel = carousel }}
        />
      </div>
    )
  }
}
