import {
  DesktopBedroomDropdown,
  DesktopBathroomDropdown,
  DesktopPetDropdown,
  DesktopPriceFilterDropdown,
} from './Filters'

import {
  DefaultBanner,
  BannerWithNode,
} from './Banners'

import { ExampleGridViewHeader } from './GridView'

import {
  smallStories,
  largeStories,
} from './stories'

import {
  DefaultGmap,
  PdpMap,
  PdpMapCustomMarker,
  MultipleMarkers,
  SelectedMarker,
} from './Gmap'

largeStories('Filters / RadioGroupDropdown / large', module)
  .add('Beds', () => DesktopBedroomDropdown)
  .add('Baths', () => DesktopBathroomDropdown)
  .add('Pets', () => DesktopPetDropdown)

largeStories('Filters / PriceFilterDropdown / large', module)
  .add('Price Filter', () => DesktopPriceFilterDropdown)

smallStories('Banner', module)
  .add('Default Banner', () => DefaultBanner)
  .add('Banner With Node as Name', () => BannerWithNode)

largeStories('GridView', module)
  .add('GridViewHeader', () => ExampleGridViewHeader)

largeStories('Gmap', module)
  .add('Map', DefaultGmap)
  .add('PDP Map', PdpMap)
  .add('PDP Map with Custom Marker', PdpMapCustomMarker)
  .add('Map with multiple markers', MultipleMarkers)
  .add('Map with selected marker', SelectedMarker)
