import React from 'react'
import { shallow, mount } from 'enzyme'
import LazyLoad from 'react-lazyload'
import renderer from 'react-test-renderer'
import theme from './mocks/theme'
import ThemedPhotoCarousel from '../PhotoCarousel'

const PhotoCarousel = ThemedPhotoCarousel.WrappedComponent
const items = [
  {
    path: 'c_fill,w_393,h_160,q_30,fl_progressive:semi,dpr_1.0/fc5b7d16d7ce9c82787883e3a9bc6c30',
    caption: 'test 1',
  },
  {
    path: 'c_fill,w_393,h_160,q_30,fl_progressive:semi,dpr_1.0/d56984e959a3feb1235f85ee202a0fc6',
    caption: 'test 2',
  },
  {
    path: 'c_fill,w_393,h_160,q_30,fl_progressive:semi,dpr_1.0/fd972eb03a0463c484580349ad5177b7',
    caption: 'test 3',
  },
]

const itemsWithProps = [
  {
    path: 'c_fill,w_393,h_160,q_30,fl_progressive:semi,dpr_1.0/fc5b7d16d7ce9c82787883e3a9bc6c30',
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
        server="https://rentpath-res.cloudinary.com/"
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
        className="Foo"
        server="https://rentpath-res.cloudinary.com/"
      />
    )
    const className = wrapper.prop('className')
    expect(className).toContain('Foo')
  })

  it('allows an object to be added to item if needed', () => {
    const wrapper = shallow(
      <PhotoCarousel
        items={itemsWithProps}
        server="https://rentpath-res.cloudinary.com/"
      />
    )
    const itemProp = wrapper.prop('items')
    expect(itemProp[0].itemProps['data-tag_item']).toBeTruthy()
  })

  describe('when no items', () => {
    it('renders an empty div when empty array', () => {
      const snap = renderer.create(<PhotoCarousel items={[]} server="https://rentpath-res.cloudinary.com/" />).toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('renders an empty div when null', () => {
      const snap = renderer.create(<PhotoCarousel server="https://rentpath-res.cloudinary.com/" />).toJSON()
      expect(snap).toMatchSnapshot()
    })
  })

  it('renders correct url based on combination of props passed in', () => {
    const server = 'https://rentpath-res.cloudinary.com/'
    const wrapper = mount(
      <PhotoCarousel
        items={items}
        theme={theme}
        server={server}
      />
    )
    const images = wrapper.find('img')
    expect(images.at(0).prop('src')).toEqual(`${server}${items[0].path}`)
    expect(images.at(1).prop('src')).toEqual(`${server}${items[1].path}`)
    expect(images.at(2).prop('src')).toEqual(`${server}${items[2].path}`)
  })

  it('lazyLoads images if required', () => {
    const wrapper = shallow(
      <PhotoCarousel
        theme={theme}
        items={items}
        server="https://rentpath-res.cloudinary.com/"
        lazyLoad={{ once: true, height: 400, width: 300, offset: 200 }}
      />
    )
    expect(wrapper.find(<LazyLoad />)).toBeTruthy()
  })
})
