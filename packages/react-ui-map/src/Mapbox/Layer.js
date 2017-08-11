import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Layer extends Component {
  constructor(props, context) {
    super(props, context)

    const { map } = this.context
    const { layers } = this.props

    for(let value of layers) {
        map.addLayer(value.layer)
    }
  }

  static propTypes = {
    layers: PropTypes.array
  }

  static contextTypes = {
    map: PropTypes.object
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
