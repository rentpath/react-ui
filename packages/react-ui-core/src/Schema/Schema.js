import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'

const ApartmentComplex = ({ children, ...rest }) => (
  <div itemType="https://schema.org/ApartmentComplex" itemScope {...rest}>
    {children}
  </div>
)

ApartmentComplex.propTypes = {
  children: PropTypes.node,
}

const AggregateRating = ({ score, count, reviews }) => {
  if (!count && !reviews) {
    return null
  }

  return (
    <div
      itemScope
      itemProp="aggregateRating"
      itemType="https://schema.org/AggregateRating"
    >
      <meta itemProp="worstRating" content="1.0" />
      <meta itemProp="bestRating" content="5.0" />
      <meta itemProp="ratingValue" content={score} />
      {!!count && <meta itemProp="ratingCount" content={count} />}
      {!!reviews && <meta itemProp="reviewCount" content={reviews} />}
    </div>
  )
}

AggregateRating.propTypes = {
  score: PropTypes.number,
  count: PropTypes.number,
  reviews: PropTypes.number,
}

const Address = ({ addressLine1, city, state, zip }) => (
  <span itemType="https://schema.org/PostalAddress" itemProp="address" itemScope>
    <meta itemProp="streetAddress" content={addressLine1} />
    <meta itemProp="addressLocality" content={city} />
    <meta itemProp="addressRegion" content={state} />
    <meta itemProp="postalCode" content={zip} />
  </span>
)

Address.propTypes = {
  addressLine1: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string,
}

const Geo = ({ latitude, longitude }) => {
  if (!latitude || !longitude) {
    return null
  }

  return (
    <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
      <meta itemProp="latitude" content={latitude} />
      <meta itemProp="longitude" content={longitude} />
    </div>
  )
}

Geo.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
}

@themed(['PropertyLink'], { pure: true })
class NameAndUrl extends PureComponent {
  render() {
    const { url, theme, children } = this.props
    return (
      <div itemProp="name">
        {url ?
          <a
            href={url}
            itemProp="url"
            target="_blank"
            className={theme.PropertyLink}
            onClick={event => event.preventDefault()}
          >
            { children }
          </a>
          : children
        }
      </div>
    )
  }
}

NameAndUrl.propTypes = {
  url: PropTypes.string,
  theme: PropTypes.object,
  children: PropTypes.node,
}

export default {
  Address,
  AggregateRating,
  ApartmentComplex,
  Geo,
  NameAndUrl,
}
