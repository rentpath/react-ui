import React from 'react'
import { shallow } from 'enzyme'
import ThemedOverlayView from '../OverlayView'

const OverlayView = ThemedOverlayView.WrappedComponent

const createOverlayView = (props = {}, child) => (
  shallow(
    <OverlayView
      {...props}
    >
      {child || <div>Content</div>}
    </OverlayView>
  )
)

describe('OverlayView', () => {
  it('creates a new overlay view', () => {
    const spy = jest.spyOn(window.google.maps, 'OverlayView')
    createOverlayView()
    expect(spy).toHaveBeenCalledTimes(1)
    spy.mockClear()
  })

  it('opens the overlay view when anchor prop goes non-null', () => {
    const wrapper = createOverlayView()
    const container = wrapper.instance().container
    const anchor = window.google.maps.Marker()

    expect(container.style.display).toBe('none')
    wrapper.setProps({ anchor })
    expect(container.style.display).toBe('block')
  })

  it('closes the overlay view when anchor prop goes null', () => {
    const anchor = window.google.maps.Marker()
    const wrapper = createOverlayView()
    const container = wrapper.instance().container

    wrapper.setProps({ anchor })
    expect(container.style.display).toBe('block')
    wrapper.setProps({ anchor: null })
    expect(container.style.display).toBe('none')
  })

  it('eventBlacklist', () => {
    const wrapper = createOverlayView()
    const expected = wrapper.instance().eventBlacklist
    expect(expected).toMatchSnapshot()
  })
})
