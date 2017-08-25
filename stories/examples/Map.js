import React, { Component } from 'react'
import { Mapbox, LayerInteractions, Source, Layer } from 'react-ui-map/src'
import { MapTheme } from '../theme'

const mapSourceData = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-84.424, 33.979],
    },
    properties: {
      title: 'Point 1',
      'marker-symbol': 'secondary_marker',
    },
  }, {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-84.534, 33.676],
    },
    properties: {
      title: 'Point 2',
      'marker-color': '#ff00ff',
      'marker-symbol': 'secondary_marker',
    },
  }, {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-84.234, 33.776],
    },
    properties: {
      title: 'Point 3',
      'marker-color': '#ff00ff',
      'marker-symbol': 'secondary_marker',
    },
  }],
}

const markersDefaultData = {
  id: 'markers-default',
  source: 'markers',
  type: 'symbol',
  layout: {
    'icon-image': '{marker-symbol}',
    'text-field': '{title}',
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top',
  },
}

const markersActiveData = {
  id: 'markers-active',
  source: 'markers',
  type: 'symbol',
  layout: {
    'icon-image': 'default_marker',
    'text-field': '{title}',
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top',
  },
  filter: ['==', 'title', ''],
}

const token = 'pk.eyJ1Ijoic21pY2tpZSIsImEiOiJjaWtiM2JkdW0wMDJudnRseTY0NWdrbjFnIn0.WxGYL18BJjWUiNIu-r3MSA'
const center = [-84.359, 33.679]
const style = 'mapbox://styles/smickie/cikb3fhvi0063cekqns0pk1f1'
const zoom = 9

const defaultMarkerId = 'markers-default'
const activeMarkerId = 'markers-active'

class MapPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      boundingBox: [],
    }

    this.fitBounds = this.fitBounds.bind(this)
  }

  fitBounds() {
    this.setState({ boundingBox: [[32.958984, -5.353521], [43.50585, 5.615985]] })
  }

  render() {
    return (
      <div>
        <Mapbox
          token={token}
          center={center}
          style={style}
          zoom={zoom}
          theme={MapTheme}
          boundingBox={this.state.boundingBox}
        >
          <LayerInteractions
            defaultMarkerId={defaultMarkerId}
            activeMarkerId={activeMarkerId}
          />
          <Source id="markers" type="geojson" data={mapSourceData} />
          <Layer layer={markersDefaultData} />
          <Layer layer={markersActiveData} />
        </Mapbox>
        <button
          className={MapTheme.Button}
          onClick={this.fitBounds}
        >
          Fly
        </button>
      </div>
    )
  }
}

const MapExample = (<MapPage />)
export { MapExample }
