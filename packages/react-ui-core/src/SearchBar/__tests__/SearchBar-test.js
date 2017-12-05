import React from 'react'
import { mount } from 'enzyme'
import SearchBar from '../SearchBar'

const theme = {
  Text: 'Text',
  Input: 'Input',
  resetButton: 'resetButton',
  submitButton: 'submitButton',
  suggestions: 'suggestions',
  ListItem: 'ListItem',
  Selected: 'Selected',
  SearchBar: 'SearchBar',
}

describe('SearchBar', () => {
  it('renders a text input', () => {
    const wrapper = mount(<SearchBar theme={theme} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders a reset button if passed in props', () => {
    const wrapper = mount(
      <SearchBar resetButton={<button />} theme={theme} />
    )
    expect(wrapper.find('button').prop('className')).toBe('resetButton')
  })

  it('renders a submit button if passed in props', () => {
    const wrapper = mount(
      <SearchBar submitButton={<button />} theme={theme} />
    )
    expect(wrapper.find('button').prop('className')).toBe('submitButton')
  })

  describe('onSubmit prop', () => {
    const onSubmit = jest.fn()
    const wrapper = mount(
      <SearchBar
        submitButton={<button />}
        theme={theme}
        onSubmit={onSubmit}
      />
    )
    it('is called when submitButton is clicked', () => {
      wrapper.find('button').simulate('click')
      expect(onSubmit).toBeCalled()
    })

    it('is called on enter press', () => {
      wrapper.find('input').simulate('keypress', { key: 'Enter' })
      expect(onSubmit).toBeCalled()
    })
  })

  it('uses placeholder if passed in props', () => {
    const wrapper = mount(
      <SearchBar
        placeholder="test"
      />
    )
    expect(wrapper.find('input').props().placeholder).toBe('test')
  })

  it('uses value if passed in props', () => {
    const wrapper = mount(
      <SearchBar
        value="test"
      />
    )
    expect(wrapper.find('input').props().value).toBe('test')
  })

  it('passes theme to the input', () => {
    const wrapper = mount(
      <SearchBar
        theme={theme}
      />
    )
    expect(wrapper.find('input').prop('theme')).toEqual(theme)
  })
  // it('Renders suggestions in a List', () => {})
  // it('does not show suggestions by default', () => {})
  // it('closes suggestions list when a suggestion is clicked', () => {})
})
