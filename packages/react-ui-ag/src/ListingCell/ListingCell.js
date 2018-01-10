import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { parseArgs, randomId } from '@rentpath/react-ui-utils'
import { Card, Text, RatingBar, Button } from '@rentpath/react-ui-core'
import classNames from 'classnames'

const multiType = PropTypes.oneOfType([
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
      multiType,
      PropTypes.array,
    ]),
    onFavoriteToggle: PropTypes.func,
    photos: PropTypes.array,
    onCardClick: PropTypes.func,
    ratings: multiType,
    listingDetails: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
    ratings: { fillColor: '#FBB900', backgroundFillColor: '#9B9B9B' },
  }

  get roundedRating() {
    const { listingDetails: { avgOverallRating } } = this.props

    if (!avgOverallRating) return avgOverallRating
    return Math.round(avgOverallRating * 2.0) / 2.0
  }

  generateCtaButtons() {
    const { ctaSection } = this.props
    let ctaButtons

    if (Array.isArray(ctaSection)) {
      ctaButtons = ctaSection.map(cta => this.renderButton(cta))
    } else {
      ctaButtons = [this.renderButton(ctaSection)]
    }

    return ctaButtons
  }

  handleCTAclick(func) {
    return event => {
      func()
      event.stopPropagation()
    }
  }

  renderButton(cta) {
    const { theme, className } = this.props
    const [FilterButton, props] = parseArgs(cta, Button)
    return (
      <FilterButton
        key={randomId()}
        {...props}
        onClick={this.handleCTAclick(cta.onClick)}
        className={classNames(
          theme[`ListingCell_CTA-${cta.type}`],
          className,
        )}
      />
    )
  }

  renderRatingBar() {
    const {
      theme,
      ratings,
      listingDetails,
      viewType,
      ctaSection,
      onCardClick,
      ...props
    } = this.props
    const [RatingsBar, ratingProps] = parseArgs(ratings, RatingBar)
    return (
      <RatingsBar
        uniqueId={`${listingDetails.listingId}-${viewType}`}
        score={this.roundedRating}
        label={`${listingDetails.numRatings}`}
        className={theme.ListingCell_Rating}
        {...props}
        {...ratingProps}
        fillColor={ratings.fillColor}
        backgroundFillColor={ratings.backgroundFillColor}
      />
    )
  }

  render() {
    const {
      theme,
      viewType,
      onCardClick,
      listingDetails,
      className,
    } = this.props

    const ctaButtons = this.generateCtaButtons()

    return (
      <Card
        className={classNames(
          theme[`ListingCell-${viewType}`],
          className,
        )}
        data-tid="listing-section"
        data-tag_item="padding_box"
        role={'presentation'}
        onClick={onCardClick}
      >
        <div className={theme.ListingCell_Top}>
          <div className={theme.ListingCell_Carousel}>Carousel placeholder</div>
          <div className={theme.ListingCell_Coupon}>Coupon placeholder</div>
          <div className={theme.ListingCell_Favorite}>Favorite heart placeholder</div>
        </div>

        <div className={theme.ListingCell_Bottom}>

          <div className={theme.ListingCell_Info_Top}>
            <div className={theme.ListingCell_Details_Top}>
              <Text className={theme.ListingCell_Price}>{listingDetails.price}</Text>
              <Text className={theme.ListingCell_Title}>{listingDetails.title}</Text>
            </div>
            {ctaButtons.length > 1 &&
              <div className={theme.ListingCell_CTA_Top}>
                {ctaButtons[0]}
              </div>
            }
          </div>

          <div className={theme.ListingCell_Info_Bottom}>
            <div className={theme.ListingCell_Details_Bottom}>
              <Text className={theme.ListingCell_Bedroom}>{listingDetails.bedroomText}</Text>
              {!!listingDetails.numRatings && this.renderRatingBar()}
            </div>
            <div className={theme.ListingCell_CTA_Bottom}>
              {ctaButtons.length > 1 ? ctaButtons[1] : ctaButtons[0]}
            </div>
          </div>

        </div>
      </Card>
    )
  }
}
