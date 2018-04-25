import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { action } from '@storybook/addon-actions'
import {
  Gmap,
  InfoWindow as GInfoWindow,
  Markers,
} from 'react-ui-core/src'
import geojson from '../dummyData/geojson.json'

export default class InfoWindow extends PureComponent {
  static propTypes = {
    apiKey: PropTypes.string,
  }

  state = {
    marker: null,
    name: null,
  }

  setMarker = (event, props, marker) => {
    this.setState({ marker, name: props.name })
  }

  clearMarker = () => {
    this.setState({ marker: null, name: null })
  }

  positionChanged = (event, props, infowindow) => {
    const position = infowindow.getPosition()

    action('position changed')(position.lat(), position.lng())
  }

  renderMarker = ({ properties }) => ({
    onClick: this.setMarker,
    name: properties.name,
  })

  render() {
    const { apiKey } = this.props
    const { marker, name } = this.state

    return (
      <Gmap
        apiKey={apiKey}
        onClick={this.clearMarker}
      >
        <Markers
          geojson={geojson}
          marker={this.renderMarker}
        />
        <GInfoWindow
          anchor={marker}
          onPositionChanged={this.positionChanged}
        >
          <div>Selected: {name}</div>
        </GInfoWindow>
      </Gmap>
    )
  }
}
