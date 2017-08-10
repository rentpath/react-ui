import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ActiveLayer extends Component {
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
    const { defaultMarkerId, activeMarkerId } = this.props

    map.on('click', defaultMarkerId, (e) => {
      map.setFilter(activeMarkerId, ['==', 'title', e.features[0].properties.title])
    })
  }

  render() {
    return null;
  }
}
