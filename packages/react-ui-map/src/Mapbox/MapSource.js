import React, { Component, PropTypes } from 'react'

class MapSource extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { map } = this.context;
    const {
      id,
      url
    } = this.props
    map.addSource(id, { type: 'vector', url })
  }

  componentWillUnmount() {
    const { map } = this.context
    const { id } = this.props
    map.removeSource(id)
  }

  render() {
    return (
      <div>
        {this.props.children &&
          React.Children.map(this.props.children, child => (
            React.cloneElement(child, {
              sourceId: this.props.id,
              sourceLayer: this.props.layer
            })
          ))
        }
      </div>
    )
  }
}

MapSource.contextTypes = {
  map : PropTypes.object.isRequired
}

MapSource.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  layer: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default MapSource


