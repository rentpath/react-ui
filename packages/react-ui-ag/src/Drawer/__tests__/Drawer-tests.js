import React from 'react'
import { mount } from 'enzyme'
import ThemedDrawer from '../Drawer'
import theme from './mocks/theme'

const Drawer = ThemedDrawer.WrappedComponent

describe('Drawer', () => {
  it('renders the base class and children', () => {
    const props = {
      theme,
      className: theme.Drawer,
      children: (<div>Content</div>),
    }

    const wrapper = mount(<Drawer {...props} />)

    console.log(wrapper.debug())

    expect(wrapper.hasClass('Drawer')).toBeTruthy()
    expect(wrapper.find('[data-tid="drawer-content"]').contains([<div>Content</div>])).toBeTruthy()
  })

  it('sets the default state to toggled on', () => {
    const props = {
      theme,
      className: theme.Drawer,
      children: <a href="#">Toggle</a>,
    }

    const wrapper = mount(<Drawer {...props} />)
    expect(wrapper.find('[data-tid="toggle-button"]').first().hasClass('ToggleButton-on')).toBeTruthy()
  })

  it('sets value to prop value', () => {
    const props = {
      theme,
      className: theme.Drawer,
      children: <a href="#">Toggle</a>,
    }

    const wrapper = mount(<Drawer {...props} />)
    expect(wrapper.find('[data-tid="toggle-button"]').first().hasClass('ToggleButton-on')).toBeTruthy()
    wrapper.setProps({ visible: false })
    expect(wrapper.find('[data-tid="toggle-button"]').first().hasClass('ToggleButton-off')).toBeTruthy()
  })

  it('It fires callback function which returns alternating true and false', () => {
    const props = {
      theme,
      className: theme.Drawer,
      children: <a href="#">Toggle</a>,
    }
    const onClick = jest.fn()

    const wrapper = mount(<Drawer onClick={onClick} {...props} />)
    wrapper.find('[data-tid="toggle-button"]').first().simulate('click')
    expect(onClick.mock.calls[0][0]).toEqual(false)
    wrapper.find('[data-tid="toggle-button"]').first().simulate('click')
    expect(onClick.mock.calls[1][0]).toEqual(true)
    wrapper.find('[data-tid="toggle-button"]').first().simulate('click')
    expect(onClick.mock.calls[2][0]).toEqual(false)
  })

  it('hides content when visible is set to false', () => {
    const props = {
      theme,
      className: theme.Drawer,
      children: <a href="#">Toggle</a>,
      visible: false,
    }

    const wrapper = mount(<Drawer {...props} />)
    expect(wrapper.find('[data-tid="drawer-content"]')).toHaveLength(0)
  })
})
