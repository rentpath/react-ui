import React from 'react'
import { shallow } from 'enzyme'
import LazyLoad from 'react-lazyload'
import theme from './mocks/theme'
import ThemedPhotoCarousel from '../PhotoCarousel'

const PhotoCarousel = ThemedPhotoCarousel.WrappedComponent
const items = [
  {
    path: 'imgr/2576db62ffa153ebef00317a5c68a368/',
    caption: 'test 1',
  },
  {
    path: 'imgr/d56984e959a3feb1235f85ee202a0fc6/',
    caption: 'test 2',
  },
  {
    path: 'imgr/fd972eb03a0463c484580349ad5177b7/',
    caption: 'test 3',
  },
]

describe('Photo Carousel', () => {
  it('applies a theme classname', () => {
    const wrapper = shallow(
      <PhotoCarousel
        items={items}
        theme={theme}
        server="https://image.rent.com/"
        dimensions="400-200"
      />
    )
    const className = wrapper.prop('className')
    expect(className).toEqual('PhotoCarousel')
  })

  it('lazyLoads images if required', () => {
    const wrapper = shallow(
      <PhotoCarousel
        theme={theme}
        items={items}
        server="https://image.rent.com/"
        dimensions="400-200"
        lazyLoad={{ once: true, height: 400, width: 300, offset: 200 }}
      />
    )
    expect(wrapper.find(<LazyLoad />)).toBeTruthy()
  })
})
