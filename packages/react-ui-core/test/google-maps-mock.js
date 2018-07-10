class MVCArray {
  constructor(arr) {
    this.arr = arr
  }
}

MVCArray.prototype.getAt = function(i) { return this.arr[i] }
MVCArray.prototype.getArray = function() {
  return this.arr.map(coords => ({
    lat: () => coords.lat,
    lng: () => coords.lng,
  }))
}

class Polygon {
  constructor(options) {
    this.options = options
  }
}

Polygon.prototype.setMap = function() { }
Polygon.prototype.getPath = function() {
  const path = (this.options.paths && this.options.paths[0]) || this.options.path
  return new MVCArray(path || [])
}

class Polyline {
  constructor(options) {
    this.options = options
  }
}

Polyline.prototype.setMap = function() { }
Polyline.prototype.getPath = function() { return this.path }

global.google = {}
global.google.maps = {
  event: {
    addListener: (instance, eventName, handler) => handler,
    clearInstanceListeners: () => { },
    addListenerOnce: (instance, eventName, handler) => handler,
    removeListener: () => { },
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
    setMap: () => { },
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
    open: () => { },
    close: () => { },
    setContent: () => { },
    addListener: () => { },
  }),
  Marker: () => ({
    setMap: () => { },
    getPosition: () => ({}),
  }),
  MarkerImage: () => ({}),
  Map: () => ({
    addListener: () => { },
    data: {
      setStyle: () => { },
      loadGeoJson: () => { },
      addGeoJson: () => { },
    },
    setOptions: () => { },
  }),
  MVCArray,
  Point: () => ({}),
  Polygon,
  Polyline,
  setOptions: () => { },
  Size: () => ({}),
  SymbolPath: {
    CIRCLE: 'circle',
  },
}
