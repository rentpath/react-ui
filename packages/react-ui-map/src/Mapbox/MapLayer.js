import React, { Component, PropTypes } from 'react'
import merge from 'lodash.merge'

class MapLayer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { map } = this.context;
    const {
      id,
      type,
      sourceLayer,
      sourceId,
      layout = {},
      paint = {},
      layerOpacity,
      layerVisibility,
      before
    } = this.props

    const layerId = `${sourceId}-${id}`
    const opacity = `${type}-opacity`

    map.addLayer({
      id: layerId,
      source: sourceId,
      'source-layer': sourceLayer,
      type,
      layout,
      paint: merge(paint, {
        [opacity]: layerOpacity
      })
    }, before)

    if(!layerVisibility) map.setLayoutProperty(layerId, 'visibility', 'none')
  }

  componentWillReceiveProps(nextProps) {
    const { map } = this.context
    const { id, type, sourceId, layerOpacity, layerVisibility } = this.props
    const layerId = `${sourceId}-${id}`

    if (nextProps.layerOpacity && nextProps.layerOpacity !== layerOpacity) {
      map.setPaintProperty(layerId, `${type}-opacity`, nextProps.layerOpacity)
    }
    if (nextProps.layerVisibility !== layerVisibility) {
      const visibility = (nextProps.layerVisibility) ? 'visible' : 'none'
      map.setLayoutProperty(layerId, 'visibility', visibility)
    }

    return null;
  }

  componentWillUnmount() {
    const { map } = this.context
    const { id, sourceId } = this.props
    const layerId = `${sourceId}-${id}`
    map.removeLayer(layerId)
  }

  render() {
    return null
  }
}

MapLayer.contextTypes = {
  map : PropTypes.object.isRequired
}

MapLayer.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  sourceLayer: PropTypes.string.isRequired,
  sourceId: PropTypes.string.isRequired,
  paint: PropTypes.object.isRequired,
  layout: PropTypes.object.isRequired,
  before: PropTypes.string.isRequired,
  layerOpacity: PropTypes.number.isRequired,
  layerVisibility: PropTypes.bool.isRequired
}

export default MapLayer
