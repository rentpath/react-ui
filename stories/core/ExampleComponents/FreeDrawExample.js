import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FreeDrawLayer } from 'react-ui-core/src'

export default class FreeDrawExample extends PureComponent {
  static propTypes = {
    existingShapes: PropTypes.object,
    handleMapDrawStart: PropTypes.func,
    dataStyle: PropTypes.object,
  }

  static defaultProps = {
    existingShapes: {},
  }

  constructor(props) {
    super(props)
    this.state = { shapes: this.props.existingShapes }
    this.handleAddShape = this.handleAddShape.bind(this)
  }

  handleAddShape(shape) {
    this.setState({ shapes: { 0: shape } })
  }

  render() {
    const {
      handleMapDrawStart,
      dataStyle,
    } = this.props

    return (
      <FreeDrawLayer
        onMapDrawStart={handleMapDrawStart}
        onMapDrawEnd={this.handleAddShape}
        shapes={this.state.shapes}
        dataStyle={dataStyle}
        {...this.props}
      />
    )
  }
}
