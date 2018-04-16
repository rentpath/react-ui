import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Markers as Gmarkers } from '@rentpath/react-ui-core'
import {
  markerIcon as defaultMarkerIcon,
  markerIconHover as defaultMarkerIconHover,
} from './markerIcons'

export default class GeojsonMarkers extends Component {
  static propTypes = {
    map: PropTypes.object,
    url: PropTypes.string,
    geojson: PropTypes.object,
    markerIcon: PropTypes.func,
    markerIconHover: PropTypes.func,
  }

  static defaultProps = {
    markerIcon: defaultMarkerIcon,
    markerIconHover: defaultMarkerIconHover,
  }

  componentDidMount() {
    this.renderMarkers(this.props.geojson)
  }

  componentDidUpdate() {
    this.renderMarkers(this.props.geojson)
  }

  renderMarkers(data) {
    const {
      map,
      markerIcon,
      markerIconHover,
    } = this.props

    if (!data) {
      this.fetchMarkers()
      return
    }

    map.data.addGeoJson(data)
    map.data.setStyle(feature => ({ icon: markerIcon() }))

    map.data.addListener('mouseover', event => {
      map.data.revertStyle(event.feature)
      map.data.overrideStyle(event.feature, { icon: markerIconHover() })
    })

    map.data.addListener('mouseout', event => {
      map.data.revertStyle(event.feature)
    })
  }

  fetchMarkers() {
    this.removeMarkers()
    fetch(this.props.url).then(res => res.json()).then(data => this.renderMarkers(data))
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.url !== this.props.url
  }

  removeMarkers() {
    const { map } = this.props
    map.data.forEach(feature => {
      map.data.remove(feature)
    })
  }

  render() {
    return null
  }
}
