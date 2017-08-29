import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Source extends Component {
  constructor(props, context) {
    super(props, context)

    const { map } = this.context
    const { id, type, data } = this.props
    const source = map.getSource(id)

    if (!source) {
      map.addSource(id, {
        type,
        data,
      })
    }
  }

  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    data: PropTypes.object,
  }

  static contextTypes = {
    map: PropTypes.object,
  }

  render() {  // eslint-disable-line class-methods-use-this
    return null
  }
}
