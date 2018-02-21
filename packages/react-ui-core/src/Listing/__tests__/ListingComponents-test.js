import React from 'react'
import { shallow } from 'enzyme'
import ListingComponents, { createTextComponent } from '../ListingComponents'
import { RatingBar } from '../../Ratings'
import { PhotoCarousel } from '../../Carousel'
import { Text } from '../../Text'

describe('ListingComponents', () => {
  describe('.createTextComponent', () => {
    let TextComponent

    beforeEach(() => {
      TextComponent = createTextComponent('Foo', 'bar').WrappedComponent
    })

    it('creates a component whose display name is set to the provided name', () => {
      expect(TextComponent.displayName).toEqual('Foo')
    })

    it('creates a component that accepts text to display via a dynamically titled context', () => {
      const wrapper = shallow(<TextComponent />, {
        context: { bar: 'baz' },
      })
      expect(wrapper.context('bar')).toEqual('baz')
    })

    it('themes the component with the provided name', () => {
      const wrapper = shallow(<TextComponent theme={{ Foo: 'Foo' }} />, { context: { bar: 'baz' } })
      expect(wrapper.find(Text).props().className).toContain('Foo')
    })
  })

  describe('Ratings', () => {
    it('returns null if the rating context is null', () => {
      const wrapper = shallow(<ListingComponents.Ratings />)
      expect(wrapper.find(RatingBar).exists()).toBeFalsy()
    })

    it('returns a RatingBar if the rating context is not null', () => {
      const wrapper =
        shallow(<ListingComponents.Ratings />, { context: { rating: { score: 4 } } })
      expect(wrapper.find(RatingBar).exists()).toBeTruthy()
    })

    it('passes the rating context on as the props to RatingBar', () => {
      const rating = { score: 5 }
      const wrapper = shallow(<ListingComponents.Ratings />, { context: { rating } })
      expect(wrapper.find(RatingBar).prop('score')).toEqual(rating.score)
    })
  })

  describe('Photos', () => {
    it('returns null if the photos context is null', () => {
      const wrapper = shallow(<ListingComponents.Photos />)
      expect(wrapper.find(PhotoCarousel).exists()).toBeFalsy()
    })

    it('returns a PhotoCarousel if the photos context is not null', () => {
      const wrapper =
        shallow(<ListingComponents.Photos />, { context: { photos: [{ caption: 'foo', path: 'bar' }] } })
      expect(wrapper.find(PhotoCarousel).exists()).toBeTruthy()
    })

    it('passes the photos context on as the items props to PhotoCarousel', () => {
      const photos = [{ caption: 'foo bar', path: 'baz' }]
      const wrapper = shallow(<ListingComponents.Photos />, { context: { photos } })
      expect(wrapper.find(PhotoCarousel).prop('items')).toEqual(photos)
    })
  })

  describe('Photo', () => {
    const Photo = ListingComponents.Photo.WrappedComponent
    const url = 'http://www.images.com/foo'

    it('returns null if there is no photo in the context', () => {
      const wrapper = shallow(<Photo />)
      expect(wrapper.find('div').exists()).toBeFalsy()
    })

    it('returns null if there is no url in the photo', () => {
      const wrapper = shallow(<Photo />, { context: { photo: { foo: 'bar' } } })
      expect(wrapper.find('div').exists()).toBeFalsy()
    })

    it('puts the url in a CSS background-image inside a div', () => {
      const wrapper = shallow(<Photo />, { context: { photo: { url } } })
      expect(wrapper.find('div').prop('style')).toEqual({ backgroundImage: `url(${url})` })
    })

    it('passes extra props into the photo div', () => {
      const wrapper = shallow(<Photo foo="bar" />, { context: { photo: { url } } })
      expect(wrapper.find('div').prop('foo')).toEqual('bar')
    })

    it('passes anything inside the photo from context into the div as props', () => {
      const wrapper = shallow(<Photo foo="bar" />, { context: { photo: { url, foo: 'bar' } } })
      expect(wrapper.find('div').prop('foo')).toEqual('bar')
    })
  })

  const types = ['Bedroom', 'Bathroom', 'PropertyName', 'Price', 'Location', 'UnitLevelAvailability', 'Address']

  types.forEach(item => {
    it(`contains a ${item} component`, () => {
      expect(ListingComponents[item]).toBeTruthy()
    })
  })
})
