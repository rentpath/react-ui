import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MapSource extends Component {
  static propTypes = {
    sources: PropTypes.array,
    children: PropTypes.node
  }

  static contextTypes = {
    map: PropTypes.object
  }

  componentWillMount() {
    const { map } = this.context
    const { sources } = this.props

    for (let value of sources) {
        map.addSource(value.id, value.source)
      }
  }

  componentWillUnmount() {
    const { map } = this.context
    const { sources } = this.props

    for (let value of sources) {
        map.removeSource(value.id, value.source)
    }
  }

  render() {
    return null
  }
}
