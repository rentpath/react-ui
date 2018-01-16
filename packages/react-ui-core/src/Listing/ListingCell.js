import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import isEqual from 'lodash/isEqual'
import pick from 'lodash/pick'

@themed(/^ListingCell/, { pure: true })
export default class ListingCell extends Component {
  static propTypes = {
    listing: PropTypes.object,
    children: PropTypes.node,
    theme: PropTypes.object,
    className: PropTypes.string,
  }

  static childContextTypes = {
    bedrooms: PropTypes.node,
    bathrooms: PropTypes.node,
    name: PropTypes.node,
    location: PropTypes.node,
    price: PropTypes.node,
    rating: PropTypes.object,
    unitLevelAvailability: PropTypes.node,
    address: PropTypes.node,
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string,
        path: PropTypes.string,
      }),
    ),
  }

  static defaultProps = {
    theme: {},
    listing: {},
  }

  getChildContext() {
    return pick(this.props.listing, [
      'bedrooms',
      'bathrooms',
      'name',
      'location',
      'price',
      'rating',
      'unitLevelAvailability',
      'address',
      'photos',
    ])
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps.listing, this.props.listing)
  }

  render() {
    const { theme, className, children, listing, ...props } = this.props

    return (
      <div
        className={classnames(theme.ListingCell, className)}
        data-tid="listing-cell"
        {...props}
      >
        {children}
      </div>
    )
  }
}
