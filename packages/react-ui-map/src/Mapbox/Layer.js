import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Layer extends Component {
  constructor(props, context) {
    super(props, context)

    const { map } = this.context
    const { layers } = this.props

    layers.forEach(element => {
      map.addLayer(element.layer)
    })
  }

  static propTypes = {
    layers: PropTypes.array,
  }

  static contextTypes = {
    map: PropTypes.object,
  }

  componentWillUnmount() {
    const { map } = this.context
    const { layers } = this.props

    layers.forEach(element => {
      map.removeLayer(element.layer)
    })
  }

  render() {  // eslint-disable-line class-methods-use-this
    return null
  }
}
