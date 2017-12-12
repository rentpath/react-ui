import React from 'react'
import { mount } from 'enzyme'
import AutoSuggestField from '../AutoSuggestField'

const TestButton = props => (<button {...props}>X</button>)

describe('AutoSuggestField', () => {
  const setup = props => {
    const wrapper = mount(
      <AutoSuggestField {...props} />,
    )
    return {
      wrapper,
    }
  }

  it('renders an input', () => {
    const { wrapper } = setup()
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders buttons if passed in props', () => {
    const { wrapper } = setup({ SubmitButton: TestButton, ResetButton: TestButton })
    expect(wrapper.find('button').length).toBe(2)
  })

  it('renders placeholder prop in input field', () => {
    const { wrapper } = setup({ placeholder: 'test' })
    expect(wrapper.find('input').props().placeholder).toBe('test')
  })

  it('renders value prop in input field', () => {
    const { wrapper } = setup({ value: 'test' })
    expect(wrapper.find('input').props().value).toBe('test')
  })

  describe('ResetButton', () => {
    const onAfterReset = jest.fn()
    const { wrapper } = setup({
      ResetButton: TestButton,
      value: 'test',
      onAfterReset,
    })
    it('resets input field on click', () => {
      wrapper.find('button').simulate('click')
      expect(wrapper.find('input').props().value).toBe('')
    })
    it('fires onAfterReset after reset', () => {
      expect(onAfterReset.mock.calls).toHaveLength(1)
    })
  })

  describe('SubmitButton', () => {
    const onSubmit = jest.fn()
    const { wrapper } = setup({
      SubmitButton: TestButton,
      value: 'test',
      onSubmit,
    })
    it('closes Dropdown on click', () => {
      expect(wrapper.find('[data-tid="dropdown-content"]')).toHaveLength(1)
      wrapper.find('button').simulate('click')
      expect(wrapper.find('[data-tid="dropdown-content"]')).toHaveLength(0)
    })
    it('fires onSubmit on click', () => {
      expect(onSubmit.mock.calls).toHaveLength(1)
    })
  })
})
