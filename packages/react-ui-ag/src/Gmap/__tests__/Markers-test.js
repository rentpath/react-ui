import React from 'react'
import { shallow } from 'enzyme'
import Markers from '../Markers'
import { redDotIcon, greyDotIcon, blackDotIcon, blackDotIconWithBalloon } from '../markerIcons'

const map = { google: 'map' }

const NOOP = () => {}

describe('ag/Markers', () => {
  it('applies extra props correctly', () => {
    const wrapper = shallow(<Markers map={map} data-tag_section="marker-tag" />)
    expect(wrapper.prop('data-tag_section')).toEqual('marker-tag')
  })

  describe('marker', () => {
    it('uses a redDotIcon and default marker props when none passed', () => {
      const wrapper = shallow(<Markers map={map} />)
      expect(wrapper.instance().marker()).toEqual({
        icon: redDotIcon(),
        onMouseOver: expect.any(Function),
        onMouseOut: expect.any(Function),
        zIndex: 2,
      })
    })

    it('uses a redDotIcon with zIndex of 2 for active properties', () => {
      const feature = {
        properties: {
          isActive: true,
        },
      }
      const wrapper = shallow(<Markers map={map} markerIconHover={NOOP} />)
      const instance = wrapper.instance()
      expect(instance.marker(feature).icon).toEqual(redDotIcon())
      expect(instance.marker(feature).zIndex).toEqual(2)
    })

    it('uses a greyDotIcon with zIndex of 1 for inactive properties', () => {
      const feature = {
        properties: {
          isActive: false,
        },
      }
      const wrapper = shallow(<Markers map={map} markerIconHover={NOOP} />)
      const instance = wrapper.instance()
      expect(instance.marker(feature).icon).toEqual(greyDotIcon())
      expect(instance.marker(feature).zIndex).toEqual(1)
    })

    it('uses whatever icon is passed into markerInactiveIcon for inactive properties', () => {
      const feature = {
        properties: {
          isActive: false,
        },
      }
      const wrapper = shallow(<Markers
        map={map}
        markerIconHover={NOOP}
        markerInactiveIcon={blackDotIcon}
      />)
      const instance = wrapper.instance()
      expect(instance.marker(feature).icon).toEqual(blackDotIcon())
      expect(instance.marker(feature).zIndex).toEqual(1)
    })

    it('applies extra props correctly when passed as a `marker` prop', () => {
      const markerProps = { icon: blackDotIconWithBalloon() }
      const wrapper = shallow(<Markers map={map} marker={() => (markerProps)} />)
      expect(wrapper.instance().marker()).toEqual({
        icon: blackDotIconWithBalloon(),
        onMouseOver: expect.any(Function),
        onMouseOut: expect.any(Function),
        zIndex: 2,
      })
    })

    it('changes icon `onMouseOver`', () => {
      const googleMarker = window.google.maps.Marker()
      const markerSpy = jest.spyOn(googleMarker, 'setIcon')
      const wrapper = shallow(<Markers map={map} />)
      const marker = wrapper.instance().marker()

      marker.onMouseOver('mouse_over', null, googleMarker)
      expect(markerSpy).toHaveBeenCalledWith(blackDotIcon())
    })

    it('changes icon `onMouseOut` back to the original', () => {
      const googleMarker = window.google.maps.Marker()
      const markerSpy = jest.spyOn(googleMarker, 'setIcon')
      const wrapper = shallow(<Markers map={map} />)
      const marker = wrapper.instance().marker()

      marker.onMouseOut('mouse_out', null, googleMarker)
      expect(markerSpy).toHaveBeenCalledWith(redDotIcon())
    })
  })
})
