import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import isEqual from 'lodash/isEqual'
import intersection from 'lodash/intersection'
import pick from 'lodash/pick'
import autobind from 'autobind-decorator'

@themed(/^ListingCell/, { pure: true })

export default class ListingCell extends Component {
  static propTypes = {
    listing: PropTypes.object,
    children: PropTypes.node,
    theme: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
  }

  static childContextTypes = {
    bedrooms: PropTypes.node,
    bathrooms: PropTypes.node,
    name: PropTypes.node,
    location: PropTypes.object,
    price: PropTypes.node,
    rating: PropTypes.object,
    unitLevelAvailability: PropTypes.node,
    address: PropTypes.node,
    neighborhood: PropTypes.node,
    availability: PropTypes.node,
    photo: PropTypes.shape({
      url: PropTypes.string,
    }),
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string,
        path: PropTypes.string,
      }),
    ),
  }

  static defaultProps = {
    isActive: true,
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
      'availability',
      'address',
      'neighborhood',
      'photo',
      'photos',
    ])
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps.listing, this.props.listing)
      || this.props.isActive !== nextProps.isActive
      || this.props.className !== nextProps.className
  }

  @autobind
  handleClick(event) {
    const { listing, onClick, isActive } = this.props
    const nonPropagationTargets = ['BUTTON', 'ANCHOR', 'USE', 'SVG']

    const { target, currentTarget } = event
    const allTargets = [(target.tagName || '').toUpperCase(), (currentTarget.tagName || '').toUpperCase()]
    const anyMatches = intersection(nonPropagationTargets, allTargets) || []

    if (!isActive || !event || !anyMatches.length) {
      if (onClick) onClick(listing)
    }
  }

  render() {
    const {
      theme,
      className,
      children,
      listing,
      onClick,
      isActive,
      ...props
    } = this.props

    return (
      <div
        className={classnames(theme.ListingCell, className)}
        data-tid="listing-cell"
        role="presentation"
        onClick={this.handleClick}
        {...props}
      >
        {children}
      </div>
    )
  }
}
