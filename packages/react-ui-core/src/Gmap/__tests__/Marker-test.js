import React from 'react'
import { shallow } from 'enzyme'
import Marker from '../Marker'

describe('Marker', () => {
  it('will remove the marker on unmount', () => {
    const setMap = jest.fn()
    const marker = {
      setMap,
    }
    const wrapper = shallow(
      <Marker
        onClick={jest.fn()}
        onDragEnd={jest.fn()}
      />
    )

    wrapper.instance().marker = marker
    wrapper.unmount()

    expect(marker.setMap).toHaveBeenCalledWith(null)
  })

  describe('setupMarker', () => {
    describe('adds a map marker when map is defined', () => {
      const wrapper = shallow(<Marker id="test" />)
      const markerSpy = jest.spyOn(window.google.maps, 'Marker')

      wrapper.instance().setupMarker({ google: 'map' })

      it('passes props and map to marker', () => {
        expect(markerSpy).toHaveBeenCalledWith({
          id: 'test',
          map: {
            google: 'map',
          },
        })
      })
    })

    it('does not add a map marker when map is undefined', () => {
      const wrapper = shallow(<Marker />)
      wrapper.instance().setupMarker()
      expect(wrapper.instance().marker).not.toBeDefined()
    })
  })

  it('sets up only those events that have been passed as props', () => {
    const addListener = jest.fn()
    const handleEvent = jest.spyOn(Marker.prototype, 'handleEvent')
    const marker = {
      addListener,
    }
    const wrapper = shallow(
      <Marker
        onClick={jest.fn()}
        onDragEnd={jest.fn()}
      />
    )

    wrapper.instance().marker = marker
    wrapper.instance().setupEvents()

    expect(marker.addListener).toHaveBeenCalledWith('dragend', expect.any(Function))
    expect(marker.addListener).toHaveBeenCalledWith('click', expect.any(Function))
    expect(marker.addListener).not.toHaveBeenCalledWith('mouseout', expect.any(Function))

    expect(handleEvent).toHaveBeenCalledWith('onDragEnd')
    expect(handleEvent).toHaveBeenCalledWith('onClick')
    expect(handleEvent).not.toHaveBeenCalledWith('onMouseOut')
  })

  it('handleEvent passes correct parameters when fired', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<Marker onClick={onClick} id="id" />)
    const mockedEvent = { target: {} }
    const clickEvent = wrapper.instance().handleEvent('onClick')
    clickEvent(mockedEvent)

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith(
      mockedEvent,
      {
        id: 'id',
        onClick,
      },
      undefined
    )
  })
})
