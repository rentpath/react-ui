import React from 'react'
import { shallow } from 'enzyme'
import PdpMap from '../PdpMap'

const key = 'api-key'

describe('ag/Gmap', () => {
  it('applies an `apiKey` to the root', () => {
    const wrapper = shallow(<PdpMap apiKey={key} listing={{}} />)
    expect(wrapper.prop('apiKey')).toEqual('api-key')
  })

  it('applies extra props correctly', () => {
    const wrapper = shallow(<PdpMap apiKey={key} data-tag_section="map-tag" listing={{}} />)
    expect(wrapper.prop('data-tag_section')).toEqual('map-tag')
  })

  it('applies same coordinates to the map and marker ', () => {
    const position = { lat: 1, lng: 2 }
    const listing = { location: { latitude: position.lat, longitude: position.lng } }
    const wrapper = shallow(<PdpMap apiKey={key} listing={listing} />)

    expect(wrapper.prop('center')).toEqual(position)
    expect(wrapper.find('Marker').prop('marker')()).toHaveProperty('position', position)
  })
})
