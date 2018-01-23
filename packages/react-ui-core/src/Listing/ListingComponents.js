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
      [contextItem]: PropTypes.string,
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
  ['Address', 'address'],
].reduce((acc, curr) => { acc[curr[0]] = createTextComponent(...curr); return acc }, {})

const Ratings = (props, { rating }) => (
  rating ? <RatingBar {...rating} /> : null
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

export default {
  ...components,
  Ratings,
  Photos,
}
