import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import theme from './mocks/theme'
import ThemedCarouselNavigation from '../CarouselNavigation'

const CarouselNavigation = ThemedCarouselNavigation.WrappedComponent
const items = [
  <div key="1">Test 1</div>,
  <div key="2">Test 2</div>,
  <div key="3">Test 3</div>,
  <div key="4">Test 4</div>,
]

describe('Carousel Navigation', () => {
  it('applies a theme classname and adds direction', () => {
    const wrapper = shallow(<CarouselNavigation theme={theme} direction="previous" />)
    const className = wrapper.prop('className')
    expect(className).toEqual('CarouselNavigation-previous')
  })

  it('renders passed children', () => {
    const snap = renderer
      .create(
        <CarouselNavigation
          theme={theme}
          direction="next"
        >
          {items}
        </CarouselNavigation>)
      .toJSON()
    expect(snap).toMatchSnapshot()
  })

  it('applies a data-tid with direction', () => {
    const wrapper = shallow(<CarouselNavigation theme={theme} direction="next" />)
    const dataTid = wrapper.prop('data-tid')
    expect(dataTid).toEqual('carousel-navigation-next')
  })

  it('allows props to be passed through', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<CarouselNavigation theme={theme} onClick={onClick} />)
    expect(wrapper.prop('onClick')).toEqual(onClick)
  })
})
