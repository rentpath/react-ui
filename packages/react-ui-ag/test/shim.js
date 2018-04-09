// NOTE: this file is temporary due to the following:
// https://github.com/facebook/jest/issues/4545
const raf = cb => {
  setTimeout(cb, 0)
}

global.requestAnimationFrame = raf

global.google = {
  maps: {
    event: {
      addListener: () => {},
      clearInstanceListeners: () => {},
    },
    LatLng: (lat, lng) => ({
      latitude: parseFloat(lat),
      longitude: parseFloat(lng),
      lat: () => this.latitude,
      lng: () => this.longitude,
    }),
    LatLngBounds: (ne, sw) => ({
      getSouthWest: () => sw,
      getNorthEast: () => ne,
    }),
    OverlayView: () => ({}),
    InfoWindow: () => ({}),
    Marker: () => ({
      setIcon: () => ({}),
    }),
    MarkerImage: () => ({}),
    Map: () => ({
      addListener: () => { },
    }),
    Point: () => ({}),
    Size: () => ({}),
    SymbolPath: {
      CIRCLE: 'circle',
    },
  },
}
