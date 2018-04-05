import React from 'react'
import { shallow } from 'enzyme'
import Markers from '../Markers'
import { markerIcon, markerIconHover } from '../markerIcons'

const map = { google: 'map' }

describe('ag/Markers', () => {
  it('applies extra props correctly', () => {
    const wrapper = shallow(<Markers map={map} data-tag_section="marker-tag" />)
    expect(wrapper.prop('data-tag_section')).toEqual('marker-tag')
  })

  describe('marker', () => {
    it('uses default marker props when none passed', () => {
      const wrapper = shallow(<Markers map={map} />)
      expect(wrapper.instance().marker()).toEqual({
        icon: markerIcon(),
        onMouseOver: expect.any(Function),
        onMouseOut: expect.any(Function),
      })
    })

    it('applies extra props correctly when passed as a `marker` prop', () => {
      const wrapper = shallow(<Markers map={map} marker={() => ({ title: 'testId' })} />)
      expect(wrapper.instance().marker()).toEqual({
        icon: markerIcon(),
        onMouseOver: expect.any(Function),
        onMouseOut: expect.any(Function),
        title: 'testId',
      })
    })

    it('changes icon `onMouseOver`', () => {
      const googleMarker = window.google.maps.Marker()
      const markerSpy = jest.spyOn(googleMarker, 'setIcon')
      const wrapper = shallow(<Markers map={map} />)
      const marker = wrapper.instance().marker()

      marker.onMouseOver('mouse_over', null, googleMarker)
      expect(markerSpy).toHaveBeenCalledWith(markerIconHover())
    })

    it('changes icon `onMouseOut` back to the original', () => {
      const googleMarker = window.google.maps.Marker()
      const markerSpy = jest.spyOn(googleMarker, 'setIcon')
      const wrapper = shallow(<Markers map={map} />)
      const marker = wrapper.instance().marker()

      marker.onMouseOut('mouse_out', null, googleMarker)
      expect(markerSpy).toHaveBeenCalledWith(markerIcon())
    })
  })
})
