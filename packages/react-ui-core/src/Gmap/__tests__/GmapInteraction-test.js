import { GmapInteraction } from '../GmapInteraction'

describe('GmapInteraction', () => {
  const onZoom = jest.fn()

  it('registers the map', () => {
    const map = { onZoom }
    const registerSpy = jest.spyOn(GmapInteraction, 'registerMap')
    GmapInteraction.registerMap(map)

    expect(registerSpy).toHaveBeenCalledTimes(1)
    expect(registerSpy).toHaveBeenCalledWith(map)
  })

  it('cannot register map more than once', () => {
    const onPan = jest.fn()
    const map = { onPan }

    GmapInteraction.registerMap(map)
    GmapInteraction.call('onPan')
    expect(map.onPan).not.toHaveBeenCalled()
  })

  it('invokes call', () => {
    const args = { foo: 'bar' }
    GmapInteraction.call('onZoom', args)
    expect(onZoom).toHaveBeenCalledWith(...args)
  })
})
