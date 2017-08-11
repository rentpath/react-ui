import PropTypes from 'prop-types'
import React from 'react'

const SchemaOrgMarkup = ({
  tagItem,
  renderedRating,
  className,
  aggregateTotal,
  metaTotalReviews,
}) => (
  <div
    data-tag_item={tagItem}
    itemScope
    itemProp="aggregateRating"
    itemType="https://schema.org/AggregateRating"
  >
    <meta itemProp="worstRating" content="1.0" />
    <meta itemProp="bestRating" content="5.0" />
    <span className={className} itemProp="ratingValue">
      {aggregateTotal}
    </span>
    { !!metaTotalReviews && <meta itemProp="reviewCount" content ={metaTotalReviews} /> }
    {renderedRating}
  </div>
)

SchemaOrgMarkup.propTypes = {
  tagItem: PropTypes.string,
  renderedRating: PropTypes.node,
  className: PropTypes.string,
  aggregateTotal: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  metaTotalReviews: PropTypes.number,
}

SchemaOrgMarkup.defaultProps = {
  tagItem: 'cr3',
}

export default SchemaOrgMarkup
