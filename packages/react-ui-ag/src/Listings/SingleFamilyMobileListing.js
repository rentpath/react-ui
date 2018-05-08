import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import autobind from 'autobind-decorator'
import { ListingComponents, Schema } from '@rentpath/react-ui-core'
import Listing from './Listing'

const buttonPropTypes = PropTypes.shape({
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  valueLocation: PropTypes.string,
})

@themed(['SingleFamilyMobileListing'])
export default class SingleFamilyMobileListing extends Component {
  static propTypes = {
    index: PropTypes.number,
    listing: PropTypes.object,
    theme: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
    photos: PropTypes.object,
    propertyName: PropTypes.object,
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
    photos: {},
  }

  @autobind
  getListingInfoComponents() {
    const { listing } = this.props
    return (
      <React.Fragment>
        <ListingComponents.Price />
        <Schema.NameAndUrl url={listing.url}>
          <ListingComponents.Address />
        </Schema.NameAndUrl>
        <ListingComponents.Bedroom />
        <ListingComponents.Availability />
      </React.Fragment>
    )
  }

  render() {
    const { theme } = this.props

    return (
      <Listing
        {...this.props}
        className={theme.SingleFamilyMobileListing}
        listingInfoComponents={this.getListingInfoComponents}
      />
    )
  }
}
