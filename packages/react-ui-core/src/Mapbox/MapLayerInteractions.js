import { Component } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'

export default class MapLayerInteractions extends Component {
  static propTypes = {
    defaultMarkerId: PropTypes.string,
    activeMarkerId: PropTypes.string,
  }

  static contextTypes = {
    map: PropTypes.object,
  }

  componentDidMount() {
    const { map } = this.context
    const { defaultMarkerId } = this.props

    map.on('click', defaultMarkerId, this.moveToAndFilterMarker)
  }

  @autobind
  moveToAndFilterMarker(event) {
    const { map } = this.context
    const { activeMarkerId } = this.props

    map.flyTo({
      center: [
        event.lngLat.lng,
        event.lngLat.lat,
      ],
    })

    map.setFilter(activeMarkerId, ['==', 'title', event.features[0].properties.title])
  }

  render() {
    return null
  }
}
