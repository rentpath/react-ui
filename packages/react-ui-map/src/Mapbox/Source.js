import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Source extends Component {
  constructor(props, context) {
    super(props, context)

    const { map } = this.context
    const { sources } = this.props

    sources.forEach(element => {
      map.addSource(element.id, element.source)
    })
  }

  static propTypes = {
    sources: PropTypes.array,
  }

  static contextTypes = {
    map: PropTypes.object,
  }

  componentWillUnmount() {
    const { map } = this.context
    const { sources } = this.props

    sources.forEach(element => {
      map.removeSource(element.id, element.source)
    })
  }

  render() {  // eslint-disable-line class-methods-use-this
    return null
  }
}
