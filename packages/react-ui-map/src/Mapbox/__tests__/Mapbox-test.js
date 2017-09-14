import React from 'react'
import { mount } from 'enzyme'
import Mapbox from '../Mapbox'

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({
    on: (_, callback) => callback(this),
    isMock: true,
    accessToken: null,
  }),
}))

describe('<Mapbox />', () => {
  it('renders a map container div', () => {
    const props = {
      className: 'testing',
    }
    const wrapper = mount(<Mapbox {...props} />)
    expect(wrapper.find('.testing').length).toBe(1)
  })

  it('sets the map state', () => {
    const wrapper = mount(<Mapbox />)
    const map = wrapper.state().map
    expect(map.isMock).toBe(true)
  })

  it('sets the MapboxGL and map context variables', () => {
    const wrapper = mount(<Mapbox />)
    const context = wrapper.instance().getChildContext()
    expect(context.MapboxGL).toBeDefined()
    expect(context.map.isMock).toBe(true)
  })

  it('sets the access token', () => {
    const token = 'testToken1234'
    const wrapper = mount(<Mapbox token={token} />)
    const context = wrapper.instance().getChildContext()
    expect(context.MapboxGL.accessToken).toBe(token)
  })
})
