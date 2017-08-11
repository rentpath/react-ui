import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Source extends Component {
  constructor(props, context) {
    super(props, context)

    const { map } = this.context
    const { sources } = this.props

    for (let value of sources) {
      map.addSource(value.id, value.source)
    }
  }

  static propTypes = {
    sources: PropTypes.array,
  }

  static contextTypes = {
    map: PropTypes.object
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
