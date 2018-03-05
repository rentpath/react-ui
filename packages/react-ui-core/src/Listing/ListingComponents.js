import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import { Text } from '../Text'
import { RatingBar } from '../Ratings'
import { PhotoCarousel } from '../Carousel'

export const createTextComponent = (name, contextItem) => {
  @themed([name])
  class TextComponent extends Component {
    static displayName = name
    static propTypes = {
      className: PropTypes.string,
      theme: PropTypes.object,
    }

    static defaultProps = {
      theme: {},
    }

    static contextTypes = {
      [contextItem]: PropTypes.node,
    }

    render() {
      const item = this.context[contextItem]
      const { theme, className, ...props } = this.props

      if (!item) return null
      return (
        <Text
          className={classnames(
            className,
            theme[name]
          )}
          data-tid={name.toLowerCase()}
          {...props}
        >
          {item}
        </Text>
      )
    }
  }

  return TextComponent
}

const components = [
  ['Bedroom', 'bedrooms'],
  ['Bathroom', 'bathrooms'],
  ['PropertyName', 'name'],
  ['Price', 'price'],
  ['Location', 'location'],
  ['UnitLevelAvailability', 'unitLevelAvailability'],
  ['Availability', 'availability'],
  ['Address', 'address'],
  ['Neighborhood', 'neighborhood'],
].reduce((acc, curr) => { acc[curr[0]] = createTextComponent(...curr); return acc }, {})

const Ratings = (props, { rating }) => (
  rating ? <RatingBar {...props} {...rating} /> : null
)

Ratings.contextTypes = {
  rating: PropTypes.object,
}

const Photos = (props, { photos }) => (
  photos ? <PhotoCarousel {...props} items={photos} /> : null
)

Photos.contextTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
}

const Photo = ({ className, theme, ...props }, { photo }) => {
  const { url, ...photoProps } = photo || {}

  if (!url) return null
  return (
    <div
      style={{ backgroundImage: `url(${photo.url})` }}
      className={classnames(className, theme.Photo)}
      {...props}
      {...photoProps}
    />
  )
}

Photo.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object,
}

Photo.defaultProps = {
  theme: {},
}

Photo.contextTypes = {
  photo: PropTypes.object,
}

export default {
  ...components,
  Ratings,
  Photos,
  Photo: themed(['Photo'])(Photo),
}
