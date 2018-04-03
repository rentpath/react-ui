import React from 'react'
import { shallow } from 'enzyme'
import ThemedGmapBase from '../GmapBase'

const GmapBase = ThemedGmapBase.WrappedComponent

const theme = {
  Gmap: 'mapClass',
}

describe('GmapBase', () => {
  it('applies a custom className', () => {
    const wrapper = shallow(<GmapBase className="customMap" />)
    expect(wrapper.prop('className')).toEqual('customMap')
  })

  it('applies a theme className', () => {
    const wrapper = shallow(<GmapBase theme={theme} />)
    expect(wrapper.prop('className')).toEqual('mapClass')
  })

  it('applies extra props correctly', () => {
    const wrapper = shallow(<GmapBase data-tag_section="map-tag" />)
    expect(wrapper.prop('data-tag_section')).toEqual('map-tag')
  })

  it('sets up only those events that have been passed as props', () => {
    const addListener = jest.fn()
    const handleEvent = jest.spyOn(GmapBase.prototype, 'handleEvent')
    const map = { addListener }
    const wrapper = shallow(
      <GmapBase
        onClick={jest.fn()}
        onBoundsChanged={jest.fn()}
      />
    )

    wrapper.instance().map = map
    wrapper.instance().setupEvents()

    expect(map.addListener).toHaveBeenCalledWith('bounds_changed', expect.any(Function))
    expect(map.addListener).toHaveBeenCalledWith('click', expect.any(Function))
    expect(map.addListener).not.toHaveBeenCalledWith('mouseout', expect.any(Function))

    expect(handleEvent).toHaveBeenCalledWith('onBoundsChanged')
    expect(handleEvent).toHaveBeenCalledWith('onClick')
    expect(handleEvent).not.toHaveBeenCalledWith('onMouseOut')
  })

  it('handleEvent passes correct parameters when fired', () => {
    const onClick = jest.fn()
    const addListener = jest.fn()
    const map = { addListener, initializedMap: true }
    const wrapper = shallow(<GmapBase onClick={onClick} />)
    const clickEvent = wrapper.instance().handleEvent('onClick')

    wrapper.instance().map = map
    clickEvent()

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith(map)
  })
})
