import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { parseArgs, randomId } from '@rentpath/react-ui-utils'
import { Card, Text, RatingBar, Button } from '@rentpath/react-ui-core'
import classNames from 'classnames'

/* eslint-disable  jsx-a11y/no-static-element-interactions */
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
    onFavoriteClick: PropTypes.func,
    RatingItem: PropTypes.func,
  }

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
    return createElement(...parseArgs(cta, Button, {
      ...props,
      key: randomId(),
      onClick: this.handleClick(cta.onClick),
      className: classNames(
        theme.ListingCell_CTA,
        theme[`ListingCell_CTA-${cta.type}`],
        className,
      ),
      'data-tid': `${cta.type}-cta-button`,
    }))
  }

  renderRatingBar(props) {
    const {
      theme,
      ratings,
      listingDetails,
      viewType,
      RatingItem,
    } = this.props
    const [RatingsBar, ratingProps] = parseArgs(ratings, RatingBar)
    return (
      <RatingsBar
        uniqueId={`${listingDetails.listingId}-${viewType}`}
        score={listingDetails.rating}
        label={`${listingDetails.numRatings}`}
        className={theme.ListingCell_Rating}
        RatingItem={RatingItem}
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
      onFavoriteClick,
      RatingItem,
      ctaSection,
      ...props
    } = this.props

    const ctaButtons = this.generateCtaButtons(props)
    const multipleCTAs = ctaButtons.length > 1

    return (
      <Card
        {...props}
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
          <div className={theme.ListingCell_Carousel}>Carousel</div>
          <div
            data-tid="listing-cell-coupon"
            className={theme.ListingCell_Coupon}
          >
            Coupon
          </div>
          <div
            className={theme.ListingCell_Favorite}
            onClick={this.handleClick(onFavoriteClick)}
            data-tid="favorite-heart"
          >
            Favorite
          </div>
        </div>

        <div className={theme.ListingCell_Bottom}>

          <div className={theme.ListingCell_Info_Top}>
            <div className={theme.ListingCell_Details_Top}>
              <Text className={theme.ListingCell_Price}>{listingDetails.price}</Text>
              <Text className={theme.ListingCell_Title}>{listingDetails.title}</Text>
            </div>
            {ctaButtons.length > 1 && ctaButtons[0]}
          </div>

          <div className={theme.ListingCell_Info_Bottom}>
            <div className={theme.ListingCell_Details_Bottom}>
              <Text className={theme.ListingCell_Bedroom}>{listingDetails.bedroomText}</Text>
              {multipleCTAs ?
                this.renderRatingBar(props) :
                <Text className={theme.ListingCell_Availability}>
                  {listingDetails.availableText}
                </Text>
              }
            </div>
            {multipleCTAs ? ctaButtons[1] : ctaButtons[0]}
          </div>

        </div>
      </Card>
    )
  }
}

/* eslint-enable jsx-a11y/no-static-element-interactions */
