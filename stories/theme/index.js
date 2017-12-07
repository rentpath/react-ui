import { compose } from 'react-themed'
import CoreTheme from './core'
import Rent from './rent'
import mapboxCss from './mapbox-gl.global.css' // eslint-disable-line no-unused-vars

const RentTheme = compose({},
  CoreTheme,
  Rent,
)

const AgTheme = compose({},
  CoreTheme,
)

export {
  CoreTheme,
  RentTheme,
  AgTheme,
}
