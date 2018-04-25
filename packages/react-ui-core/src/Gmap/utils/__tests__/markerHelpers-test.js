import { setupMarker, removeMarker } from '../markerHelpers'
import { setupEvents } from '../mapEventHelpers'

jest.mock('../mapEventHelpers', () => ({
  setupEvents: jest.fn(),
}))

describe('markerHelpers', () => {
  beforeEach(() => {
    setupEvents.mockClear()
  })

  describe('setupMarker', () => {
    it('does not create a marker if no map', () => {
      const markerSpy = jest.spyOn(window.google.maps, 'Marker')

      const result = setupMarker(null, {})
      expect(markerSpy).not.toHaveBeenCalled()
      expect(result).toEqual(null)
    })

    it('creates a marker when map', () => {
      const markerSpy = jest.spyOn(window.google.maps, 'Marker')
      const result = setupMarker({}, {})

      expect(markerSpy).toHaveBeenCalled()
      expect(typeof result.getPosition).toBe('function')
      expect(setupEvents).toHaveBeenCalled()
    })
  })

  describe('removeMarker', () => {
    it('removes the marker if it exists', () => {
      const setMap = jest.fn()
      const eventSpy = jest.spyOn(window.google.maps.event, 'clearInstanceListeners')
      const marker = { id: 'markerId', setMap }
      removeMarker(marker)

      expect(eventSpy).toHaveBeenCalledWith(marker)
      expect(marker.setMap).toHaveBeenCalledWith(null)
    })

    it('does not remove the marker if none passed', () => {
      const setMap = jest.fn()
      const eventSpy = jest.spyOn(window.google.maps.event, 'clearInstanceListeners')
      const marker = { id: 'markerId', setMap }
      removeMarker()

      expect(eventSpy).not.toHaveBeenCalledWith(marker)
      expect(marker.setMap).not.toHaveBeenCalledWith(null)
    })
  })
})
