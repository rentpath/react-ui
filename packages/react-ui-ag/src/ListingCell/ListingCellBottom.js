import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { parseArgs, randomId } from '@rentpath/react-ui-utils'
import { Text, RatingBar, Button } from '@rentpath/react-ui-core'
import classNames from 'classnames'

const nodeFuncOrObject = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.func,
  PropTypes.object,
])

@themed(/^ListingCellBottom/, {
  pure: true,
})

export default class ListingCellBottom extends Component {

  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    ctaSection: PropTypes.oneOfType([
      nodeFuncOrObject,
      PropTypes.array,
    ]),
    ratings: nodeFuncOrObject,
    listingDetails: PropTypes.object,
    RatingItem: PropTypes.func,
  }

  // TODO: replace favoriteButton children with heart svg
  static defaultProps = {
    theme: {},
    ratings: { fillColor: '#FBB900', backgroundFillColor: '#9B9B9B' },
  }

  generateCtaButtons(props) {
    const { ctaSection } = this.props
    let ctaButtons

    if (Array.isArray(ctaSection)) {
      ctaButtons = ctaSection.map(cta => this.renderButton(cta, props))
    } else {
      ctaButtons = [this.renderButton(ctaSection, props)]
    }

    return ctaButtons
  }

  handleClick(func) {
    return event => {
      func()
      event.stopPropagation()
    }
  }

  renderButton(cta, props) {
    const { theme, className } = this.props
    const { type, onClick } = cta
    return createElement(...parseArgs(cta, Button, {
      ...props,
      key: randomId(),
      onClick: this.handleClick(onClick),
      className: classNames(
        theme.ListingCellBottom_CTA,
        theme[`ListingCellBottom_CTA-${type}`],
        className,
      ),
      'data-tid': `${type}-cta-button`,
    }))
  }

  renderRatingBar(props) {
    const {
      theme,
      ratings,
      listingDetails,
      RatingItem,
    } = this.props

    const { listingId, rating, numRatings } = listingDetails

    const [RatingsBar, ratingProps] = parseArgs(ratings, RatingBar)
    return (
      <RatingsBar
        {...props}
        {...ratingProps}
        uniqueId={`${listingId}`}
        score={rating}
        label={`${numRatings}`}
        className={theme.ListingCellBottom_Rating}
        RatingItem={RatingItem}
        fillColor={ratings.fillColor}
        backgroundFillColor={ratings.backgroundFillColor}
      />
    )
  }

  render() {
    const {
      theme,
      listingDetails,
      className,
      RatingItem,
      ctaSection,
      ...props
    } = this.props

    // TODO: replace lines 153-159 with actual Carousel and Coupon

    /* eslint-disable  jsx-a11y/no-static-element-interactions */
    // needed to disable this for the onClick on the favoriteHeart placeholder
    return (
      <div className={theme.ListingCellBottom}>
        <div className={theme.ListingCellBottom_Info}>
          <Text className={theme.ListingCellBottom_Price}>{listingDetails.price}</Text>
          <Text className={theme.ListingCellBottom_Title}>{listingDetails.title}</Text>
          <Text className={theme.ListingCellBottom_Bedroom}>{listingDetails.bedroomText}</Text>
          {this.renderRatingBar(props)}
        </div>
        <div className={theme.ListingCellBottom_CTAs}>
          {this.generateCtaButtons(props)}
        </div>
      </div>
    )
  }
}

/* eslint-enable jsx-a11y/no-static-element-interactions */
