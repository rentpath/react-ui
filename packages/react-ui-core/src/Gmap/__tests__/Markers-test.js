import React from 'react'
import { shallow } from 'enzyme'
import Markers from '../Markers'
import geojson from './helpers/geojson.json'
import { setupMarker, removeMarker } from '../utils/markerHelpers'

const MARKER = ({ properties, geometry }) => ({
  ...properties,
  position: {
    lng: geometry.coordinates[0],
    lat: geometry.coordinates[1],
  },
  key: properties.id,
})

jest.mock('../utils/markerHelpers', () => ({
  setupMarker: jest.fn(),
  removeMarker: jest.fn(),
}))

describe('Markers', () => {
  beforeEach(() => {
    removeMarker.mockClear()
    setupMarker.mockClear()
  })

  describe('append', () => {
    it('clears out all markers when append is false (default)', () => {
      const wrapper = shallow(<Markers map={{ google: 'map' }} geojson={geojson} />)
      removeMarker.mockClear()
      wrapper.setProps({ geojson: null })
      expect(removeMarker).toHaveBeenCalledTimes(3)
    })

    it('does not clear out existing markers if append is true', () => {
      const wrapper = shallow(<Markers map={{ google: 'map' }} append />)
      removeMarker.mockClear()
      wrapper.setProps({ geojson })
      expect(removeMarker).not.toHaveBeenCalled()
    })
  })

  it('removes all markers on unmount', () => {
    const wrapper = shallow(<Markers map={{ google: 'map' }} geojson={geojson} />)
    removeMarker.mockClear()
    wrapper.unmount()
    expect(removeMarker).toHaveBeenCalledTimes(3)
  })

  it('calls onMarkersReady with empty object on unmount', () => {
    const callback = jest.fn()
    const wrapper = shallow(<Markers map={{ google: 'map' }} geojson={geojson} onMarkersReady={callback} />)
    wrapper.unmount()
    expect(callback).toHaveBeenCalledWith({})
  })

  describe('render', () => {
    it('adds markers on render if map exists', () => {
      shallow(<Markers map={{ google: 'map' }} geojson={geojson} />)
      expect(setupMarker).toHaveBeenCalledTimes(3)
    })

    it('does not add markers if map does not exist', () => {
      shallow(<Markers geojson={geojson} />)
      expect(setupMarker).not.toHaveBeenCalled()
    })

    it('calls onMarkersReady when markers are created', () => {
      const callback = jest.fn()
      shallow(<Markers map={{ google: 'map' }} geojson={geojson} onMarkersReady={callback} />)
      expect(callback).toHaveBeenCalledTimes(1)
    })
  })

  describe('marker', () => {
    const feature = geojson.features[0]

    it('returns the default marker config when no marker prop is passed', () => {
      const wrapper = shallow(<Markers geojson={geojson} />)
      const result = wrapper.instance().marker(feature)
      expect(result).toEqual(MARKER(feature))
    })

    it('combines the default marker and marker prop into a marker object', () => {
      const marker = { onClick: jest.fn() }
      const wrapper = shallow(
        <Markers
          geojson={geojson}
          marker={() => marker}
        />
      )
      const result = wrapper.instance().marker(feature)
      expect(result).toEqual({ ...MARKER(feature), ...marker })
    })
  })
})
