import React from 'react'
import { mount } from 'enzyme'
import DropdownAnchorText from '../DropdownAnchorText'

describe('DropdownAnchorText', () => {
  it('contains text that is passed in', () => {
    const wrapper = mount(<div><DropdownAnchorText text="Bar" defaultText="Foo" /></div>)
    expect(wrapper.text()).toContain('Bar')
    expect(wrapper.text()).not.toContain('Foo')
  })

  it('contains defaultText if no text is passed', () => {
    const wrapper = mount(<div><DropdownAnchorText defaultText="Foo" /></div>)
    expect(wrapper.text()).toContain('Foo')
  })

  it('contains defaultText if text is null', () => {
    const wrapper = mount(<div><DropdownAnchorText text={null} defaultText="Foo" /></div>)
    expect(wrapper.text()).toContain('Foo')
  })

  it('allows a string to be passed to icon', () => {
    const wrapper = mount(<div><DropdownAnchorText defaultText="Foo" icon="Stuff" /></div>)
    expect(wrapper.text()).toContain('Stuff')
  })

  it('allows html to be passed to icon', () => {
    const icon = <div data-tid="cool-stuff">cool stuff</div>
    const wrapper = mount(<div><DropdownAnchorText defaultText="Foo" icon={icon} /></div>)
    expect(wrapper.find('[data-tid="cool-stuff"]')).toHaveLength(1)
  })
})
