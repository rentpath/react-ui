import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { parseArgs, randomId } from '@rentpath/react-ui-utils'
import { Card, Text, RatingBar, Button } from '@rentpath/react-ui-core'
import classNames from 'classnames'

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
  }

  // TODO: replace favoriteButton children with heart svg
  static defaultProps = {
    theme: {},
    ratings: { fillColor: '#FBB900', backgroundFillColor: '#9B9B9B' },
    favoriteButton: { children: 'favorite-heart' },
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
        theme.ListingCell_CTA,
        theme[`ListingCell_CTA-${type}`],
        className,
      ),
      'data-tid': `${type}-cta-button`,
    }))
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

  renderRatingBar(props) {
    const {
      theme,
      ratings,
      listingDetails,
      viewType,
      RatingItem,
    } = this.props

    const { listingId, rating, numRatings } = listingDetails

    const [RatingsBar, ratingProps] = parseArgs(ratings, RatingBar)
    return (
      <RatingsBar
        {...props}
        {...ratingProps}
        uniqueId={`${listingId}-${viewType}`}
        score={rating}
        label={`${numRatings}`}
        className={theme.ListingCell_Rating}
        RatingItem={RatingItem}
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
      favoriteButton,
      ...props
    } = this.props

    const ctaButtons = this.generateCtaButtons(props)
    const multipleCTAs = ctaButtons.length > 1

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
