import once from 'lodash/once'
import get from 'lodash/fp/get'
import isArray from 'lodash/isArray'
import bind from 'lodash/bind'
import includes from 'lodash/fp/includes'
import { setupMarker, removeMarker } from './utils/markerHelpers'

class GmapCallbackFactory {
  constructor() {
    let map = {}
    /* eslint-disable consistent-return */
    this.registerMap = once(newMap => {
      map = newMap
    })

    this.call = (f, args) => {
      // We need to bind non-nested functions, as google uses this.get internally
      if (get(f)(map)) {
        const mapApiFunc = includes('.')(f) ? get(f)(map) : bind(get(f)(map), map)

        if (mapApiFunc && typeof mapApiFunc === 'function') {
          if (isArray(args)) {
            return mapApiFunc(...args)
          }
          return mapApiFunc(args)
        }
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
