import React from 'react'
import { shallow } from 'enzyme'
import ThemedToggleButton from '../ToggleButton'
import theme from './mocks/theme'

const ToggleButton = ThemedToggleButton.WrappedComponent

describe('ToggleButton', () => {
  it('renders', () => {
    const props = {
      theme,
      className: theme.ToggleButton,
      children: <a href="#">Toggle</a>,
    }

    const wrapper = shallow(<ToggleButton {...props} />)
    expect(wrapper.find('[data-tid="toggleButton"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-tid="toggleButton"]').hasClass('ToggleButton')).toBeTruthy()
    expect(wrapper.find('[data-tid="toggleButton"]').contains([<a href="#">Toggle</a>])).toBeTruthy()
  })

  it('sets the default state to off', () => {
    const props = {
      theme,
      className: theme.ToggleButton,
      children: <a href="#">Toggle</a>,
    }

    const wrapper = shallow(<ToggleButton {...props} />)
    expect(wrapper.find('[data-tid="toggleButton"]').hasClass('ToggleButton-Off')).toBeTruthy()
  })

  it('changes switches css class between ToggleButton-On and ToggleButton-Off when toggled', () => {
    const props = {
      theme,
      className: theme.ToggleButton,
      children: <a href="#">Toggle</a>,
    }

    const wrapper = shallow(<ToggleButton {...props} />)
    expect(wrapper.find('[data-tid="toggleButton"]').hasClass('ToggleButton-Off')).toBeTruthy()
    wrapper.find('[data-tid="toggleButton"]').simulate('click')
    expect(wrapper.find('[data-tid="toggleButton"]').hasClass('ToggleButton-On')).toBeTruthy()
  })

  it('sets value to prop value', () => {
    const props = {
      theme,
      className: theme.ToggleButton,
      children: <a href="#">Toggle</a>,
    }

    const wrapper = shallow(<ToggleButton {...props} value />)
    expect(wrapper.find('[data-tid="toggleButton"]').hasClass('ToggleButton-On')).toBeTruthy()
  })

  it('It fires callback function which returns alternating true and false', () => {
    const props = {
      theme,
      className: theme.ToggleButton,
      children: <a href="#">Toggle</a>,
    }
    const onClick = jest.fn()

    const wrapper = shallow(<ToggleButton onClick={onClick} {...props} />)
    wrapper.find('[data-tid="toggleButton"]').simulate('click')
    expect(onClick.mock.calls[0][0]).toEqual(true)
    wrapper.find('[data-tid="toggleButton"]').simulate('click')
    expect(onClick.mock.calls[1][0]).toEqual(false)
    wrapper.find('[data-tid="toggleButton"]').simulate('click')
    expect(onClick.mock.calls[2][0]).toEqual(true)
    console.log(onClick.mock.calls)
  })
})
