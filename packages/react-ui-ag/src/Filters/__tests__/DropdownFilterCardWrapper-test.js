import React from 'react'
import { shallow } from 'enzyme'
import theme from './mocks/theme'
import DropdownFilterCardWrapper from '../DropdownFilterCardWrapper'
import RadioGroupFilterCard from '../RadioGroupFilterCard'

describe('DropdownFilterCardWrapper', () => {
  const radioGroupFilterProps = {
    fields: [
      { label: 'Foo', value: 'o' },
      { label: 'Bar', value: 'r' },
      { label: 'Baz', value: 'z' },
    ],
    FilterCard: RadioGroupFilterCard,
    theme,
  }
  it('injects onClick function into applyButton that calls original onClick', () => {
    const injectionProps = { ...radioGroupFilterProps, applyButton: { onClick: jest.fn() } }
    const wrapper = shallow(<DropdownFilterCardWrapper {...injectionProps} />)
    wrapper.find(RadioGroupFilterCard).props().applyButton.onClick()
    expect(injectionProps.applyButton.onClick).toHaveBeenCalled()
    expect(injectionProps.applyButton.onClick)
      .not.toEqual(wrapper.find(RadioGroupFilterCard).props().applyButton.onClick)
  })

  it('injects onClick function into cancelButton that calls original onClick', () => {
    const injectionProps = { ...radioGroupFilterProps, cancelButton: { onClick: jest.fn() } }
    const wrapper = shallow(<DropdownFilterCardWrapper {...injectionProps} />)
    wrapper.find(RadioGroupFilterCard).props().cancelButton.onClick()
    expect(injectionProps.cancelButton.onClick).toHaveBeenCalled()
    expect(injectionProps.cancelButton.onClick)
      .not.toEqual(wrapper.find(RadioGroupFilterCard).props().cancelButton.onClick)
  })

  it('injects onSelect function into applyButton onClick function', () => {
    const injectionProps = { ...radioGroupFilterProps, onSelect: jest.fn() }
    const wrapper = shallow(<DropdownFilterCardWrapper {...injectionProps} />)
    wrapper.find(RadioGroupFilterCard).props().applyButton.onClick()
    expect(injectionProps.onSelect).toHaveBeenCalled()
  })

  it('injects onSelect function into cancelButton onClick function', () => {
    const injectionProps = { ...radioGroupFilterProps, onSelect: jest.fn() }
    const wrapper = shallow(<DropdownFilterCardWrapper {...injectionProps} />)
    wrapper.find(RadioGroupFilterCard).props().cancelButton.onClick()
    expect(injectionProps.onSelect).toHaveBeenCalled()
  })

  it('injects handleValueChange function into applyButton onClick function', () => {
    const injectionProps = { ...radioGroupFilterProps, handleValueChange: jest.fn() }
    const wrapper = shallow(<DropdownFilterCardWrapper {...injectionProps} />)
    wrapper.find(RadioGroupFilterCard).props().applyButton.onClick()
    expect(injectionProps.handleValueChange).toHaveBeenCalled()
  })

  it('injects handleValueChange function into cancelButton onClick function', () => {
    const injectionProps = { ...radioGroupFilterProps, handleValueChange: jest.fn() }
    const wrapper = shallow(<DropdownFilterCardWrapper {...injectionProps} />)
    wrapper.find(RadioGroupFilterCard).props().cancelButton.onClick()
    expect(injectionProps.handleValueChange).toHaveBeenCalled()
  })
})
