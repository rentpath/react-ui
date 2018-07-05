import { setupEvents } from '../mapEventHelpers'

const EVENTS = {
  onClick: 'click',
  onDoubleClick: 'dblclick',
  onDragEnd: 'dragend',
  onMouseDown: 'mousedown',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRecenter: 'recenter',
}

describe('mapEventHelpers', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  it('sets up events that exist and adds appropriate listeners to the map', () => {
    const addListenerEventSpy = jest.spyOn(window.google.maps.event, 'addListener')
    const addListenerOnceEventSpy = jest.spyOn(window.google.maps.event, 'addListenerOnce')
    setupEvents({}, EVENTS, {
      onClick: jest.fn(),
      onMouseDown: jest.fn(),
    })

    expect(addListenerEventSpy).toHaveBeenCalledWith({}, 'click', expect.any(Function))
    expect(addListenerEventSpy).toHaveBeenCalledWith({}, 'mousedown', expect.any(Function))
    expect(addListenerEventSpy).not.toHaveBeenCalledWith({}, 'mouseout', expect.any(Function))
    expect(addListenerOnceEventSpy).not.toHaveBeenCalledWith({}, 'mousedown', expect.any(Function))
  })

  it('sets up events with addListenerOnce if the once argument is set to true', () => {
    const addListenerOnceEventSpy = jest.spyOn(window.google.maps.event, 'addListenerOnce')
    const addListenerEventSpy = jest.spyOn(window.google.maps.event, 'addListener')
    setupEvents({}, EVENTS, {
      onClick: jest.fn(),
      onMouseDown: jest.fn(),
    }, true)

    expect(addListenerOnceEventSpy).toHaveBeenCalledWith({}, 'click', expect.any(Function))
    expect(addListenerOnceEventSpy).toHaveBeenCalledWith({}, 'mousedown', expect.any(Function))
    expect(addListenerOnceEventSpy).not.toHaveBeenCalledWith({}, 'mouseout', expect.any(Function))
    expect(addListenerEventSpy).not.toHaveBeenCalledWith({}, 'mousedown', expect.any(Function))
  })

  it('setupEvents returns an object containing keys as event names and values as the functions', () => {
    const actual = setupEvents({}, EVENTS, {
      onClick: () => { },
      onMouseDown: () => { },
    }, false)

    const expected = {
      onClick: expect.any(Function),
      onMouseDown: expect.any(Function),
    }

    expect(actual).toEqual(expected)
  })

  it('does not add events if no prop events are passed', () => {
    jest.resetAllMocks()
    const eventSpy = jest.spyOn(window.google.maps.event, 'addListener')
    setupEvents({}, EVENTS, {})
    expect(eventSpy).not.toHaveBeenCalled()
  })
})
