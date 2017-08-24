import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Layer extends Component {
  constructor(props, context) {
    super(props, context)

    const { map } = this.context
    const { layer } = this.props

    map.addLayer(layer)
  }

  static propTypes = {
    layer: PropTypes.object,
  }

  static contextTypes = {
    map: PropTypes.object,
  }

  componentWillUnmount() {
    const { map } = this.context
    const { layer } = this.props

    map.removeLayer(layer)
  }

  render() {  // eslint-disable-line class-methods-use-this
    return null
  }
}
