import React from 'react'
import { shallow } from 'enzyme'
import ThemedToggleButton from '../ToggleButton'
import theme from './mocks/theme'

const ToggleButton = ThemedToggleButton.WrappedComponent

describe('ToggleButton', () => {
  it('renders the base class and children', () => {
    const props = {
      theme,
      className: theme.ToggleButton,
      children: <a href="#">Toggle</a>,
    }

    const wrapper = shallow(<ToggleButton {...props} />)
    expect(wrapper.hasClass('ToggleButton')).toBeTruthy()
    expect(wrapper.contains([<a href="#">Toggle</a>])).toBeTruthy()
  })

  it('sets the default state to off', () => {
    const props = {
      theme,
      className: theme.ToggleButton,
      children: <a href="#">Toggle</a>,
    }

    const wrapper = shallow(<ToggleButton {...props} />)
    expect(wrapper.hasClass('ToggleButton-off')).toBeTruthy()
  })

  it('changes switches css class between ToggleButton-on and ToggleButton-off when toggled', () => {
    const props = {
      theme,
      className: theme.ToggleButton,
      children: <a href="#">Toggle</a>,
    }

    const wrapper = shallow(<ToggleButton {...props} />)
    expect(wrapper.hasClass('ToggleButton-off')).toBeTruthy()
    wrapper.simulate('click')
    expect(wrapper.hasClass('ToggleButton-on')).toBeTruthy()
  })

  it('sets value to prop value', () => {
    const props = {
      theme,
      className: theme.ToggleButton,
      children: <a href="#">Toggle</a>,
    }

    const wrapper = shallow(<ToggleButton {...props} value />)
    expect(wrapper.hasClass('ToggleButton-on')).toBeTruthy()
    wrapper.setProps({ value: false })
    expect(wrapper.hasClass('ToggleButton-on')).not.toBeTruthy()
  })

  it('fires callback function which returns alternating true and false', () => {
    const props = {
      theme,
      className: theme.ToggleButton,
      children: <a href="#">Toggle</a>,
    }
    const onClick = jest.fn()

    const wrapper = shallow(<ToggleButton onClick={onClick} {...props} />)
    wrapper.simulate('click')
    expect(onClick.mock.calls[0][0]).toEqual(true)
    wrapper.simulate('click')
    expect(onClick.mock.calls[1][0]).toEqual(false)
    wrapper.simulate('click')
    expect(onClick.mock.calls[2][0]).toEqual(true)
  })

  it('does not toggle when inactive is true', () => {
    const props = {
      theme,
      className: theme.ToggleButton,
      children: <a href="#">Toggle</a>,
    }
    const onClick = jest.fn()

    const wrapper = shallow(<ToggleButton onClick={onClick} {...props} inactive />)
    wrapper.simulate('click')
    expect(onClick.mock.calls[0][0]).toEqual(false)
  })
})
