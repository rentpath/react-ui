import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { Gmap as ThemedGmap } from '../Gmap'

const Gmap = ThemedGmap.WrappedComponent

const theme = {
  Gmap: 'mapClass',
}

describe('Gmap', () => {
  it('applies a custom className', () => {
    const wrapper = shallow(<Gmap className="customMap" />)
    expect(wrapper.prop('className')).toEqual('customMap')
  })

  it('applies a theme className', () => {
    const wrapper = shallow(<Gmap theme={theme} />)
    expect(wrapper.prop('className')).toEqual('mapClass')
  })

  it('applies extra props correctly', () => {
    const wrapper = shallow(<Gmap data-tag_section="map-tag" />)
    expect(wrapper.prop('data-tag_section')).toEqual('map-tag')
  })

  it('sets up only those events that have been passed as props', () => {
    const mapSpy = jest.spyOn(window.google.maps.event, 'addListener')
    shallow(
      <Gmap
        onClick={jest.fn()}
        onBoundsChanged={jest.fn()}
      />
    )

    expect(mapSpy).toHaveBeenCalledWith(expect.any(Object), 'bounds_changed', expect.any(Function))
    expect(mapSpy).toHaveBeenCalledWith(expect.any(Object), 'click', expect.any(Function))
    expect(mapSpy).not.toHaveBeenCalledWith(expect.any(Object), 'mouseout', expect.any(Function))
  })

  describe('minZoom', () => {
    it('uses the default when no prop passed', () => {
      const spy = jest.spyOn(window.google.maps, 'Map')
      shallow(<Gmap theme={theme} />)
      expect(spy).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          minZoom: 5,
        })
      )
    })

    it('uses the prop when passed', () => {
      const spy = jest.spyOn(window.google.maps, 'Map')
      shallow(<Gmap theme={theme} minZoom={10} />)
      expect(spy).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          minZoom: 10,
        })
      )
    })
  })

  describe('maxZoom', () => {
    it('does not use maxZoom when no prop passed', () => {
      const spy = jest.spyOn(window.google.maps, 'Map')
      shallow(<Gmap theme={theme} />)
      expect(spy).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          maxZoom: undefined,
        })
      )
    })

    it('uses the prop when passed', () => {
      const spy = jest.spyOn(window.google.maps, 'Map')
      shallow(<Gmap theme={theme} maxZoom={10} />)
      expect(spy).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          maxZoom: 10,
        })
      )
    })
  })

  it('updates the map zoom when zoom prop changes', () => {
    const wrapper = shallow(<Gmap zoom={10} />)
    const setZoom = jest.fn()
    const instance = wrapper.instance()
    instance.map = {
      ...instance.map,
      setZoom,
    }
    const testZoom = 5
    wrapper.setProps({ zoom: testZoom })
    expect(setZoom).toHaveBeenCalledWith(testZoom)
  })

  describe('center', () => {
    it('uses the default when no prop passed', () => {
      const spy = jest.spyOn(window.google.maps, 'Map')
      shallow(<Gmap theme={theme} />)
      expect(spy).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          center: { lat: 33.7490, lng: -84.3880 },
        })
      )
    })

    it('uses the prop when passed', () => {
      const spy = jest.spyOn(window.google.maps, 'Map')
      const center = { lat: 11.111, lng: -22.222 }
      shallow(<Gmap theme={theme} center={center} />)
      expect(spy).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({ center })
      )
    })

    it('updates the map center when center prop changes', () => {
      const wrapper = shallow(<Gmap center={{ lat: 33.7490, lng: -84.3880 }} />)
      const setCenter = jest.fn()
      const instance = wrapper.instance()
      instance.map = {
        ...instance.map,
        setCenter,
      }
      const testCenter = {
        lat: 34.0701,
        lng: -118.3497,
      }
      wrapper.setProps({ center: testCenter })
      expect(setCenter).toHaveBeenCalledWith(testCenter)
    })
  })

  describe('clones children correctly', () => {
    it('renders only children that are not null / undefined and passes map as a prop ', () => {
      const snap = renderer
        .create(
          <Gmap>
            <div />
            {null}
            <div />
          </Gmap>
        )
        .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('renders no children when none defined', () => {
      const snap = renderer.create(<Gmap />).toJSON()
      expect(snap).toMatchSnapshot()
    })
  })
})
