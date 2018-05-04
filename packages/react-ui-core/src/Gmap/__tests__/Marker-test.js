import React from 'react'
import { shallow } from 'enzyme'
import Marker from '../Marker'
import { setupMarker, removeMarker } from '../utils/markerHelpers'

jest.mock('../utils/markerHelpers', () => ({
  setupMarker: jest.fn(marker => marker),
  removeMarker: jest.fn(),
}))

describe('Marker', () => {
  beforeEach(() => {
    setupMarker.mockClear()
    removeMarker.mockClear()
  })

  it('removes marker on component unmount', () => {
    const setMap = jest.fn()
    const marker = {
      setMap,
    }
    const wrapper = shallow(
      <Marker
        map={{ google: 'map' }}
        onClick={jest.fn()}
        onDragEnd={jest.fn()}
      />
    )

    wrapper.instance().marker = marker
    wrapper.unmount()

    expect(removeMarker).toHaveBeenCalledTimes(1)
  })

  it('removes marker and creates a new one on component update', () => {
    const position = { lat: 2, lng: 1 }
    const map = { google: 'map' }

    const wrapper = shallow(
      <Marker
        map={map}
        position={{ lat: 3, lng: 2 }}
      />
    )

    wrapper.setProps({ position })

    expect(removeMarker).toHaveBeenCalledTimes(1)
    expect(setupMarker).toHaveBeenCalledWith(map, { position })
    expect(setupMarker).toHaveBeenCalledTimes(2)
  })

  it('creates a marker with correct props on component mount', () => {
    shallow(<Marker id="test" map={{ google: 'map' }} />)
    expect(setupMarker).toHaveBeenCalledWith(
      { google: 'map' },
      { id: 'test' }
    )
  })
})
