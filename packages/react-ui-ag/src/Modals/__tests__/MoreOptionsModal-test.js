import React from 'react'
import { mount, shallow } from 'enzyme'
import { Button, Text } from '@rentpath/react-ui-core'
import theme from './mocks/theme'
import ThemedMoreOptionsModal from '../MoreOptionsModal'

const MoreOptionsModal = ThemedMoreOptionsModal.WrappedComponent

describe('MoreOptionsModal', () => {
  const props = {
    theme,
    closeModal: jest.fn(),
    filterTotal: 0,
    total: 0,
    isOpen: true,
    onSubmit: jest.fn(),
    clearFilters: jest.fn(),
    restoreFilters: jest.fn(),
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('close button', () => {
    it('closes modal and restores filters on click ', () => {
      const wrapper = shallow(<MoreOptionsModal {...props} />)
      const closeButton = wrapper.find(Button).first().dive().dive()
      const closeButtonText = closeButton.text()

      closeButton.simulate('click')

      expect(closeButton).toHaveLength(1)
      expect(closeButtonText).toBe('Close')
      expect(props.restoreFilters).toHaveBeenCalledTimes(1)
      expect(props.closeModal).toHaveBeenCalledTimes(1)
      expect(props.onSubmit).not.toHaveBeenCalled()
      expect(props.clearFilters).not.toHaveBeenCalled()
    })
  })

  describe('cancel button', () => {
    it('closes modal and restores filters on click', () => {
      const wrapper = mount(<MoreOptionsModal {...props} />)
      const cancelButton = wrapper.find('.MoreOptionsModal_Cancel').at(0)
      const cancelButtonText = cancelButton.text()

      cancelButton.simulate('click')

      expect(cancelButton).toHaveLength(1)
      expect(cancelButtonText).toBe('Cancel')
      expect(props.restoreFilters).toHaveBeenCalledTimes(1)
      expect(props.closeModal).toHaveBeenCalledTimes(1)
      expect(props.onSubmit).not.toHaveBeenCalled()
      expect(props.clearFilters).not.toHaveBeenCalled()
    })
  })

  describe('reset button', () => {
    it('clears all filters', () => {
      const wrapper = mount(<MoreOptionsModal {...props} />)
      const resetButton = wrapper.find('.MoreOptionsModal_ResetAll').at(0)
      const resetButtonText = resetButton.text()

      resetButton.simulate('click')

      expect(resetButton).toHaveLength(1)
      expect(resetButtonText).toBe('Reset All')
      expect(props.restoreFilters).not.toHaveBeenCalled()
      expect(props.closeModal).not.toHaveBeenCalled()
      expect(props.onSubmit).not.toHaveBeenCalled()
      expect(props.clearFilters).toHaveBeenCalledTimes(1)
    })
  })

  describe('submit button', () => {
    it('closes the modal and applies all filters', () => {
      const wrapper = mount(<MoreOptionsModal {...props} />)
      const submitButton = wrapper.find('.MoreOptionsModal_Submit').at(0)
      const submitButtonText = submitButton.text()

      submitButton.simulate('click')

      expect(submitButton).toHaveLength(1)
      expect(submitButtonText).toBe('Show 0 Properties')
      expect(props.restoreFilters).not.toHaveBeenCalled()
      expect(props.closeModal).toHaveBeenCalledTimes(1)
      expect(props.onSubmit).toHaveBeenCalledTimes(1)
      expect(props.clearFilters).not.toHaveBeenCalled()
    })
  })

  describe('property count', () => {
    const submit = wrapper => wrapper.find('.MoreOptionsModal_Submit').childAt(0)
    const header = wrapper => wrapper.find(Text).dive().childAt(0)

    it('displays the total when there is no "filterTotal"', () => {
      const wrapper = shallow(<MoreOptionsModal {...props} total={100} />)

      expect(header(wrapper).text()).toBe('100 Properties Found')
      expect(submit(wrapper).text()).toBe('Show 100 Properties')
    })

    it('displays "filterTotal" when it is present', () => {
      const wrapper = shallow(<MoreOptionsModal {...props} total={100} filterTotal={90} />)

      expect(header(wrapper).text()).toBe('90 Properties Found')
      expect(submit(wrapper).text()).toBe('Show 90 Properties')
    })

    it('displays default property count if no "total" and "filterTotal"', () => {
      const wrapper = shallow(<MoreOptionsModal theme={props.theme} />)

      expect(header(wrapper).text()).toBe('0 Properties Found')
      expect(submit(wrapper).text()).toBe('Show 0 Properties')
    })
  })
})
