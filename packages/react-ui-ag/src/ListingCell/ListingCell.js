import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { parseArgs, randomId } from '@rentpath/react-ui-utils'
import { Card, Text, RatingBar, Button } from '@rentpath/react-ui-core'
import classNames from 'classnames'

const ctaTypes = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.func,
  PropTypes.object,
  PropTypes.array,
])

@themed(/^ListingCell/, {
  pure: true,
})

export default class ListingCell extends Component {

  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    viewType: PropTypes.string,

    // this would include phone and email CTA
    ctaSection: ctaTypes,
    onFavoriteToggle: PropTypes.func,
    photos: PropTypes.array,
    onCardClick: PropTypes.func,

    // this would include price, name, beds, ula, favoriteStatus? and rating
    listingDetails: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
  }

  get roundedRating() {
    const { listingDetails: { avgOverallRating } } = this.props

    if (!avgOverallRating) return avgOverallRating
    return Math.round(avgOverallRating * 2.0) / 2.0
  }

  get infoSection() {
    const { listingDetails, theme, viewType } = this.props

    return (
      <div className={theme.ListingCell_Details}>
        <Text className={theme.ListingCell_Price}>{listingDetails.price}</Text>
        <Text className={theme.ListingCell_Title}>{listingDetails.title}</Text>
        <Text className={theme.ListingCell_Bedroom}>{listingDetails.bedroomText}</Text>
        {!!listingDetails.numRatings &&
          <RatingBar
            uniqueId={`${listingDetails.listingId}-${viewType}`}
            score={this.roundedRating}
            label={`${listingDetails.numRatings}`}
            className={theme.ListingCell_Rating}
          />
        }
      </div>
    )
  }

  generateCtaButtons() {
    const { ctaSection, theme } = this.props
    let ctaButtons

    if (Array.isArray(ctaSection)) {
      ctaButtons = ctaSection.map(cta => this.renderButton(cta))
    } else {
      ctaButtons = this.renderButton(ctaSection)
    }

    return (
      <div className={theme.ListingCell_CtaSection}>
        {ctaButtons}
      </div>
    )
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

  render() {
    const {
      theme,
      viewType,
      onCardClick,
      className,
    } = this.props

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
        <div className={theme.ListingCell_Carousel}>
          <h1>Carousel placeholder</h1>
        </div>
        <div className={theme.ListingCell_Bottom}>
          {this.infoSection}
          {this.generateCtaButtons()}
        </div>
      </Card>
    )
  }
}
