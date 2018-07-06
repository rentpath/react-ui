import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import { ListingComponents } from '@rentpath/react-ui-core'
import Listing from './Listing'

@themed([
  'DesktopListing',
  'BedsAndBaths',
  'UnitLevelAvailabilityAndLastUpdated',
  'LastUpdated',
  'Phone',
], { pure: true })
export default class DesktopListing extends PureComponent {
  static propTypes = {
    listing: PropTypes.object,
    theme: PropTypes.object,
    className: PropTypes.string,
    ratings: PropTypes.object,
    propertyName: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
    listing: {},
    ratings: {},
    propertyName: {},
  }

  get renderInfo() {
    const { theme, listing, ratings, propertyName } = this.props
    const { singleFamily, rating, lastUpdated, phone } = listing

    return (
      <React.Fragment>
        <ListingComponents.Price />
        {singleFamily ?
          <ListingComponents.Address /> :
          <ListingComponents.PropertyName {...propertyName} />
        }
        <div className={theme.BedsAndBaths}>
          <ListingComponents.Bedroom data-tid="bedroom" />
          <ListingComponents.Bathroom />
        </div>
        {singleFamily ?
          <ListingComponents.Availability /> :
          (
            <div className={theme.UnitLevelAvailabilityAndLastUpdated}>
              <ListingComponents.UnitLevelAvailability />
              {lastUpdated && <div className={theme.LastUpdated}>{lastUpdated}</div>}
            </div>
          )
        }
        {rating && !singleFamily &&
          <ListingComponents.Ratings data-tid="ratings" {...ratings} />
        }
        {phone && !singleFamily &&
          <div className={theme.Phone} data-tid="phone">{phone}</div>
        }
      </React.Fragment>
    )
  }

  render() {
    const {
      theme,
      className,
      listing,
      ratings,
      propertyName,
      ...props
    } = this.props

    return (
      <Listing
        listing={listing}
        className={classnames(
          className,
          theme.DesktopListing
        )}
        listingInfoComponents={this.renderInfo}
        {...props}
      />
    )
  }
}
