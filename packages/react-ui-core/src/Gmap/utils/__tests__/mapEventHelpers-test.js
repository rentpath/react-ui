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
  it('sets up events that exist and adds appropriate listeners to the map', () => {
    const eventSpy = jest.spyOn(window.google.maps.event, 'addListener')
    setupEvents({}, EVENTS, {
      onClick: jest.fn(),
      onMouseDown: jest.fn(),
    })

    expect(eventSpy).toHaveBeenCalledWith({}, 'click', expect.any(Function))
    expect(eventSpy).toHaveBeenCalledWith({}, 'mousedown', expect.any(Function))
    expect(eventSpy).not.toHaveBeenCalledWith({}, 'mouseout', expect.any(Function))
  })

  it('does not add events if no prop events are passed', () => {
    jest.resetAllMocks()
    const eventSpy = jest.spyOn(window.google.maps.event, 'addListener')
    setupEvents({}, EVENTS, { })
    expect(eventSpy).not.toHaveBeenCalled()
  })
})
