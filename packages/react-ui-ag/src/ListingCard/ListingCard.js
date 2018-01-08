import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { parseArgs } from '@rentpath/react-ui-utils'
import { Card, Title, Text, RatingBar } from '@rentpath/react-ui-core'
import classNames from 'classnames'


const objectOrNode = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.func,
  PropTypes.object,
])

@themed(/^ListingCard/, {
  pure: true,
})

export default class ListingCard extends Component {

  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    viewType: PropTypes.string,

    // this would include phone and email CTA
    ctaSection: objectOrNode,
    favorite: objectOrNode,
    photos: PropTypes.array,
    onCardClick: PropTypes.func,

    // this would include price, name, beds, ula, and rating
    listingDetails: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
  }

  get roundedRating() {
    const { listingDetails: { avgOverallRating } } = this.props

    if (!avgOverallRating) return avgOverallRating
    return Math.round(avgOverallRating * 2.0) / 2.0
  }

  get price() {
    //do something with the price data to parse out a proper string
  }

  get bedroomText() {
    //do something with the bedroom data to parse out a proper string
  }

  renderInfoSection() {
    const { listingDetails, theme, viewType } = this.props
    return (
      <div className={theme.CardInfo_infoOverPhoto}>
        <Text className={theme.ListingCard_Price}>{this.price}</Text>
        <Text className={theme.ListingCard_Price}>{listingDetails.title}</Text>
        <Text className={theme.ListingCard_Price}>{this.bedroomText}</Text>
        {!!listingDetails.numRatings &&
          <RatingBar
            uniqueId={`${listingDetails.listingId}-${viewType}`}
            score={this.roundedRating}
            label={`${listingDetails.numRatings}`}
          />
        }
      </div>
    )
  }

  render() {
    const {
      theme,
      viewType,
      onCardClick,
      className,
      photos,
      ...props
    } = this.props

    return (
      <Card
        className={classNames(
          theme[`ListingCard-${viewType}`],
          className,
        )}
        data-tid="listing-section"
        data-tag_item="padding_box"
        role={'presentation'}
        onClick={onCardClick}
      >
        <Carousel
          className={classNames(
            theme.ListingCard_Gallery,
            className,
          )}
          photos={photos}
          {...props}
        />
        { this.renderFavorite() }
        { this.renderCTAs() }
        { this.renderInfoSection() }
      </Card>
    )
  }
}

//TODO: Move to CTA component

// <div className={theme['ListingCard-overlay']}>
//   <div className={classNames(
//     theme.CardInfo_contactIcons,
//     theme[`CardInfo_contactIcons-${viewType}`])}
//   >
//     {this.phoneCTA}
//     {this.emailCTA}
//   </div>
// </div>
// ctaTags(ctaType) {
//   const { isActiveCard } = this.props
//
//   if (!isActiveCard) return {}
//
//   const emailTagging = {
//     'data-tag_item': 'check_availability_button',
//   }
//
//   const phoneTagging = {
//     'data-tag_action': 'lead_submission',
//     'data-tag_item': null,
//     'data-tag_selection': 'phone',
//   }
//
//   return ctaType === 'phone' ? phoneTagging : emailTagging
// }
// @autobind
// ctaHandler(event) {
//   const { isActiveCard } = this.props
//
//   if (!isActiveCard) event.preventDefault()
// }
//
// @autobind
// emailClickHandler(event) {
//   const {
//     isActiveCard,
//     onEmailClick,
//     listing,
//   } = this.props
//
//   // prevent link clicks
//   event.preventDefault()
//
//   // prevent PDP clicks, on the parent div
//   event.stopPropagation()
//
//   if (!isActiveCard) return
//   if (onEmailClick) onEmailClick(listing)
// }
//
// get emailCTA() {
//   const {
//     listing,
//     emailIcon,
//     viewType,
//     theme,
//   } = this.props
//
//   let center = ''
//
//   if (!(listing.mPhone && !listing.noVacancy && listing.isPaid)) {
//     center = 'center'
//   }
//
//   return (
//     <a
//       href={`/${listing.listingSeoPath}#pdp-contact-top`}
//       onClick={this.emailClickHandler}
//       {...this.ctaTags('email')}
//     >
//       <div className={theme[`CardInfo_contactIcon-${emailIcon}-${viewType}${center}`]}>
//         <Icon
//           className={classNames(
//             theme[`CardInfo_contactIcon-${emailIcon}`],
//             theme[`CardInfo_contactIcon-${emailIcon}-${viewType}${center}`]
//           )}
//           name={emailIcon}
//           data-tid="email-contact-icon"
//           data-nopdplink
//         />
//         <span>
//           <p className={theme[`CardInfo_contactIcon-${emailIcon}-${viewType}${center}`]}>
//             {this.ctaText}
//           </p>
//         </span>
//       </div>
//     </a>
//   )
// }
//
// get formatMDN() {
//   return formatPhone(this.props.listing.mPhone)
// }
//
// get phoneCTA() {
//   const {
//     theme,
//     listing,
//     type,
//   } = this.props
//
//   if (listing.mPhone && !listing.noVacancy && listing.isPaid) {
//     return (
//       <a
//         href={`tel:${listing.mPhone}`}
//         onClick={this.ctaHandler}
//         {...this.ctaTags('phone')}
//       >
//         <div className={theme[`CardInfo_contactIcon-${type}`]}>
//           <Icon
//             className={classNames(
//               theme[`CardInfo_contactIcon-${contactIcon}`],
//               theme[`CardInfo_contactIcon-${contactIcon}-${viewType}`]
//             )}
//             name={contactIcon}
//             data-tid="contact-icon"
//             data-nopdplink
//           />
//           <span>
//             <p
//               className={theme[`CardInfo_contactIcon-${contactIcon}-${viewType}`]}
//               data-nopdplink
//             >
//               {this.formatMDN}
//             </p>
//           </span>
//         </div>
//       </a>
//     )
//   }
//   return null
// }
//
// get ctaText() {
//   const { listing } = this.props
//
//   if (listing.listingAvailUnitCount > 0) {
//     return 'Contact Property'
//   }
//   return 'Check Availability'
// }

//TODO: Move to details component
