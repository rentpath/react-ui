import React from 'react'
import { mount, shallow } from 'enzyme'
import ThemedDrawer from '../Drawer'
import theme from './mocks/theme'
import { ToggleButton } from '../../Button'

const Drawer = ThemedDrawer.WrappedComponent

describe('Drawer', () => {
  it('renders the base class and children', () => {
    const props = {
      theme,
      className: theme.Drawer,
      children: (<div>Content</div>),
    }

    const wrapper = mount(<Drawer {...props} />)

    expect(wrapper.hasClass('Drawer')).toBeTruthy()
    expect(wrapper.find('[data-tid="drawer-content"]').contains([props.children])).toBeTruthy()
  })

  it('sets the default state to toggled on', () => {
    const props = {
      theme,
      className: theme.Drawer,
      children: <a href="#">Toggle</a>,
    }

    const wrapper = mount(<Drawer {...props} />)
    expect(wrapper.find(ToggleButton).hasClass('Drawer-Button-on')).toBeTruthy()
  })

  it('sets value to prop value', () => {
    const props = {
      theme,
      className: theme.Drawer,
      children: <a href="#">Toggle</a>,
    }

    const wrapper = mount(<Drawer {...props} />)
    expect(wrapper.find(ToggleButton).hasClass('Drawer-Button-on')).toBeTruthy()
    wrapper.setProps({ visible: false })
    expect(wrapper.find(ToggleButton).hasClass('Drawer-Button-off')).toBeTruthy()
  })

  it('fires callback function which returns alternating true and false', () => {
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

    const wrapper = shallow(<Drawer {...props} />)
    const drawer = wrapper.find('[data-tid="drawer"]')
    expect(drawer.props().style).toEqual({ transform: 'translateY(205px)' })
  })
})
