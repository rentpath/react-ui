import React from 'react'
import { shallow } from 'enzyme'
import ThemedFreeDrawLayer from '../FreeDrawLayer'
import '../../../test/google-maps-mock'

const FreeDrawLayer = ThemedFreeDrawLayer.WrappedComponent

const shape = [
  { lat: 33.90871, lng: -84.56927 },
  { lat: 33.91783, lng: -84.6297 },
  { lat: 33.92239, lng: -84.64618 },
]

const testMap = new window.google.maps.Map()
const mvcArray = new window.google.maps.MVCArray(shape)
const mockPolyline = new window.google.maps.Polyline({ map: testMap, path: mvcArray })
const mockPolygon = new window.google.maps.Polygon({ map: testMap, path: mockPolyline.getPath() })

FreeDrawLayer.prototype.polyline = mockPolyline
FreeDrawLayer.prototype.createPolyline = () => mockPolyline
FreeDrawLayer.prototype.polygon = mockPolygon
FreeDrawLayer.prototype.createPolygon = () => mockPolygon

const expectedPoints = [
  [-84.56927, 33.90871],
  [-84.6297, 33.91783],
  [-84.64618, 33.92239],
]

describe('FreeDrawLayer', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  const setup = rest => (
    shallow(<FreeDrawLayer
      map={testMap}
      mapControls={{
        draggable: true,
        zoomControl: true,
        scrollwheel: true,
        disableDoubleClickZoom: true,
      }}
      onMapDrawStart={jest.fn()}
      onMapDrawEnd={jest.fn()}
      shapes={{
        0: [
          [-84.56927, 33.90871], [-84.6297, 33.91783], [-84.64618, 33.92239],
        ],
      }}
      {...rest}
    />).instance()
  )

  it('clears previous shapes', () => {
    const instance = setup()
    const polygonSpy = jest.spyOn(FreeDrawLayer.prototype.polygon, 'setMap')

    instance.polygons = [instance.polygon, instance.polygon]
    instance.componentDidUpdate({})
    expect(polygonSpy).toHaveBeenCalledTimes(2)
    expect(polygonSpy).toHaveBeenLastCalledWith(null)
  })

  it('adds shapes when the shapes prop changes', () => {
    const instance = setup()
    const clearAllShapes = jest.spyOn(instance, 'clearAllShapes')
    const addShapesSpy = jest.spyOn(FreeDrawLayer.prototype, 'addShapes')

    instance.componentDidUpdate({})
    expect(clearAllShapes).toHaveBeenCalled()
    expect(addShapesSpy).toHaveBeenCalled()
  })

  describe('enableMapDraw', () => {
    it('disables map controls', () => {
      const instance = setup()
      const spy = jest.spyOn(instance, 'disableMapControls')
      instance.enableMapDraw()
      expect(spy).toHaveBeenCalled()
    })

    it('sets a mousedown event listener', () => {
      const instance = setup()
      const fakeListener = jest.spyOn(window.google.maps.event, 'addListenerOnce')
      instance.enableMapDraw()
      expect(fakeListener).toHaveBeenCalledWith(instance.props.map, 'mousedown', expect.any(Function))
    })

    it('calls the drawFreeHand function when the mousedown event is triggered', () => {
      const instance = setup()
      const spy = jest.spyOn(instance, 'drawFreeHand')
      instance.enableMapDraw()
      instance.events.onMouseDown()
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('drawFreeHand', () => {
    it('enables map controls again when user is finished drawing', () => {
      const enableMapControls = jest.fn()
      const polygonSpy = jest.spyOn(FreeDrawLayer.prototype.polygon, 'setMap')
      const polylineSpy = jest.spyOn(FreeDrawLayer.prototype.polyline, 'setMap')

      const instance = setup()
      instance.enableMapControls = enableMapControls
      instance.drawFreeHand()
      instance.events.onMouseUp()
      expect(polylineSpy).toHaveBeenCalledWith(null)
      expect(polygonSpy).toHaveBeenCalledWith(null)
      expect(enableMapControls).toHaveBeenCalled()
    })

    it('prefers props over default map control values when enabling Map controls', () => {
      const setOptions = jest.fn()
      const instance = setup({
        map: { setOptions },
        mapControls: { disableDoubleClickZoom: false },
      })
      const expected = {
        draggable: true,
        zoomControl: true,
        scrollwheel: true,
        disableDoubleClickZoom: false,
      }
      instance.enableMapControls()
      expect(setOptions).toHaveBeenCalledWith(expected)
    })

    it('calls the onMapDrawStart function if provided ', () => {
      const instance = setup()
      const spy = jest.spyOn(instance.props, 'onMapDrawStart')
      instance.drawFreeHand()
      expect(spy).toHaveBeenCalled()
    })

    it('calls the onMapDrawEnd function when the onMouseMove event is cleared if provided', () => {
      const instance = setup()
      const spy = jest.spyOn(instance.props, 'onMapDrawEnd')
      spy.mockClear()
      instance.drawFreeHand()
      instance.events.onMouseUp()
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('clearAllShapes', () => {
    it('calls setMap with null on each polygon', () => {
      const instance = setup()
      const polylineSpy = jest.spyOn(FreeDrawLayer.prototype.polygon, 'setMap')

      instance.polygons = [mockPolygon, mockPolygon]
      instance.clearAllShapes()
      expect(polylineSpy).toHaveBeenCalledTimes(2)
      expect(polylineSpy).toHaveBeenLastCalledWith(null)
      expect(instance.polygons).toEqual([])
    })
  })

  describe('getPolygonCoords', () => {
    it('converts multiple polygon points to format [\'y,x\',\'y,x\'] => [[x,y],[x,y]]', () => {
      const instance = setup()
      const formattedPolygonPoints = instance.getPolygonCoords(mockPolygon)
      expect(formattedPolygonPoints).toEqual(expectedPoints)
    })
  })

  describe('formatLongLatToGmapsCoordinates', () => {
    it('converts multiple polygon points to format {poly:[[x,y],[x,y]]} => [[{lat: y, lng: x}, {lat: y, lng: x}]]', () => {
      const instance = setup()
      const points = { 0: [[-84.56927, 33.90871], [-84.6297, 33.91783], [-84.64618, 33.92239]] }
      const expectedFormattedShapes = [
        [
          { lat: 33.90871, lng: -84.56927 },
          { lat: 33.91783, lng: -84.6297 },
          { lat: 33.92239, lng: -84.64618 },
        ],
      ]
      const formattedShapes = instance.formatLongLatToGmapsCoordinates(points)
      expect(formattedShapes).toEqual(expectedFormattedShapes)
    })
  })
})
