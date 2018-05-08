import React from 'react'
import { shallow } from 'enzyme'
import Layer from '../Layer'

const features = ['f1', 'f2', 'f3']
const geojson = {}

const mockMap = {
  data: {
    remove: jest.fn(),
    addGeoJson: jest.fn().mockReturnValue(features),
  },
}

describe('Layer', () => {
  beforeEach(() => {
    mockMap.data.remove.mockClear()
    mockMap.data.addGeoJson.mockClear()
  })

  describe('lifecycle', () => {
    it('adds Layer on render if map exists', () => {
      shallow(<Layer map={mockMap} geojson={geojson} />)
      expect(mockMap.data.addGeoJson).toHaveBeenCalledTimes(1)
    })

    it('does not add Layer if map does not exist', () => {
      shallow(<Layer geojson={geojson} />)
      expect(mockMap.data.addGeoJson).not.toHaveBeenCalled()
    })

    it('removes all Layer features on unmount', () => {
      shallow(<Layer map={mockMap} geojson={geojson} />).unmount()
      expect(mockMap.data.remove).toHaveBeenCalledTimes(features.length)
    })
  })

  describe('events', () => {
    it('sets up only those events that have been passed as props', () => {
      const dataSpy = jest.spyOn(window.google.maps.event, 'addListener')
      shallow(
        <Layer
          map={mockMap}
          geojson={geojson}
          onClick={jest.fn()}
          onMouseDown={jest.fn()}
        />
      )
      expect(dataSpy).toHaveBeenCalledWith(expect.any(Object), 'click', expect.any(Function))
      expect(dataSpy).toHaveBeenCalledWith(expect.any(Object), 'mousedown', expect.any(Function))
      expect(dataSpy).not.toHaveBeenCalledWith(expect.any(Object), 'setgeometry', expect.any(Function))
    })
  })
})
