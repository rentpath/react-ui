import React from 'react'
import { shallow } from 'enzyme'
import ThemedMapbox from '../Mapbox'

const Mapbox = ThemedMapbox.WrappedComponent

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
})
