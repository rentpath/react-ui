import React from 'react'
import { shallow } from 'enzyme'
import ThemedMapbox from '../Mapbox'

const Mapbox = ThemedMapbox.WrappedComponent

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({
    on: (_, callback) => callback(this),
    isMock: true,
    accessToken: null,
    remove: jest.fn(),
    touchZoomRotate: {
      disableRotation: jest.fn(),
    },
  }),
}))

describe('Mapbox', () => {
  it('renders a map container div', () => {
    const props = {
      className: 'testing',
    }
    const wrapper = shallow(<Mapbox {...props} />)
    expect(wrapper.find('.testing').length).toBe(1)
  })

  it('runs init() on componentDidMount', async () => {
    const init = jest.spyOn(Mapbox.prototype, 'init')
    shallow(<Mapbox />)
    expect(init).toHaveBeenCalled()
  })

  it('sets map loaded on the state', async () => {
    const wrapper = shallow(<Mapbox />, { disableLifecycleMethods: true })
    await wrapper.instance().init()
    const { loaded } = wrapper.state()
    expect(loaded).toBe(true)
  })

  it('sets the MapboxGL and map context variables', async () => {
    const wrapper = shallow(<Mapbox />, { disableLifecycleMethods: true })
    await wrapper.instance().init()
    const context = wrapper.instance().getChildContext()
    expect(context.MapboxGL).toBeDefined()
    expect(context.map.isMock).toBe(true)
  })

  it('sets the access token', async () => {
    const token = 'testToken1234'
    const wrapper = shallow(<Mapbox token={token} />, { disableLifecycleMethods: true })
    await wrapper.instance().init()
    const context = wrapper.instance().getChildContext()
    expect(context.MapboxGL.accessToken).toBe(token)
  })

  describe('isCenterChange', () => {
    const center = {
      lat: 111.111,
      lng: 222.222,
    }

    it('returns false when coordinates are the same', () => {
      const wrapper = shallow(<Mapbox />)
      const result = wrapper.instance().isCenterChange(center, { ...center })
      expect(result).toEqual(false)
    })

    it('returns true when coordinates are the same', () => {
      const wrapper = shallow(<Mapbox />)
      const result = wrapper.instance().isCenterChange(center, { lat: 555.111, lng: 222.123 })
      expect(result).toEqual(true)
    })
  })

  it('removes map on component unmount', async () => {
    const wrapper = shallow(<Mapbox />, { disableLifecycleMethods: false })
    await wrapper.instance().init()
    const context = wrapper.instance().getChildContext()
    const remove = jest.spyOn(context.map, 'remove')

    wrapper.unmount()
    expect(remove).toHaveBeenCalled()
  })

  describe('touchRotate', () => {
    it('enables rotation by default', async () => {
      const wrapper = shallow(<Mapbox />)
      await wrapper.instance().init()

      const context = wrapper.instance().getChildContext()
      const disable = jest.spyOn(context.map.touchZoomRotate, 'disableRotation')
      expect(disable).not.toHaveBeenCalled()
    })

    it('disables rotation if false', async () => {
      const wrapper = shallow(<Mapbox touchRotate={false} />)
      await wrapper.instance().init()

      const context = wrapper.instance().getChildContext()
      const disable = jest.spyOn(context.map.touchZoomRotate, 'disableRotation')
      expect(disable).toHaveBeenCalled()
    })
  })
})
