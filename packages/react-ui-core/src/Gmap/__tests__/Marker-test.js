import React from 'react'
import { shallow } from 'enzyme'
import Marker from '../Marker'

describe('Marker', () => {
  it('will remove the marker on unmount', () => {
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

    expect(marker.setMap).toHaveBeenCalledWith(null)
  })

  describe('setupMarker', () => {
    describe('adds a map marker when map is defined', () => {
      const wrapper = shallow(<Marker id="test" map={{ google: 'map' }} />)
      const markerSpy = jest.spyOn(window.google.maps, 'Marker')

      wrapper.instance().setupMarker()

      it('passes props and map to marker', () => {
        expect(markerSpy).toHaveBeenCalledWith({
          id: 'test',
          map: {
            google: 'map',
          },
        })
      })
    })

    it('does not add a map marker when map is undefined', () => {
      const wrapper = shallow(<Marker />)
      wrapper.instance().setupMarker()
      expect(wrapper.instance().marker).not.toBeTruthy()
    })
  })

  it('sets up only those events that have been passed as props', () => {
    const map = { google: 'map' }
    const markerSpy = jest.spyOn(window.google.maps.event, 'addListener')

    shallow(
      <Marker
        map={map}
        onClick={jest.fn()}
        onDragEnd={jest.fn()}
      />
    )

    expect(markerSpy).toHaveBeenCalledWith(expect.any(Object), 'dragend', expect.any(Function))
    expect(markerSpy).toHaveBeenCalledWith(expect.any(Object), 'click', expect.any(Function))
    expect(markerSpy).not.toHaveBeenCalledWith(map, 'mouseout', expect.any(Function))
  })
})
