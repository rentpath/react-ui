import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import ThemedGmapBase from '../GmapBase'

const GmapBase = ThemedGmapBase.WrappedComponent
const apiKey = 'AIzaSyDfjkBwG1XzdrC-ceFZqozEGBSQidllL8A'

const theme = {
  Gmap: 'mapClass',
}

describe('GmapBase', () => {
  it('applies a custom className', () => {
    const wrapper = mount(<GmapBase className="customMap" />)
    expect(wrapper.prop('className')).toEqual('customMap')
  })

  it('applies a theme className', () => {
    const wrapper = mount(<GmapBase theme={theme} />)
    expect(wrapper.find('Map').prop('className')).toEqual('mapClass')
  })

  it('applies extra props correctly', () => {
    const wrapper = mount(<GmapBase apiKey={apiKey} data-tag_section="map-tag" />)
    expect(wrapper.prop('data-tag_section')).toEqual('map-tag')
  })

  describe('spinner', () => {
    it('uses the prop directly if valid React element', () => {
      const snap = renderer
        .create(<GmapBase apiKey={apiKey} spinner={<div>spinner</div>} />)
        .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('uses the default `div` and applies props if object', () => {
      const snap = renderer
        .create(<GmapBase apiKey={apiKey} spinner={{ 'data-tag_section': 'foo' }} />)
        .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('uses the `Spinner` node passed with props', () => {
      const Spinner = <span />
      const snap = renderer
        .create(<GmapBase apiKey={apiKey} spinner={Spinner} />)
        .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('does not use a spinner if none is passed', () => {
      const snap = renderer
        .create(<GmapBase apiKey={apiKey} />)
        .toJSON()
      expect(snap).toMatchSnapshot()
    })

    describe('closeSpinner', () => {
      jest.useFakeTimers()

      const setup = (spinner = false) => mount(
        <GmapBase
          apiKey={apiKey}
          spinner={spinner}
        />
      )

      it('closes the spinner based on passed `closeDelay`', () => {
        const wrapper = setup({ closeDelay: 100 })
        wrapper.instance().closeSpinner()
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100)
      })

      it('closes the spinner using the default timeout if no `closeDelay` passed', () => {
        const wrapper = setup(<div>spinning...</div>)
        wrapper.instance().closeSpinner()
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500)
      })

      jest.clearAllTimers()
    })
  })

  describe('handleOnReady', () => {
    jest.clearAllTimers()

    const setup = props => mount(
      <GmapBase
        apiKey={apiKey}
        {...props}
      />
    )

    describe('closeSpinner', () => {
      it('fires when `spinner` is defined', () => {
        const closeSpinner = jest.fn()
        GmapBase.prototype.closeSpinner = closeSpinner
        const wrapper = setup({ spinner: { 'data-tag': 'foo' } })
        wrapper.instance().handleOnReady()
        expect(closeSpinner).toHaveBeenCalled()
      })

      it('does not fire when `spinner` is undefined', () => {
        const closeSpinner = jest.fn()
        GmapBase.prototype.closeSpinner = closeSpinner
        const wrapper = setup()
        wrapper.instance().handleOnReady()
        expect(closeSpinner).not.toHaveBeenCalled()
      })
    })

    describe('onReady', () => {
      it('fires when `onReady` is defined', () => {
        const onReady = jest.fn()
        const wrapper = setup({ onReady, spinner: { 'data-tag': 'foo' } })
        wrapper.instance().handleOnReady()
        expect(onReady).toHaveBeenCalled()
      })

      it('does not fire when `onReady` is undefined', () => {
        const onReady = jest.fn()
        const wrapper = setup()
        wrapper.instance().handleOnReady()
        expect(onReady).not.toHaveBeenCalled()
      })
    })
  })
})
