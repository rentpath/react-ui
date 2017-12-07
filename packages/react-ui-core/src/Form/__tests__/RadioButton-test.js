import React from 'react'
import { shallow } from 'enzyme'
import ThemedRadioButton from '../RadioButton'
import Field from '../Field'
import theme from './mocks/theme'

const RadioButton = ThemedRadioButton.WrappedComponent

describe('Form/RadioButton', () => {
  it('renders a radio field', () => {
    const props = {
      theme,
      onChange: event => {
        const { value } = event.target
        return value
      },
    }
    const wrapper = shallow(<RadioButton {...props} />)
    expect(wrapper.find(Field).prop('type')).toEqual('radio')
  })

  it('renders a checked radio field', () => {
    const props = {
      theme,
      checked: true,
      onChange: event => {
        const { value } = event.target
        return value
      },
    }
    const wrapper = shallow(<RadioButton {...props} />)
    expect(wrapper.find(Field).props()).toHaveProperty('checked', true)
  })

  describe('themes', () => {
    it('renders a radio field with checked theme', () => {
      const props = {
        theme,
        checked: true,
        onChange: event => {
          const { value } = event.target
          return value
        },
      }
      const wrapper = shallow(<RadioButton {...props} />)
      expect(wrapper.find(Field).prop('className')).toContain('RadioButton-checked')
    })

    it('renders a hidden radio field', () => {
      const props = {
        theme,
        hideInputElement: true,
        onChange: event => {
          const { value } = event.target
          return value
        },
      }
      const wrapper = shallow(<RadioButton {...props} />)
      expect(wrapper.find(Field).prop('className')).toContain('RadioButton-hidden')
    })

    it('renders a vertically-oriented radio field', () => {
      const props = {
        theme,
        hideInput: true,
        orientation: 'vertical',
        onChange: event => {
          const { value } = event.target
          return value
        },
      }
      const wrapper = shallow(<RadioButton {...props} />)
      expect(wrapper.find(Field).prop('className')).toContain('RadioButton-vertical')
    })
  })
})
