import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import theme from './mocks/theme'
import ThemedCarousel from '../Carousel'
import ThemedCarouselNavigation from '../CarouselNavigation'

const Carousel = ThemedCarousel.WrappedComponent
const Navigation = ThemedCarouselNavigation.WrappedComponent

const items = [
  <div key="1">Test 1</div>,
  <div key="2">Test 2</div>,
  <div key="3">Test 3</div>,
  <div key="4">Test 4</div>,
]

describe('Carousel', () => {
  it('applies a theme classname', () => {
    const wrapper = shallow(<Carousel theme={theme} />)
    const className = wrapper.prop('className')
    expect(className).toEqual('Carousel')
  })

  it('renders passed children and adds data-tid', () => {
    const snap = renderer
      .create(<Carousel>{items}</Carousel>)
      .toJSON()
    expect(snap).toMatchSnapshot()
  })

  it('has a data-tid', () => {
    const wrapper = shallow(<Carousel>{items}</Carousel>)
    expect(wrapper.find('[data-tid="carousel"]')).toHaveLength(1)
  })

  describe('navigation', () => {
    it('renders navigation buttons based on object', () => {
      const snap = renderer.create(
        <Carousel
          navigation={{
            next: {
              children: 'Next',
            },
            previous: {
              children: 'Previous',
            },
          }}
        >
          {items}
        </Carousel>
      )
      .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('renders navigation buttons based on custom node', () => {
      const snap = renderer.create(
        <Carousel
          navigation={{
            previous: (<Navigation direction="previous">
              Prior
            </Navigation>),
            next: (<Navigation direction="next">
              Upcoming
            </Navigation>),
          }}
        >
          {items}
        </Carousel>
      ).toJSON()

      expect(snap).toMatchSnapshot()
    })
  })

  describe('pagination', () => {
    const paginationProps = {
      pageNumber: 1,
      total: 10,
      pageSize: 2,
      next: {
        children: 'Next Page',
        className: 'someName',
      },
      previous: {
        children: 'Previous Page',
        className: 'anotherName',
      },
    }
    it('displays next card when there are more listings to view', () => {
      const wrapper = shallow(<Carousel pagination={paginationProps} items={items} />)
      const renderedItems = wrapper.find('ImageGallery').props().items
      expect(renderedItems[renderedItems.length - 1].props.children).toEqual('Next Page')
    })
    it('displays previous card when not on the first page', () => {
      const pagination = { ...paginationProps, pageNumber: 2 }
      const wrapper = shallow(<Carousel pagination={pagination} items={items} />)
      const renderedItems = wrapper.find('ImageGallery').props().items
      expect(renderedItems[0].props.children).toEqual('Previous Page')
    })
  })
})
