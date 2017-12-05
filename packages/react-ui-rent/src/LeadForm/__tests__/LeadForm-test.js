import React from 'react'
import { mount } from 'enzyme'
import ThemedLeadForm from '../LeadForm'

const LeadForm = ThemedLeadForm.WrappedComponent

describe('LeadForm', () => {
  describe('fields', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount(<LeadForm />)
    })

    it('has necessary form field names', () => {
      expect(wrapper.find('input[name="name"]')).toHaveLength(1)
      expect(wrapper.find('input[name="email"]')).toHaveLength(1)
      expect(wrapper.find('input[name="phone"]')).toHaveLength(1)
      expect(wrapper.find('input[name="opt_in_newsletter"]')).toHaveLength(1)
      expect(wrapper.find('textarea[name="message"]')).toHaveLength(1)
    })

    it('has a submit Button', () => {
      expect(wrapper.find('Button')).toHaveLength(1)
    })
  })
})
