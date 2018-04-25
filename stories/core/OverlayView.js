import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { action } from '@storybook/addon-actions'
import {
  Gmap,
  OverlayView as GOverlayView,
  Markers,
} from 'react-ui-core/src'
import geojson from '../dummyData/geojson.json'

export default class OverlayView extends PureComponent {
  static propTypes = {
    apiKey: PropTypes.string,
  }

  state = {
    marker: null,
    id: null,
    name: null,
  }

  setMarker = (event, props, marker) => {
    this.setState({ marker, id: props.id, name: props.name })
  }

  clearMarker = () => {
    this.setState({ marker: null, name: null })
  }

  renderMarker = ({ properties }) => ({
    onClick: this.setMarker,
    onMouseOver: this.setMarker,
    name: properties.name,
  })

  render() {
    const { apiKey } = this.props
    const { marker, id, name } = this.state

    return (
      <Gmap
        apiKey={apiKey}
        onClick={this.clearMarker}
      >
        <Markers
          geojson={geojson}
          marker={this.renderMarker}
        />
        <GOverlayView
          anchor={marker}
        >
          <div
            onClick={() => action(`click on child div: listing ${id}`)()}
            role="button"
            tabIndex="0"
          >
            Selected: {name}
          </div>
        </GOverlayView>
      </Gmap>
    )
  }
}
