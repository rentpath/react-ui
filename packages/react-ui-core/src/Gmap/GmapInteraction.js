import once from 'lodash/once'

class GmapCallbackFactory {
  constructor() {
    let map = {}
    /* eslint-disable consistent-return */
    this.registerMap = once(newMap => {
      map = newMap
    })

    this.call = (f, args) => {
      if (map[f] && typeof map[f] === 'function') {
        return map[f](...args)
      }

      return undefined
    }
  }
}

export const GmapInteraction = new GmapCallbackFactory()
