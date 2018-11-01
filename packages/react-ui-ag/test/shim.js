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
