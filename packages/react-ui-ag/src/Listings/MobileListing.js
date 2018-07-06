import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import { ListingComponents, Text } from '@rentpath/react-ui-core'
import Listing from './Listing'

@themed(/^MobileListing/, { pure: true })
export default class MobileListing extends PureComponent {
  static propTypes = {
    listing: PropTypes.object,
    theme: PropTypes.object,
    className: PropTypes.string,
    ratings: PropTypes.object,
    categoryMatch: PropTypes.bool,
    noMatchText: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
    listing: {},
    ratings: {},
  }

  get availabilityOrUpdated() {
    const { theme, listing } = this.props
    const {
      singleFamily,
      lastUpdated,
      unitLevelAvailability,
    } = listing

    if (singleFamily) {
      return <ListingComponents.Availability />
    }
    return unitLevelAvailability ?
      <ListingComponents.UnitLevelAvailability /> :
      <div className={theme.MobileListing_LastUpdated}>{lastUpdated}</div>
  }

  get renderTopComponents() {
    const { theme, listing, ratings, noMatchText } = this.props
    const { singleFamily, rating, sponsored } = listing

    return (
      <React.Fragment>
        {noMatchText && <Text className={theme.MobileListing_NoMatchText}>{noMatchText}</Text>}
        {!singleFamily && (rating || sponsored) &&
          <div className={theme.MobileListing_RatingAndSponsored}>
            {rating && <ListingComponents.Ratings data-tid="ratings" {...ratings} />}
            {sponsored && <Text className={theme.MobileListing_Sponsored}>{sponsored.text}</Text>}
          </div>
        }
      </React.Fragment>
    )
  }

  get renderInfo() {
    const { theme, listing } = this.props
    const { singleFamily } = listing
    return (
      <React.Fragment>
        <ListingComponents.Price />

        {singleFamily ?
          <ListingComponents.Address /> :
          <ListingComponents.PropertyName />
        }

        <div className={theme.MobileListing_BedsAndBaths}>
          <ListingComponents.Bedroom data-tid="bedroom" />
          <ListingComponents.Bathroom />
        </div>

        {this.availabilityOrUpdated}
      </React.Fragment>
    )
  }

  render() {
    const {
      theme,
      className,
      listing,
      ratings,
      noMatchText,
      categoryMatch,
      ...props
    } = this.props

    return (
      <Listing
        listing={listing}
        className={classnames(
          className,
          theme.MobileListing
        )}
        listingTopComponents={this.renderTopComponents}
        listingInfoComponents={this.renderInfo}
        {...props}
      />
    )
  }
}
