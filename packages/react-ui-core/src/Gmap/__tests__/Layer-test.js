import React from 'react'
import { shallow } from 'enzyme'
import Layer from '../Layer'

const features = ['f1', 'f2', 'f3']
const geojson = {}
const styles = {
  visible: false,
}

const mockMap = {
  data: {
    remove: jest.fn(),
    addGeoJson: jest.fn().mockReturnValue(features),
    overrideStyle: jest.fn(),
  },
}

describe('Layer', () => {
  beforeEach(() => {
    mockMap.data.remove.mockClear()
    mockMap.data.addGeoJson.mockClear()
    mockMap.data.overrideStyle.mockClear()
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

  describe('styles', () => {
    const argsForCall = callNumber => [
      mockMap.data.overrideStyle.mock.calls[callNumber][0],
      mockMap.data.overrideStyle.mock.calls[callNumber][1],
    ]
    it('applies styles to each feature', () => {
      shallow(<Layer map={mockMap} geojson={geojson} styles={styles} />)
      expect(mockMap.data.overrideStyle).toHaveBeenCalledTimes(features.length)
      expect(argsForCall(0)).toEqual([features[0], styles])
      expect(argsForCall(1)).toEqual([features[1], styles])
      expect(argsForCall(2)).toEqual([features[2], styles])
    })
  })
})
