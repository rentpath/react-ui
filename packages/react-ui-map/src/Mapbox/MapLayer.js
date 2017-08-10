import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MapLayer extends Component {
  static propTypes = {
    layers: PropTypes.array
  }

  static contextTypes = {
    map: PropTypes.object
  }

  componentWillMount() {
    const { map } = this.context
    const { layers } = this.props

    for(let value of layers) {
        map.addLayer(value.layer)
    }
  }

  componentWillUnmount() {
    const { map } = this.context
    const { layers } = this.props

    for(let value of layers) {
        map.removeLayer(value.layer)
    }
  }

  render() {
    return null
  }
}
