import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { ListingComponents } from '@rentpath/react-ui-core'

const buttonPropTypes = PropTypes.shape({
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  valueLocation: PropTypes.string,
})

@themed(['BedsAndBaths', 'UnitLevelAvailabilityAndLastUpdated', 'LastUpdated', 'Phone'])
export default class DesktopListing extends Component {
  static propTypes = {
    index: PropTypes.number,
    listing: PropTypes.object,
    theme: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
    photos: PropTypes.object,
    ratings: PropTypes.object,
    ctaButtons: PropTypes.arrayOf(buttonPropTypes),
    favoriteButton: buttonPropTypes,
    lazyLoad: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
    isActive: PropTypes.bool,
    singleFamily: PropTypes.bool,
  }

  static defaultProps = {
    isActive: true,
    lazyLoad: true,
    theme: {},
    listing: {},
    ratings: {},
    photos: {},
  }

  render() {
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
}
