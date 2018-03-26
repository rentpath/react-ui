import React from 'react'
import { shallow, mount } from 'enzyme'
import LinkItem from '../LinkItem'

describe('components/LinkItem', () => {
  it('renders a list item with a link', () => {
    const props = { url: '/foo', text: 'Foo Text' }
    const wrapper = shallow(<LinkItem {...props} />)

    expect(wrapper.find('li')).toBeDefined()
    expect(wrapper.find('Link')).toBeDefined()
  })

  describe('root node', () => {
    const props = { url: '/foo', text: 'Foo Text' }
    const wrapper = shallow(<LinkItem {...props} />)

    it('applies `className`', () => {
      const className = 'someClassName'
      wrapper.setProps({ className })
      expect(wrapper.prop('className')).toEqual(className)
    })

    it('applies default `tagItem` when none specified', () => {
      expect(wrapper.prop('data-tag_item')).toEqual('link')
    })

    it('applies `tagItem`', () => {
      const tagItem = 'taggedItemName'
      wrapper.setProps({ tagItem })
      expect(wrapper.prop('data-tag_item')).toEqual(tagItem)
    })
  })

  describe('<Link />', () => {
    const props = { url: '/foo', text: 'Foo Text' }
    const wrapper = mount(<LinkItem {...props} />)
    const Link = wrapper.find('Link')

    it('applies `text`', () => {
      expect(Link.text()).toEqual(props.text)
    })

    it('applies `url`', () => {
      expect(Link.prop('to')).toEqual(props.url)
    })
  })

  describe('<a>', () => {
    const props = { url: '/foo', text: 'Foo Text', useAnchor: true }
    const wrapper = mount(<LinkItem {...props} />)
    const AnchorTag = wrapper.find('a')

    it('applies `text`', () => {
      expect(AnchorTag.text()).toEqual(props.text)
    })

    it('applies `url`', () => {
      expect(AnchorTag.prop('href')).toEqual(props.url)
    })
  })
})
