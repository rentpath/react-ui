import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import { ListingComponents, Schema, Text } from '@rentpath/react-ui-core'
import Listing from './Listing'

@themed(/^MobileListing/, { pure: true })
export default class MobileListing extends PureComponent {
  static propTypes = {
    listing: PropTypes.object,
    theme: PropTypes.object,
    className: PropTypes.string,
    ratings: PropTypes.object,
    sponsoredText: PropTypes.string,
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

  get renderInfo() {
    const { theme, listing, ratings, sponsoredText } = this.props
    const { singleFamily, rating, sponsored } = listing

    return (
      <React.Fragment>
        {!singleFamily &&
          <div className={theme.MobileListing_RatingAndSponsored}>
            {rating && <ListingComponents.Ratings data-tid="ratings" {...ratings} />}
            {sponsored && <Text className={theme.MobileListing_Sponsored}>{sponsoredText}</Text>}
          </div>
        }
        <ListingComponents.Price />

        <Schema.NameAndUrl url={listing.url}>
          {singleFamily ?
            <ListingComponents.Address /> :
            <ListingComponents.PropertyName />
          }
        </Schema.NameAndUrl>

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
      ...props
    } = this.props

    return (
      <Listing
        listing={listing}
        className={classnames(
          className,
          theme.MobileListing
        )}
        listingInfoComponents={this.renderInfo}
        {...props}
      />
    )
  }
}
