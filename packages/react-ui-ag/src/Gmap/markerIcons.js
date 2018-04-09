export const markerIcon = props => ({
  path: window.google.maps.SymbolPath.CIRCLE,
  fillColor: '#d42022',
  fillOpacity: 1,
  scale: 8,
  strokeColor: '#ffffff',
  strokeWeight: 2,
  anchor: new window.google.maps.Point(0, 0),
  ...props,
})

export const markerIconHover = () => markerIcon({ fillColor: '#000000' })
