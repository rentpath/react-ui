import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import Listing from './Listing'
import DesktopListingInfo from './DesktopListingInfo'

const buttonPropTypes = PropTypes.shape({
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  valueLocation: PropTypes.string,
})

@themed(['DesktopListing'])
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
    const { theme, ...props } = this.props

    return (
      <Listing
        {...this.props}
        className={theme.DesktopListing}
        listingInfoComponents={
          <DesktopListingInfo {...props} />
        }
      />
    )
  }
}
