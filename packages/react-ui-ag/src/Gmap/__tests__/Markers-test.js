import React from 'react'
import { shallow } from 'enzyme'
import Markers from '../Markers'
import MarkerIcons from '../markerIcons'

const map = { google: 'map' }

describe('ag/Markers', () => {
  it('applies extra props correctly', () => {
    const wrapper = shallow(<Markers map={map} data-tag_section="marker-tag" />)
    expect(wrapper.prop('data-tag_section')).toEqual('marker-tag')
  })

  describe('marker', () => {
    it('uses a redDotIcon and default marker props when none passed', () => {
      const wrapper = shallow(<Markers map={map} />)
      expect(wrapper.instance().marker()).toEqual({
        icon: MarkerIcons.redDotIcon(),
        onMouseOver: expect.any(Function),
        onMouseOut: expect.any(Function),
        zIndex: 1,
      })
    })

    it('uses a redDotIcon with zIndex of 2 for aptguide properties', () => {
      const feature = {
        properties: {
          source: 'aptguide',
        },
      }
      const wrapper = shallow(<Markers map={map} />)
      const instance = wrapper.instance()
      expect(instance.marker(feature).icon).toEqual(MarkerIcons.redDotIcon())
      expect(instance.marker(feature).zIndex).toEqual(2)
    })

    it('uses a redDotIconIcon with zIndex of 1 for non-aptguide properties', () => {
      const feature = {
        properties: {
          source: 'foo',
        },
      }
      const wrapper = shallow(<Markers map={map} />)
      const instance = wrapper.instance()
      expect(instance.marker(feature).icon).toEqual(MarkerIcons.redDotIcon())
      expect(instance.marker(feature).zIndex).toEqual(1)
    })

    it('uses a greyDotIcon with zIndex of 1 for isBasic properties', () => {
      const feature = {
        properties: {
          isBasic: true,
        },
      }
      const wrapper = shallow(<Markers map={map} />)
      const instance = wrapper.instance()
      expect(instance.marker(feature).icon).toEqual(MarkerIcons.greyDotIcon())
      expect(instance.marker(feature).zIndex).toEqual(1)
    })

    it('uses whatever icon is passed into markerInactiveIcon for isBasic properties', () => {
      const feature = {
        properties: {
          isBasic: true,
        },
      }
      const wrapper = shallow(<Markers
        map={map}
        markerInactiveIcon="blackDotIcon"
      />)
      const instance = wrapper.instance()
      expect(instance.marker(feature).icon).toEqual(MarkerIcons.blackDotIcon())
      expect(instance.marker(feature).zIndex).toEqual(1)
    })

    it('uses the iconScale for icon function', () => {
      const scale = 0.5
      const feature = {
        properties: {
          iconScale: scale,
        },
      }

      MarkerIcons.redDotIcon = jest.fn()
      const wrapper = shallow(<Markers map={map} markerIcon="redDotIcon" />)

      wrapper.instance().marker(feature)

      expect(MarkerIcons.redDotIcon).toHaveBeenCalledTimes(1)
      expect(MarkerIcons.redDotIcon).toHaveBeenCalledWith(scale)
    })

    it('uses the iconScale for isBasic properties', () => {
      const scale = 0.75
      const feature = {
        properties: {
          isBasic: true,
          iconScale: scale,
        },
      }

      MarkerIcons.greyDotIcon = jest.fn()
      const wrapper = shallow(<Markers map={map} markerInactiveIcon="greyDotIcon" />)

      wrapper.instance().marker(feature)

      expect(MarkerIcons.greyDotIcon).toHaveBeenCalledTimes(1)
      expect(MarkerIcons.greyDotIcon).toHaveBeenCalledWith(scale)
    })

    it('uses the iconScale for hover', () => {
      const scale = 1.25
      const feature = {
        properties: {
          iconScale: scale,
        },
      }

      MarkerIcons.blackDotIcon = jest.fn()
      const wrapper = shallow(<Markers map={map} markerIconHover="blackDotIcon" />)
      const marker = wrapper.instance().marker(feature)

      marker.onMouseOver('mouse_over', null, window.google.maps.Marker())

      expect(MarkerIcons.blackDotIcon).toHaveBeenCalledTimes(1)
      expect(MarkerIcons.blackDotIcon).toHaveBeenCalledWith(scale)
    })

    it('applies extra props correctly when passed as a `marker` prop', () => {
      const markerProps = { icon: MarkerIcons.blackDotIconWithBalloon() }
      const wrapper = shallow(<Markers map={map} marker={() => (markerProps)} />)
      expect(wrapper.instance().marker()).toEqual({
        icon: MarkerIcons.blackDotIconWithBalloon(),
        onMouseOver: expect.any(Function),
        onMouseOut: expect.any(Function),
        zIndex: 1,
      })
    })

    it('changes icon `onMouseOver`', () => {
      const googleMarker = window.google.maps.Marker()
      const markerSpy = jest.spyOn(googleMarker, 'setIcon')
      const wrapper = shallow(<Markers map={map} />)
      const marker = wrapper.instance().marker()

      marker.onMouseOver('mouse_over', null, googleMarker)
      expect(markerSpy).toHaveBeenCalledWith(MarkerIcons.blackDotIcon())
    })

    it('changes icon `onMouseOut` back to the original', () => {
      const googleMarker = window.google.maps.Marker()
      const markerSpy = jest.spyOn(googleMarker, 'setIcon')
      const wrapper = shallow(<Markers map={map} />)
      const marker = wrapper.instance().marker()

      marker.onMouseOut('mouse_out', null, googleMarker)
      expect(markerSpy).toHaveBeenCalledWith(MarkerIcons.redDotIcon())
    })
  })
})
