import React from 'react'
import { shallow } from 'enzyme'
import { Gmap as ThemedGmap } from '../Gmap'

const Gmap = ThemedGmap.WrappedComponent

const theme = {
  Gmap: 'mapClass',
}

describe('Gmap', () => {
  it('applies a custom className', () => {
    const wrapper = shallow(<Gmap className="customMap" />)
    expect(wrapper.prop('className')).toEqual('customMap')
  })

  it('applies a theme className', () => {
    const wrapper = shallow(<Gmap theme={theme} />)
    expect(wrapper.prop('className')).toEqual('mapClass')
  })

  it('applies extra props correctly', () => {
    const wrapper = shallow(<Gmap data-tag_section="map-tag" />)
    expect(wrapper.prop('data-tag_section')).toEqual('map-tag')
  })

  it('sets up only those events that have been passed as props', () => {
    const mapSpy = jest.spyOn(window.google.maps.event, 'addListener')
    shallow(
      <Gmap
        onClick={jest.fn()}
        onBoundsChanged={jest.fn()}
      />
    )

    expect(mapSpy).toHaveBeenCalledWith(expect.any(Object), 'bounds_changed', expect.any(Function))
    expect(mapSpy).toHaveBeenCalledWith(expect.any(Object), 'click', expect.any(Function))
    expect(mapSpy).not.toHaveBeenCalledWith(expect.any(Object), 'mouseout', expect.any(Function))
  })
})
