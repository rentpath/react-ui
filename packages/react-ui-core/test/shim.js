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
    OverlayView: () => ({
      setMap: () => {},
      getPanes: () => ({
        floatPane: {},
        mapPane: {},
        markerLayer: {},
        overlayLayer: {},
        overlayMouseTarget: {},
      }),
      getProjection: () => ({
        fromLatLngToDivPixel: () => ({ x: 10, y: 50 }),
      }),
    }),
    InfoWindow: () => ({
      open: () => {},
      close: () => {},
      setContent: () => {},
      addListener: () => {},
    }),
    Marker: () => ({
      getPosition: () => ({}),
    }),
    MarkerImage: () => ({}),
    Map: () => ({
      addListener: () => { },
      data: {
        setStyle: () => {},
        loadGeoJson: () => {},
        addGeoJson: () => {},
      },
    }),
    Point: () => ({}),
    Size: () => ({}),
    SymbolPath: {
      CIRCLE: 'circle',
    },
  },
}
