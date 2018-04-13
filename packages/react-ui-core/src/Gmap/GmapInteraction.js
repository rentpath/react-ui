import once from 'lodash/once'
import get from 'lodash/fp/get'
import curry from 'lodash/fp/curry'
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
        return mapApiFunc(...args)
      }

      return undefined
    }

    this.MarkerInteraction = {
      setupMarker: curry(setupMarker)(map),
      removeMarker,
    }
  }
}

export const GmapInteraction = new GmapCallbackFactory()
