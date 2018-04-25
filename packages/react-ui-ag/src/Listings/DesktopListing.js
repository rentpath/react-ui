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
  }

  static defaultProps = {
    theme: {},
    listing: {},
    ratings: {},
  }

  get renderInfo() {
    const { theme, listing, ratings } = this.props
    const { singleFamily, rating, lastUpdated, phone } = listing

    return (
      <React.Fragment>
        <ListingComponents.Price />
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
        {singleFamily ?
          <ListingComponents.Address /> :
          <ListingComponents.PropertyName />
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