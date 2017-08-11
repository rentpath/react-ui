import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LayerInteractions extends Component {
  constructor(props, context) {
    super(props, context)

    this.moveToAndFilterMarker = this.moveToAndFilterMarker.bind(this)
  }

  static propTypes = {
    defaultMarkerId: PropTypes.string,
    activeMarkerId: PropTypes.string,
    children: PropTypes.node
  }

  static contextTypes = {
    map: PropTypes.object
  }

  componentDidMount() {
    const { map } = this.context
    const { defaultMarkerId } = this.props

    map.on('click', defaultMarkerId, this.moveToAndFilterMarker)
  }

  moveToAndFilterMarker(event) {
    const { map } = this.context
    const { activeMarkerId } = this.props

    map.flyTo({
      center: [
        event.lngLat.lng,
        event.lngLat.lat
      ]
    })

    map.setFilter(activeMarkerId, ['==', 'title', event.features[0].properties.title])
  }

  render() {
    return null;
  }
}
