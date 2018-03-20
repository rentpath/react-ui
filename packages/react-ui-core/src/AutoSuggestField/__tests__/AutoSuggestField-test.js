import React from 'react'
import { mount } from 'enzyme'
import ThemedAutoSuggestField from '../AutoSuggestField'

const AutoSuggestField = ThemedAutoSuggestField.WrappedComponent

const TestButton = props => (<button {...props}>X</button>)

const map = {}

describe('AutoSuggestField', () => {
  beforeAll(() => {
    window.document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb
    })
  })

  const setup = props => {
    const wrapper = mount(
      <AutoSuggestField {...props} />
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
    const { wrapper } = setup({ submitButton: TestButton, clearButton: TestButton })
    expect(wrapper.find('button').length).toBe(2)
  })

  it('renders placeholder prop in input field', () => {
    const { wrapper } = setup({ anchorField: { placeholder: 'test' } })
    expect(wrapper.find('input').props().placeholder).toBe('test')
  })

  it('renders value prop in input field', () => {
    const { wrapper } = setup({ value: 'test' })
    expect(wrapper.find('input').props().value).toBe('test')
  })

  it('should not render suggestions dropdown by default', () => {
    const { wrapper } = setup()
    expect(wrapper.find('[data-tid="card-body"]')).toHaveLength(0)
  })

  it('should perform on click functionality of an item inside menu', () => {
    const testObject = {
      value: -1,
    }

    const { wrapper } = setup({
      suggestions: [1, 2, 3],
      onSelection: value => {
        testObject.value = value
      },
      visible: true,
    })

    expect(testObject.value).toEqual(-1)
    const thirdListItem = wrapper.find('[data-tid="list-item-2"]').at(1)
    thirdListItem.simulate('mouseenter')
    thirdListItem.simulate('click')
    expect(testObject.value).toEqual(3)
  })

  it('should close Dropdown on suggestion selection', () => {
    const { wrapper } = setup({
      suggestions: [1, 2, 3],
      visible: true,
    })

    const thirdListItem = wrapper.find('[data-tid="list-item-2"]').at(1)
    expect(wrapper.find('[data-tid="card-body"]')).toHaveLength(1)
    thirdListItem.simulate('click')
    expect(wrapper.find('[data-tid="card-body"]')).toHaveLength(0)
  })

  it('should clear on ESC keydown', () => {
    const onAfterClear = jest.fn()
    setup({
      clearButton: TestButton,
      onAfterClear,
      visible: true,
    })

    map.keydown({ keyCode: 27 })
    expect(onAfterClear.mock.calls).toHaveLength(1)
  })

  it('fires onVisibilityChange on visiblity state change', () => {
    const onVisibilityChange = jest.fn()
    const { wrapper } = setup({
      clearButton: TestButton,
      value: 'test',
      visible: true,
      onVisibilityChange,
    })
    wrapper.find('button').simulate('click')
    expect(onVisibilityChange).toHaveBeenCalledWith(false)
  })

  it('should submit on enter keydown', () => {
    const onSubmit = jest.fn()
    setup({
      value: 'test',
      visible: true,
      onSubmit,
    })

    map.keydown({ keyCode: 13 })
    expect(onSubmit.mock.calls).toHaveLength(1)
  })

  it('should update the value state to the prop when the prop changes', () => {
    const { wrapper } = setup({
      value: 'foo',
    })
    expect(wrapper.state('value')).toEqual('foo')
    wrapper.setProps({ value: 'bar' })
    expect(wrapper.state('value')).toEqual('bar')
  })

  describe('clearButton', () => {
    const onAfterClear = jest.fn()
    const onVisibilityChange = jest.fn()
    const { wrapper } = setup({
      clearButton: TestButton,
      value: 'test',
      onAfterClear,
      visible: true,
      onVisibilityChange,
    })

    it('closes dropdown on click', () => {
      expect(wrapper.find('[data-tid="card-body"]')).toHaveLength(1)
      wrapper.find('button').simulate('click')
      expect(wrapper.find('[data-tid="card-body"]')).toHaveLength(0)
    })

    it('clears input field on click', () => {
      expect(wrapper.find('input').props().value).toBe('')
    })

    it('fires onAfterClear after clear', () => {
      expect(onAfterClear.mock.calls).toHaveLength(1)
    })

    it('fires onVisibilityChange with false', () => {
      wrapper.find('button').simulate('click')
      expect(onVisibilityChange).toHaveBeenCalledWith(false)
    })
  })

  describe('submitButton', () => {
    const onSubmit = jest.fn()
    const { wrapper } = setup({
      submitButton: TestButton,
      value: 'test',
      visible: true,
      onSubmit,
    })

    it('closes Dropdown on click', () => {
      expect(wrapper.find('button')).toHaveLength(1)
      expect(wrapper.find('[data-tid="card-body"]')).toHaveLength(1)
      wrapper.find('button').simulate('click')
      expect(wrapper.find('[data-tid="card-body"]')).toHaveLength(0)
    })

    it('fires onSubmit on click', () => {
      expect(onSubmit.mock.calls).toHaveLength(1)
    })
  })
})
