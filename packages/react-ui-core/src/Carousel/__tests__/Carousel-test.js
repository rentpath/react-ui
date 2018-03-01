import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import LazyLoad from 'react-lazyload'
import theme from './mocks/theme'
import ThemedCarousel from '../Carousel'
import ThemedCarouselNavigation from '../CarouselNavigation'

const Carousel = ThemedCarousel.WrappedComponent
const Navigation = ThemedCarouselNavigation.WrappedComponent

const onClick = jest.fn()

const items = [
  <div key="1">Test 1</div>,
  <div key="2">Test 2</div>,
  <div key="3">Test 3</div>,
  <div key="4">Test 4</div>,
]

describe('Carousel', () => {
  it('applies a base theme to the root node', () => {
    const wrapper = shallow(<Carousel theme={theme} />)
    const className = wrapper.prop('className')
    expect(className).toEqual('Carousel')
  })

  it('applies a className to the root node', () => {
    const wrapper = shallow(<Carousel theme={theme} className="Foo" />)
    const className = wrapper.prop('className')
    expect(className).toContain('Foo')
  })

  it('includes a static data-tid', () => {
    const wrapper = shallow(<Carousel />)
    expect(wrapper.find('[data-tid="carousel"]')).toHaveLength(1)
  })

  it('renders using a custom renderItem prop', () => {
    const wrapper = mount(
      <Carousel
        items={items}
        renderItem={item => <div className="TestItem">{item}</div>}
      />
    )
    expect(wrapper.find('.TestItem')).toHaveLength(4)
  })

  it('lazyLoads images if required', () => {
    const wrapper = shallow(
      <Carousel
        theme={theme}
        items={items}
        lazyLoad
      />
    )

    expect(wrapper.find(<LazyLoad />)).toBeTruthy()
  })

  describe('slideToIndex', () => {
    let wrapper
    let slide

    beforeEach(() => {
      wrapper = shallow(<Carousel items={items} />)
      slide = jest.fn()
    })

    it('slides to index when carousel and index exist', () => {
      wrapper.instance().carousel = { slideToIndex: slide }
      wrapper.instance().slideToIndex(1)
      expect(slide).toHaveBeenCalled()
    })

    it('does not slide to index when index does not exist', () => {
      wrapper.instance().carousel = { slideToIndex: slide }
      wrapper.instance().slideToIndex(100)
      expect(slide).not.toHaveBeenCalled()
    })

    it('does not slide to index when carousel does not exist', () => {
      wrapper.instance().carousel = undefined
      wrapper.instance().slideToIndex(100)
      expect(slide).not.toHaveBeenCalled()
    })
  })

  describe('navigation', () => {
    it('does not render navigation if none passed', () => {
      const snap = renderer.create(<Carousel items={items} />).toJSON()
      expect(snap).toMatchSnapshot()
    })

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
          items={items}
        />
      )
      .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('renders navigation buttons based on custom node', () => {
      const snap = renderer.create(
        <Carousel
          navigation={{
            previous: (<Navigation key="pior" direction="previous">Prior</Navigation>),
            next: (<Navigation key="upcoming" direction="next">Upcoming</Navigation>),
          }}
          items={items}
        />
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
      const wrapper = mount(<Carousel pagination={paginationProps} items={items} />)
      const previous = wrapper.find('button[data-tid="carousel-pagination-previous"]')
      const next = wrapper.find('button[data-tid="carousel-pagination-next"]')

      expect(previous).toHaveLength(0)
      expect(next.text()).toEqual('Next Page')
    })

    it('displays previous and next card when not on the first page', () => {
      const pagination = { ...paginationProps, pageNumber: 2 }
      const wrapper = mount(<Carousel pagination={pagination} items={items} />)
      const previous = wrapper.find('button[data-tid="carousel-pagination-previous"]')
      const next = wrapper.find('button[data-tid="carousel-pagination-next"]')
      expect(previous.text()).toEqual('Previous Page')
      expect(next.text()).toEqual('Next Page')
    })

    it('displays previous card only when not on first page and total does not exceed current page', () => {
      const pagination = { ...paginationProps, pageNumber: 4 }
      const wrapper = shallow(<Carousel pagination={pagination} items={items} />)
      const renderedItems = wrapper.find('ImageGallery').props().items
      expect(renderedItems[0].props.children).toEqual('Previous Page')
      expect(renderedItems[renderedItems.length - 1].props.children).toEqual('Next Page')
    })

    it('does not call `onClick` when none passed', () => {
      const props = { ...paginationProps, pageNumber: 2 }
      const wrapper = mount(<Carousel pagination={props} items={items} />)
      const previous = wrapper.find('button[data-tid="carousel-pagination-previous"]')
      const next = wrapper.find('button[data-tid="carousel-pagination-next"]')
      previous.simulate('click')
      next.simulate('click')
      expect(onClick).not.toHaveBeenCalled()
    })

    it('calls `onClick` when passed', () => {
      const props = {
        pageNumber: 2,
        total: 10,
        pageSize: 2,
        next: {
          id: 'next',
          onClick,
        },
        previous: {
          id: 'previous',
          onClick,
        },
      }

      const wrapper = mount(<Carousel pagination={props} items={items} />)
      const previous = wrapper.find('button[data-tid="carousel-pagination-previous"]')
      const next = wrapper.find('button[data-tid="carousel-pagination-next"]')
      previous.simulate('click')
      next.simulate('click')
      expect(onClick).toHaveBeenCalled()
      expect(onClick).toHaveBeenCalled()
    })
  })
})
