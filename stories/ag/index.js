import {
  DesktopBedroomDropdown,
  DesktopBathroomDropdown,
  DesktopPetDropdown,
  DesktopPriceFilterDropdown,
} from './Filters'

import {
  ExampleMobileMapListing,
  ExampleSingleFamily,
  ExampleDesktopMapPinListing,
  ExampleDesktopListing,
  ExampleSingleFamilyDesktopListing,
} from './Listings'

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
  MultipleMarkers,
  SelectedMarker,
} from './Gmap'

smallStories('Listings', module)
  .add('Mobile Map Listing', ExampleMobileMapListing)
  .add('Single Family Mobile Map Listing', ExampleSingleFamily)

largeStories('Listings', module)
  .add('DesktopMapPinListing', () => ExampleDesktopMapPinListing)
  .add('Desktop Listing', ExampleDesktopListing)
  .add('Single Family Desktop Listing', ExampleSingleFamilyDesktopListing)

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
  .add('Map with multiple markers', MultipleMarkers)
  .add('Map with selected marker', SelectedMarker)
