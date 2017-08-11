import PropTypes from 'prop-types'
import React from 'react'
import styles from './Ratings.css'
import Icon from './Icon'
// import { PdpLink } from 'apps/small/PdpLink'
import classNames from 'classnames'
import DefaultMarkup from './DefaultMarkup.js'
import SchemaOrgMarkup from './SchemaOrgMarkup.js'

export const Star = ({ theme }) => (
  <Icon className={ theme.star } name="star" />
)

Star.propTypes = {
  theme: PropTypes.object,
}

export const EmptyStar = ({ theme }) => (
  <Icon className={theme.star} name="starEmpty" />
)

EmptyStar.propTypes = {
  theme: PropTypes.object,
}

export const HalfStar = ({ theme }) => (
  <span className={ theme.halfStar }>
    <Icon className={ `${theme.star} ${theme.halfStarLeft}` } name="star" />
    <Icon className={ `${theme.star} ${theme.halfStarRight}` } name="starEmpty" />
  </span>
)

HalfStar.propTypes = {
  theme: PropTypes.object,
}

const starCount = stars => {
  const full = Math.floor(stars)
  const half = ((stars - full) !== 0) ? 1 : 0
  const aggregateTotal = full + (half > 0 ? 0.5 : 0.0)

  return { full, half, aggregateTotal }
}

const withTheme = (Component, theme) => () => (
  <Component theme={theme} />
)

const renderStars = ({ full, half }, theme) => {
  const stars = Array(5)
  stars.fill(withTheme(EmptyStar, theme))
  stars.fill(withTheme(Star, theme), 0, full)
  stars.fill(withTheme(HalfStar, theme), full, full + half)

  return stars.map((Comp, key) => <Comp key={key} />)
}

// const renderLabel = (total, className, ratingsDescriptor, withParens) => {
//   if (total) {
//     const labelText = withParens ?
//       `(${total} ${ratingsDescriptor})` : `${total} ${ratingsDescriptor}`
//     return (
//       <div className={classNames(styles.label, className)} >
//         { labelText.trim() }
//       </div>
//     )
//   }
//   return false
// }
//
// const renderLabelWithMarkup = (total, className, ratingsDescriptor, withParens) => {
//   if (total) {
//     if (withParens) {
//       return (
//         <div className={classNames(styles.label, className)}>
//           (<span itemProp="reviewCount">{total}</span> {ratingsDescriptor})
//         </div>
//       )
//     }
//
//     return (
//       <div className={classNames(styles.label, className)}>
//         <span itemProp="reviewCount">{total}</span> {ratingsDescriptor}
//       </div>
//     )
//   }
//
//   return false
// }
//
// const Ratings = ({
//   stars,
//   total,
//   className,
//   ratingsDescriptor,
//   tagItem,
//   reviewsPageUrl,
//   usePdpLink,
//   theme,
//   useSchemaMarkup,
//   metaTotalReviews,
//   withParens,
//   hrefTarget,
// }) => {
//   const renderedStars = renderStars(starCount(stars), theme)
//   const markupLabel = renderLabelWithMarkup(total, className, ratingsDescriptor, withParens)
//   const standardLabel = renderLabel(total, className, ratingsDescriptor, withParens)
//   const label = useSchemaMarkup ? markupLabel : standardLabel
//   let renderedRating
//   if (reviewsPageUrl) {
//     if (usePdpLink) {
//       renderedRating = (
//         <PdpLink to={reviewsPageUrl}>{renderedStars}{label}</PdpLink>
//       )
//     } else {
//       renderedRating = (
//         <a
//           className={styles.reviewLink}
//           data-test-id="ratings-link"
//           href={reviewsPageUrl}
//           target={hrefTarget}
//         >
//           {renderedStars}{label}
//         </a>
//       )
//     }
//   } else {
//     renderedRating = <span>{renderedStars}{label}</span>
//   }
//
//   if (useSchemaMarkup) {
//     return (
//       <SchemaOrgMarkup
//         tagItem={tagItem}
//         renderedRating={renderedRating}
//         className={styles.ratingValue}
//         aggregateTotal={starCount(stars).aggregateTotal}
//         metaTotalReviews={metaTotalReviews}
//       />
//     )
//   }
//
//   return (
//     <DefaultMarkup tagItem={tagItem}>
//       {renderedRating}
//     </DefaultMarkup>
//   )
// }

Ratings.propTypes = {
  stars: PropTypes.number.isRequired,
  total: PropTypes.number,
  className: PropTypes.string,
  ratingsDescriptor: PropTypes.string,
  tagItem: PropTypes.string,
  reviewsPageUrl: PropTypes.string,
  theme: PropTypes.object,
  usePdpLink: PropTypes.bool,
  useSchemaMarkup: PropTypes.bool,
  metaTotalReviews: PropTypes.number,
  withParens: PropTypes.bool,
  hrefTarget: PropTypes.string,
}

Ratings.defaultProps = {
  tagItem: 'cr3',
  ratingsDescriptor: 'Ratings',
  theme: styles,
  useSchemaMarkup: false,
  withParens: false,
  hrefTarget: '_self',
}

export default Ratings
