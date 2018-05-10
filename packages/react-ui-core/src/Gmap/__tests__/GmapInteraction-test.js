import { GmapInteraction } from '../GmapInteraction'

const onZoom = jest.fn()
const setZoom = jest.fn()
const onPan = jest.fn()
const addGeoJson = jest.fn()

function Map() {
  return {
    onZoom,
    setZoom,
    data: {
      addGeoJson,
    },
  }
}

function MapAlt() {
  return {
    onZoom,
    setZoom,
    onPan,
    data: {
      addGeoJson,
    },
  }
}

describe('GmapInteraction', () => {
  it('registers the map', () => {
    const map = new Map()
    const registerSpy = jest.spyOn(GmapInteraction, 'registerMap')
    GmapInteraction.registerMap(map)

    expect(registerSpy).toHaveBeenCalledTimes(1)
    expect(registerSpy).toHaveBeenCalledWith(map)
  })

  it('cannot register map more than once', () => {
    const newMap = new MapAlt()

    GmapInteraction.registerMap(newMap)
    GmapInteraction.call('onPan')
    expect(newMap.onPan).not.toHaveBeenCalled()
  })

  it('invokes call', () => {
    const args = { foo: 'bar' }
    GmapInteraction.call('onZoom', args)
    expect(onZoom).toHaveBeenCalledWith(args)
  })

  it('invokes a deep call', () => {
    const args = [{ foo: 'bar' }, 'baz']
    GmapInteraction.call('data.addGeoJson', args)
    expect(addGeoJson).toHaveBeenCalledWith(...args)
  })

  it('invokes a call with a single argument', () => {
    const args = 2
    GmapInteraction.call('setZoom', args)
    expect(setZoom).toHaveBeenCalledWith(2)
  })

  it('invokes a call with multiple arguments', () => {
    const args = [{ foo: 'bar' }, 'baz', 'boom', ['1', '2']]
    GmapInteraction.call('data.addGeoJson', args)
    expect(addGeoJson).toHaveBeenCalledWith({ foo: 'bar' }, 'baz', 'boom', [
      '1',
      '2',
    ])
  })
})

describe('MarkerInteraction', () => {
  it('adds a marker to the map', () => {
    const markerSpy = jest.spyOn(window.google.maps, 'Marker')
    const result = GmapInteraction.MarkerInteraction.setupMarker({})

    expect(markerSpy).toHaveBeenCalled()
    expect(typeof result.getPosition).toEqual('function')
  })
  it('removes a marker', () => {
    const setMap = jest.fn()
    const eventSpy = jest.spyOn(
      window.google.maps.event,
      'clearInstanceListeners'
    )
    const marker = { id: 'markerId', setMap }
    GmapInteraction.MarkerInteraction.removeMarker(marker)

    expect(eventSpy).toHaveBeenCalledWith(marker)
    expect(marker.setMap).toHaveBeenCalledWith(null)
  })
})
