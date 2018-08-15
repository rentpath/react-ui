import React from 'react'
import { shallow } from 'enzyme'
import FreeDrawLayer from '../FreeDrawLayer'

const shape = [
  { lat: 33.90871, lng: -84.56927 },
  { lat: 33.91783, lng: -84.6297 },
  { lat: 33.92239, lng: -84.64618 },
]

const testMap = new window.google.maps.Map()
const mockPolygon = new window.google.maps.Polygon({ path: shape })

const expectedPoints = [
  [-84.56927, 33.90871],
  [-84.6297, 33.91783],
  [-84.64618, 33.92239],
]

const props = {
  map: testMap,
  mapControls: {
    draggable: true,
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
  },
  onDrawBegin: jest.fn(),
  onDrawEnd: jest.fn(),
  shapes: {
    0: [
      [-84.56927, 33.90871], [-84.6297, 33.91783], [-84.64618, 33.92239],
    ],
  },
}

describe('FreeDrawLayer', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  const setup = rest => (
    shallow(<FreeDrawLayer {...props} {...rest} />).instance()
  )

  it('clears previous shapes', () => {
    const instance = setup()
    const polygonSpy = jest.spyOn(window.google.maps.Polygon.prototype, 'setMap')

    instance.polygons = [mockPolygon, mockPolygon]
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

  describe('drawFreeHand', () => {
    it('calls endDraw on mouse up', () => {
      const instance = setup()
      const endDrawSpy = jest.spyOn(instance, 'endDraw')
      instance.polygon = mockPolygon
      instance.drawFreeHand()
      instance.handleMouseUp()
      expect(endDrawSpy).toHaveBeenCalled()
    })

    it('calls drawFreeHand on mouse up', () => {
      const instance = setup()
      const drawFreeHandSpy = jest.spyOn(instance, 'drawFreeHand')
      instance.polygon = mockPolygon
      instance.drawFreeHand()
      instance.handleMouseUp()
      expect(drawFreeHandSpy).toHaveBeenCalled()
    })
  })

  describe('enableDraw', () => {
    it('disables map controls', () => {
      const instance = setup()
      const spy = jest.spyOn(instance, 'disableMapControls')
      instance.enableDraw()
      expect(spy).toHaveBeenCalled()
    })

    it('sets a mousedown event listener', () => {
      const instance = setup()
      const fakeListener = jest.spyOn(window.google.maps.event, 'addListener')
      instance.enableDraw()
      expect(fakeListener).toHaveBeenCalledWith(instance.props.map, 'mousedown', expect.any(Function))
    })

    it('calls the drawFreeHand function when the mousedown event is triggered', () => {
      const instance = setup()
      const spy = jest.spyOn(instance, 'drawFreeHand')
      instance.enableDraw()
      instance.events.onMouseDown()
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('finishDraw', () => {
    it('enables map controls and removes poly shapes on enabled prop changed to false', () => {
      const polygonSpy = jest.spyOn(window.google.maps.Polygon.prototype, 'setMap')
      const polylineSpy = jest.spyOn(window.google.maps.Polyline.prototype, 'setMap')

      const wrapper = shallow(<FreeDrawLayer {...props} enabled />)
      const instance = wrapper.instance()
      const enableMapControls = jest.spyOn(instance, 'enableMapControls')
      wrapper.setProps({ enabled: false })
      expect(polylineSpy).toHaveBeenCalledWith(null)
      expect(polygonSpy).toHaveBeenCalledWith(null)
      expect(enableMapControls).toHaveBeenCalled()
    })

    it('restores default map controls correctly', () => {
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

    it('calls the onDrawEnd if provided', () => {
      const instance = setup({
        enabled: true,
      })
      const spy = jest.spyOn(instance.props, 'onDrawEnd')
      spy.mockClear()
      instance.drawFreeHand()
      instance.finishDraw()
      expect(spy).toHaveBeenCalled()
    })

    it('does not executes logic if this.enabled is false', () => {
      const enableMapControls = jest.fn()
      const instance = setup()
      instance.enableMapControls = enableMapControls
      instance.finishDraw()
      expect(enableMapControls).not.toHaveBeenCalled()
    })
  })

  describe('drawFreeHand', () => {
    it('calls the onDrawBegin function if provided ', () => {
      const instance = setup()
      const spy = jest.spyOn(instance.props, 'onDrawBegin')
      instance.drawFreeHand()
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('clearAllShapes', () => {
    it('calls setMap with null on each polygon', () => {
      const instance = setup()
      const polylineSpy = jest.spyOn(window.google.maps.Polygon.prototype, 'setMap')

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
