import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { themed } from 'react-themed'
import { Carousel } from '@rentpath/react-ui-core'
import autobind from 'autobind-decorator'
import {
  MobileMapListing,
  SingleFamilyMobileMapListing,
} from '../Listings'

@themed(/^ListingCarousel/)
export default class ListingCarousel extends Component {
  static propTypes = {
    listings: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string,
    theme: PropTypes.object,
    listingProps: PropTypes.object,
    singleFamilyListingProps: PropTypes.object,
    selectedIndex: PropTypes.number,
  }

  static defaultProps = {
    theme: {},
    selectedIndex: 0,
  }

  constructor(props) {
    super(props)
    this.state = { selectedIndex: this.props.selectedIndex }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedIndex !== this.props.selectedIndex) {
      this.updatedSelectedIndex(nextProps.selectedIndex)
    }
  }

  @autobind
  updatedSelectedIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }

  @autobind
  listingClickHandler(index) {
    if (index !== this.state.selectedIndex) {
      this.updatedSelectedIndex(index)
    } else if (this.props.listingProps.onClick) {
      this.props.listingProps.onClick(index)
    }
  }

  renderListing(listing, index) {
    const { listingProps, singleFamilyListingProps } = this.props
    const ListingComponent = listing.singleFamily ? SingleFamilyMobileMapListing : MobileMapListing
    const props = listing.singleFamily ? singleFamilyListingProps : listingProps
    return (
      <ListingComponent
        index={index}
        listing={listing}
        {...props}
        prioritizeCardClick={index !== this.state.selectedIndex}
        onClick={this.listingClickHandler}
      />
    )
  }

  render() {
    const {
      className,
      theme,
      listings,
      selectedIndex,
      ...props
    } = this.props

    return (
      <Carousel
        className={classnames(
          className,
          theme.ListingCarousel
        )}
        selectedIndex={this.state.selectedIndex}
        onSlide={this.updatedSelectedIndex}
        items={listings.map((listing, i) => this.renderListing(listing, i))}
        {...props}
      />
    )
  }
}
