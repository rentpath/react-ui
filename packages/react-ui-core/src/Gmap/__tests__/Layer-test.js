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
})
