import React from 'react'
import { shallow } from 'enzyme'
import Marker from '../Marker'

const map = { google: 'map' }

describe('ag/Marker', () => {
  it('applies extra props correctly', () => {
    const wrapper = shallow(<Marker map={map} data-tag_section="marker-tag" />)
    expect(wrapper.prop('data-tag_section')).toEqual('marker-tag')
  })

  it('applies an default `icon` to marker', () => {
    const icon = {
      path: window.google.maps.SymbolPath.CIRCLE,
      fillColor: '#d42022',
      fillOpacity: 1,
      scale: 8,
      strokeColor: '#ffffff',
      strokeWeight: 2,
      anchor: new window.google.maps.Point(0, 0),
    }
    const marker = () => ({ icon })
    const wrapper = shallow(<Marker map={map} marker={marker} />)
    expect(wrapper.find('Marker').prop('marker')()).toHaveProperty('icon', icon)
  })
})
