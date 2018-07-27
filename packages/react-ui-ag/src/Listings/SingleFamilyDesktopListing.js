import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import autobind from 'autobind-decorator'
import { ListingComponents } from '@rentpath/react-ui-core'
import Listing from './Listing'

const buttonPropTypes = PropTypes.shape({
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  valueLocation: PropTypes.string,
})

@themed(['SingleFamilyDesktopListing', 'BedsAndBaths', 'Phone'])
export default class SingleFamilyDesktopListing extends Component {
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
  }

  static defaultProps = {
    isActive: true,
    lazyLoad: true,
    theme: {},
    listing: {},
    ratings: {},
    photos: {},
  }

  @autobind
  getListingInfoComponents() {
    const { theme, listing } = this.props
    const { phone } = listing

    return (
      <React.Fragment>
        <ListingComponents.Price />
        <div className={theme.BedsAndBaths}>
          <ListingComponents.Bedroom data-tid="bedroom" />
          •
          <ListingComponents.Bathroom />
        </div>
        <ListingComponents.Availability />
        <ListingComponents.Address />
        {phone &&
          <div className={theme.Phone} data-tid="phone">{phone}</div>
        }
      </React.Fragment>
    )
  }

  render() {
    const {
      theme,
    } = this.props

    return (
      <Listing
        {...this.props}
        className={theme.SingleFamilyDesktopListing}
        listingInfoComponents={this.getListingInfoComponents}
      />
    )
  }
}
