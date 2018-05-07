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

  it('closes if loading has been updated to false', () => {
    jest.useFakeTimers()
    const wrapper = shallow(<GmapSpinner loading />)
    wrapper.setProps({ loading: false })
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 0)
    jest.clearAllTimers()
  })

  it('clears the timer on unmount', () => {
    jest.useFakeTimers()
    const clearTimeout = window.clearTimeout
    window.clearTimeout = jest.fn()
    const wrapper = shallow(<GmapSpinner loading />)
    wrapper.setProps({ loading: false })
    wrapper.unmount()
    expect(window.clearTimeout).toHaveBeenCalled()
    window.clearTimeout = clearTimeout
    jest.clearAllTimers()
  })

  describe('close', () => {
    jest.useFakeTimers()

    const setup = props => shallow(
      <GmapSpinner {...props} />
    )

    it('closes the spinner based on passed `closeDelay`', () => {
      const wrapper = setup({ closeDelay: 100 })
      wrapper.instance().close()
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100)
    })

    it('closes the spinner using the default timeout if no `closeDelay` passed', () => {
      const wrapper = setup()
      wrapper.instance().close()
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 0)
    })

    jest.clearAllTimers()
  })
})
