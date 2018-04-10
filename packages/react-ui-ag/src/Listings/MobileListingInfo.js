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

@themed(['BedsAndUla'])
export default class MobileListingInfo extends Component {
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
    const { singleFamily, rating } = listing

    return (
      <React.Fragment>
        <ListingComponents.Price />
        {singleFamily ?
          <ListingComponents.Address /> :
          <ListingComponents.PropertyName />
        }
        <div className={theme.BedsAndUla}>
          <ListingComponents.Bedroom />
          {!singleFamily && <ListingComponents.UnitLevelAvailability />}
        </div>
        {rating && !singleFamily &&
          <ListingComponents.Ratings {...ratings} />
        }
        {singleFamily && <ListingComponents.Availability />}
      </React.Fragment>
    )
  }
}
