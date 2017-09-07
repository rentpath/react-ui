import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Source extends Component {
  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    data: PropTypes.object,
  }

  static contextTypes = {
    map: PropTypes.object,
  }

  constructor(props, context) {
    super(props, context)
    const { map } = this.context
    const { id, type, data } = this.props
    const source = map.getSource(id)

    if (!source && data) {
      map.addSource(id, {
        type,
        data,
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    const { map } = this.context
    const { data } = nextProps
    const source = map.getSource(nextProps.id)

    if (source && data) {
      source.setData(data)
    }
  }

  render() {
    return null
  }
}
