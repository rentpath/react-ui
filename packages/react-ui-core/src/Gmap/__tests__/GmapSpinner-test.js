import React from 'react'
import { shallow } from 'enzyme'
import ThemedGmapSpinner from '../GmapSpinner'

const GmapSpinner = ThemedGmapSpinner.WrappedComponent

const theme = {
  Gmap_Spinner: 'spinnerClass',
}

describe('GmapSpinner', () => {
  it('applies `className` prop to the root', () => {
    const wrapper = shallow(<GmapSpinner className="foo" />)
    const className = wrapper.prop('className')
    expect(className).toEqual('foo')
  })

  it('applies `theme` prop to the root', () => {
    const wrapper = shallow(<GmapSpinner theme={theme} />)
    const className = wrapper.prop('className')
    expect(className).toEqual('spinnerClass')
  })

  it('allows props to be passed through to the BounceLoader', () => {
    const wrapper = shallow(<GmapSpinner foo="bar" loading />)
    expect(wrapper.childAt(0).prop('foo')).toEqual('bar')
  })
})
