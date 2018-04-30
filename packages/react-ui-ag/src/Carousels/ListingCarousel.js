import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import debounce from 'lodash/debounce'
import { themed } from 'react-themed'
import { Carousel } from '@rentpath/react-ui-core'
import autobind from 'autobind-decorator'

import {
  MobileMapListing,
  SingleFamilyMobileMapListing,
} from '../Listings'

const DEBOUNCE_WAIT = 550

@themed(/^ListingCarousel/,
  { pure: true }
)
export default class ListingCarousel extends PureComponent {
  static propTypes = {
    listings: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string,
    theme: PropTypes.object,
    listingProps: PropTypes.object,
    singleFamilyListingProps: PropTypes.object,
    selectedIndex: PropTypes.number,
    onSlide: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    selectedIndex: 0,
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: this.props.selectedIndex,
      selectedListingId: this.props.listings[this.props.selectedIndex].id,
    }
  }

  componentDidMount() {
    this.listingClickHandler = this.listingClickHandler
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedIndex !== this.props.selectedIndex) {
      this.updateSelectedIndex(nextProps.selectedIndex)
    }
  }

  @autobind
  updateSelectedIndex(selectedIndex) {
    const { onSlide, listings } = this.props
    this.setState({ selectedIndex, selectedListingId: listings[selectedIndex].id })
    if (onSlide) onSlide(listings[selectedIndex], selectedIndex)
  }

  @autobind
  listingClickHandler(foo, listing) {
    console.log('listing', listing)
    const index = this.props.listings.findIndex(l => {
      console.log(l, listing)
      return l.id === listing.id
    })

    console.log(foo, listing, index)

    if (index !== this.state.selectedIndex) {
      this.updateSelectedIndex(index)
    } else if (this.props.listingProps.onClick) {
      const { listings } = this.props
      this.props.listingProps.onClick(index, listings)
    }
  }

  @autobind
  renderListing(listing, index) {
    const { listingProps, singleFamilyListingProps } = this.props
    const ListingComponent = listing.singleFamily ? SingleFamilyMobileMapListing : MobileMapListing
    const props = listing.singleFamily ? singleFamilyListingProps : listingProps

    console.log(listing.id, this.state.selectedListingId)

    return (
      <ListingComponent
        index={listing.id}
        listing={listing}
        {...props}
        isActive={listing.id === this.state.selectedListingId}
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
      onSlide,
      ...props
    } = this.props

    console.log(this.props.listings)

    return (
      <Carousel
        className={classnames(
          className,
          theme.ListingCarousel
        )}
        selectedIndex={this.state.selectedIndex}
        onSlide={this.updateSelectedIndex}
        renderItem={this.renderListing}
        items={listings}
        {...props}
      />
    )
  }
}
