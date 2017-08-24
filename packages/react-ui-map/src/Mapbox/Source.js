import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Source extends Component {
  constructor(props, context) {
    super(props, context)

    const { map } = this.context
    const { id, type, data } = this.props

    map.addSource(id, {
      "type": type,
      "data": data
    })
  }

  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    data: PropTypes.object,
  }

  static contextTypes = {
    map: PropTypes.object,
  }

  componentWillUnmount() {
    const { map } = this.context
    const { id, type, data } = this.props

    map.removeSource(id, {
      "type": type,
      "data": data
    })
  }

  render() {  // eslint-disable-line class-methods-use-this
    return null
  }
}
