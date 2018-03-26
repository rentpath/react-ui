import React from 'react'
import { shallow, mount } from 'enzyme'
import LinkList from '../LinkList'

const props = {
  links: [
    { url: '/foo', text: 'Foo Text' },
    { url: '/bar', text: 'Bar Text' },
  ],
}

describe('components/LinkList', () => {
  it('renders a unordered list with list items', () => {
    const wrapper = mount(<LinkList {...props} />)

    expect(wrapper.find('ul')).toBeDefined()
    expect(wrapper.find('LinkItem')).toHaveLength(2)
  })

  describe('root node', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<LinkList {...props} />)
    })

    it('does not have a `className`', () => {
      expect(wrapper.prop('className')).toEqual('')
    })

    it('applies `list` to `className`', () => {
      wrapper.setProps({ theme: { list: 'foo' } })
      expect(wrapper.prop('className')).toEqual('foo')
    })

    it('applies `className`', () => {
      wrapper.setProps({ className: 'someName' })
      expect(wrapper.prop('className')).toEqual('someName')
    })

    it('applies `list` and `className` to `className`', () => {
      wrapper.setProps({ theme: { list: 'foo' }, className: 'bar' })
      const className = wrapper.prop('className')
      expect(className).toContain('bar')
      expect(className).toContain('foo')
    })
  })

  describe('LinkItem', () => {
    it('applies `theme.item`', () => {
      const theme = { item: 'itemClass' }
      const wrapper = mount(<LinkList theme={theme} {...props} />)
      const LinkItem = wrapper.find('LinkItem')

      expect(LinkItem.at(0).prop('className')).toEqual(theme.item)
      expect(LinkItem.at(1).prop('className')).toEqual(theme.item)
    })

    it('applies `className`', () => {
      const classNameProps = Object.assign({}, props)
      const className = 'firstLinkClass'
      classNameProps.links[0].className = className
      const wrapper = mount(<LinkList {...classNameProps} />)
      const LinkItem = wrapper.find('LinkItem')

      expect(LinkItem.at(0).prop('className')).toEqual(className)
      expect(LinkItem.at(1).prop('className')).not.toEqual(className)
    })

    it('applies `text` to each item', () => {
      const wrapper = mount(<LinkList {...props} />)
      const LinkItem = wrapper.find('LinkItem')

      expect(LinkItem.at(0).prop('text')).toEqual(props.links[0].text)
      expect(LinkItem.at(1).prop('text')).toEqual(props.links[1].text)
    })

    it('applies `url` to each item', () => {
      const wrapper = mount(<LinkList {...props} />)
      const LinkItem = wrapper.find('LinkItem')

      expect(LinkItem.at(0).prop('url')).toEqual(props.links[0].url)
      expect(LinkItem.at(1).prop('url')).toEqual(props.links[1].url)
    })
  })
})
