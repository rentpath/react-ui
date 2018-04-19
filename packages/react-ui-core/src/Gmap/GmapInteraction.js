import once from 'lodash/once'
import get from 'lodash/fp/get'
import isArray from 'lodash/isArray'
import { setupMarker, removeMarker } from './utils/markerHelpers'

class GmapCallbackFactory {
  constructor() {
    let map = {}
    /* eslint-disable consistent-return */
    this.registerMap = once(newMap => {
      map = newMap
    })

    this.call = (f, args) => {
      const mapApiFunc = get(f)(map)

      if (mapApiFunc && typeof mapApiFunc === 'function') {
        if (isArray(args)) {
          return mapApiFunc(...args)
        }
        return mapApiFunc(args)
      }

      return undefined
    }

    this.MarkerInteraction = {
      setupMarker: props => setupMarker(map, props),
      removeMarker,
    }
  }
}

export const GmapInteraction = new GmapCallbackFactory()
