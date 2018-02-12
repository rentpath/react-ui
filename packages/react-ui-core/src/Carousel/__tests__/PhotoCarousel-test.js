import React from 'react'
import { shallow, mount } from 'enzyme'
import LazyLoad from 'react-lazyload'
import renderer from 'react-test-renderer'
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

const itemsWithProps = [
  {
    path: 'imgr/2576db62ffa153ebef00317a5c68a368/',
    caption: 'test 1',
    itemProps: {
      'data-tag_item': 'firstPhoto',
    },
  },
]

describe('PhotoCarousel', () => {
  it('applies a base theme to the root node', () => {
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

  it('applies prop `className` to the root node', () => {
    const wrapper = shallow(
      <PhotoCarousel
        items={items}
        theme={theme}
        className={'Foo'}
        server="https://image.rent.com/"
        dimensions="400-200"
      />
    )
    const className = wrapper.prop('className')
    expect(className).toContain('Foo')
  })

  it('allows an object to be added to item if needed', () => {
    const wrapper = shallow(
      <PhotoCarousel
        items={itemsWithProps}
        server="https://image.rent.com/"
      />
    )
    const itemProp = wrapper.prop('items')
    expect(itemProp[0].itemProps['data-tag_item']).toBeTruthy()
  })

  describe('when no items', () => {
    it('renders an empty div when empty array', () => {
      const snap = renderer.create(<PhotoCarousel items={[]} server="https://image.rent.com/" />).toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('renders an empty div when null', () => {
      const snap = renderer.create(<PhotoCarousel server="https://image.rent.com/" />).toJSON()
      expect(snap).toMatchSnapshot()
    })
  })

  it('renders correct url based on combination of props passed in', () => {
    const server = 'https://image.rent.com/'
    const dims = '400-200'
    const wrapper = mount(
      <PhotoCarousel
        items={items}
        theme={theme}
        server={server}
        dimensions={dims}
      />
    )
    const images = wrapper.find('img')
    expect(images.at(0).prop('src')).toEqual(`${server}${items[0].path}${dims}`)
    expect(images.at(1).prop('src')).toEqual(`${server}${items[1].path}${dims}`)
    expect(images.at(2).prop('src')).toEqual(`${server}${items[2].path}${dims}`)
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
