import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import Listing from './Listing'
import MobileListingInfo from './MobileListingInfo'

const buttonPropTypes = PropTypes.shape({
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  valueLocation: PropTypes.string,
})

@themed(['MobileListing', 'MobileListingSingleFamily'])
export default class MobileListing extends Component {
  static propTypes = {
    index: PropTypes.number,
    listing: PropTypes.object,
    theme: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
    photos: PropTypes.object,
    ratings: PropTypes.object,
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
    ratings: {},
    photos: {},
  }

  render() {
    const { theme, ...props } = this.props
    const { singleFamily } = this.props.listing

    return (
      <Listing
        {...this.props}
        className={classnames(
          theme.MobileListing,
          singleFamily ? theme.MobileListingSingleFamily : '',
        )}
        listingInfoComponents={
          <MobileListingInfo {...props} />
        }
      />
    )
  }
}
