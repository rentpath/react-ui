import React from 'react'
import { shallow } from 'enzyme'
import InfoWindow from '../InfoWindow'

const createInfoWindow = (props = {}, child) => (
  shallow(
    <InfoWindow
      {...props}
    >
      {child || <div>Content</div>}
    </InfoWindow>
  )
)

describe('InfoWindow', () => {
  it('creates a new info window', () => {
    const spy = jest.spyOn(window.google.maps, 'InfoWindow')
    createInfoWindow()
    expect(spy).toHaveBeenCalledTimes(1)
    spy.mockClear()
  })

  it('opens the info window when anchor prop goes non-null', () => {
    const wrapper = createInfoWindow()
    const spy = jest.spyOn(InfoWindow.prototype, 'openWindow')
    const anchor = { test: 'test anchor' }
    wrapper.setProps({ anchor })
    expect(spy).toHaveBeenCalledTimes(1)
    spy.mockClear()
  })

  it('closes the info window when anchor prop goes null', () => {
    const wrapper = createInfoWindow({ anchor: { test: 'test anchor' } })
    const spy = jest.spyOn(InfoWindow.prototype, 'closeWindow')
    wrapper.setProps({ anchor: null })
    expect(spy).toHaveBeenCalledTimes(1)
    spy.mockClear()
  })

  it('sets up only those events that have been passed as props', () => {
    const spy = jest.spyOn(window.google.maps.event, 'addListener')
    createInfoWindow({
      onCloseClick: () => {},
      onDomReady: () => {},
    })
    expect(spy).toHaveBeenCalledWith(expect.any(Object), 'closeclick', expect.any(Function))
    expect(spy).toHaveBeenCalledWith(expect.any(Object), 'domready', expect.any(Function))
    expect(spy).not.toHaveBeenCalledWith(expect.any(Object), 'zindex_changed', expect.any(Function))
    spy.mockClear()
  })
})
