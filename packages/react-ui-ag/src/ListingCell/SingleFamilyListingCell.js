import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import ListingCell from './ListingCell'
import SingleFamilyListingCellBottom from './SingleFamilyListingCellBottom'

@themed(/^SingleFamilyListingCell/, {
  pure: true,
})

export default class SingleFamilyListingCell extends Component {

  static propTypes = {
    listingCellBottom: PropTypes.func,
  }

  render() {
    return (
      <ListingCell
        {...this.props}
        listingCellBottom={SingleFamilyListingCellBottom}
      />
    )
  }
}

/* eslint-enable jsx-a11y/no-static-element-interactions */
