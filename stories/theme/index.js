import { compose } from 'react-themed'
import CoreTheme from './core'
import Rent from './rent'
import Ag from './ag'
import Mapbox from './map'
import mapboxCss from './mapbox-gl.global.css' // eslint-disable-line no-unused-vars

const RentTheme = compose({},
  CoreTheme,
  Mapbox,
  Rent,
)

const AgTheme = compose({},
  CoreTheme,
  Mapbox,
  Ag,
)

const MapTheme = compose({},
  CoreTheme,
  Mapbox,
)

export {
  CoreTheme,
  MapTheme,
  RentTheme,
  AgTheme,
}
