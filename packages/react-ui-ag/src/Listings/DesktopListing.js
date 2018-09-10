import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { themed } from 'react-themed-too'
import classnames from 'classnames'
import { ListingComponents } from '@rentpath/react-ui-core'
import Listing from './Listing'

@themed([
  'DesktopListing',
  'BedsAndBaths',
  'UnitLevelAvailabilityAndLastUpdated',
  'UlaText',
  'Phone',
  'PropertyLink',
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
    const { singleFamily, rating, ulaText, phone } = listing

    return (
      <React.Fragment>
        <ListingComponents.Price />
        <a
          href={listing.url}
          className={theme.PropertyLink}
          target="_blank"
          rel="noopener"
        >
          {
            singleFamily ?
              <ListingComponents.Address /> :
              <ListingComponents.PropertyName {...propertyName} />
          }
        </a>
        <div className={theme.BedsAndBaths}>
          <ListingComponents.Bedroom data-tid="bedroom" />
          <ListingComponents.Bathroom />
        </div>
        {singleFamily ?
          <ListingComponents.Availability /> :
          (
            <div className={theme.UnitLevelAvailabilityAndLastUpdated}>
              {ulaText && <div className={theme.UlaText} data-tid="ulaText">{ulaText}</div>}
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
