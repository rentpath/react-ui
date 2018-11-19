import React from 'react'
import { shallow } from 'enzyme'
import PdpMap from '../PdpMap'
import MarkerIcons from '../markerIcons'

const key = 'api-key'
const position = { lat: 1, lng: 2 }
const listing = { location: { latitude: position.lat, longitude: position.lng } }

const setup = props => (
  shallow(
    <PdpMap
      apiKey={key}
      listing={listing}
      data-tag_section="map-tag"
      {...props}
    />
  )
)
describe('ag/Gmap', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setup()
  })

  it('applies an `apiKey` to the root', () => {
    expect(wrapper.prop('apiKey')).toEqual('api-key')
  })

  it('applies extra props correctly', () => {
    expect(wrapper.prop('data-tag_section')).toEqual('map-tag')
  })

  it('applies same coordinates to the map and marker ', () => {
    expect(wrapper.prop('center')).toEqual(position)
    expect(wrapper.find('Marker').prop('marker')()).toHaveProperty('position', position)
  })

  it('sets the default icon to blackDotIconWithBalloon', () => {
    expect(wrapper.find('Marker').prop('marker')()).toHaveProperty('icon', MarkerIcons.blackDotIconWithBalloon())
  })

  it('accepts an icon name', () => {
    wrapper = setup({ mapMarkerStyle: 'redPdpMapBalloon' })
    expect(wrapper.find('Marker').prop('marker')()).toHaveProperty('icon', MarkerIcons.redPdpMapBalloon())
  })
})
