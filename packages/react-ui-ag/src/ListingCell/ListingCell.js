import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { parseArgs, randomId } from '@rentpath/react-ui-utils'
import { Card, Text, Button } from '@rentpath/react-ui-core'
import classNames from 'classnames'
import ListingCellBottom from './ListingCellBottom'

const nodeFuncOrObject = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.func,
  PropTypes.object,
])

@themed(/^ListingCell/, {
  pure: true,
})

export default class ListingCell extends Component {

  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    viewType: PropTypes.string,
    ctaSection: PropTypes.oneOfType([
      nodeFuncOrObject,
      PropTypes.array,
    ]),
    onFavoriteToggle: PropTypes.func,
    photos: PropTypes.array,
    onCardClick: PropTypes.func,
    ratings: nodeFuncOrObject,
    listingDetails: PropTypes.object,
    onFavoriteClick: PropTypes.func,
    favoriteButton: nodeFuncOrObject,
    RatingItem: PropTypes.func,
    listingCellBottom: PropTypes.func,
  }

  // TODO: replace favoriteButton children with heart svg
  static defaultProps = {
    theme: {},
    ratings: { fillColor: '#FBB900', backgroundFillColor: '#9B9B9B' },
    favoriteButton: { children: 'favorite-heart' },
    listingCellBottom: ListingCellBottom,
  }

  handleClick(func) {
    return event => {
      func()
      event.stopPropagation()
    }
  }

  // TODO: replace Text with toggleButton
  renderFavoriteButton(props) {
    const { theme, className, favoriteButton, onFavoriteClick } = this.props
    return createElement(...parseArgs(favoriteButton, Text, {
      ...props,
      onClick: this.handleClick(onFavoriteClick),
      className: classNames(
        theme.ListingCell_Favorite,
        className,
      ),
      'data-tid': 'favorite-heart',
    }))
  }

  renderListingCellBottom(props) {
    const {
      theme,
      listingDetails,
      className,
      listingCellBottom,
      RatingItem,
      ctaSection,
    } = this.props

    return createElement(...parseArgs(listingCellBottom, Card, {
      ...props,
      className,
      theme,
      RatingItem,
      ctaSection,
      listingDetails,
    }))
  }

  render() {
    const {
      theme,
      viewType,
      onCardClick,
      listingDetails,
      className,
      onFavoriteClick,
      RatingItem,
      ctaSection,
      favoriteButton,
      listingCellBottom,
      ...props
    } = this.props

    // TODO: replace lines 153-159 with actual Carousel and Coupon

    /* eslint-disable  jsx-a11y/no-static-element-interactions */
    // needed to disable this for the onClick on the favoriteHeart placeholder
    return (
      <Card
        {...props}
        className={classNames(
          theme[`ListingCell-${viewType}`],
          className,
        )}
        data-tid={`listings-cell-${viewType}`}
        onClick={onCardClick}
      >
        <div className={theme.ListingCell_Top}>
          <div className={theme.ListingCell_Carousel}>Carousel</div>
          <div
            data-tid="listing-cell-coupon"
            className={theme.ListingCell_Coupon}
          >
            Coupon
          </div>
          {this.renderFavoriteButton(props)}
        </div>

        {this.renderListingCellBottom(props)}

      </Card>
    )
  }
}

/* eslint-enable jsx-a11y/no-static-element-interactions */
