import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import { ListingComponents } from '@rentpath/react-ui-core'
import Listing from './Listing'

@themed([
  'MobileListing',
  'MobileListingSingleFamily',
  'BedsAndUla',
], { pure: true })

export default class MobileListing extends PureComponent {
  static propTypes = {
    listing: PropTypes.object,
    theme: PropTypes.object,
    className: PropTypes.string,
    ratings: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
    ratings: {},
    listing: {},
  }

  get renderInfo() {
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

  render() {
    const {
      theme,
      className,
      listing,
      ratings,
      ...props
    } = this.props

    return (
      <Listing
        listing={listing}
        className={classnames(
          theme.MobileListing,
          this.props.listing ? theme.MobileListingSingleFamily : '',
        )}
        listingInfoComponents={this.renderInfo}
        {...props}
      />
    )
  }
}
