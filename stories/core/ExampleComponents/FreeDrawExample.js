import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import clsx from 'clsx'
import themed from '@rentpath/react-themed'
import { FreeDrawLayer, Button } from 'react-ui-core/src'

@themed(/^FreeDrawButton/, { pure: true })
export default class FreeDrawExample extends PureComponent {
  static propTypes = {
    shapes: PropTypes.object,
    onDrawBegin: PropTypes.func,
    dataStyle: PropTypes.object,
    theme: PropTypes.object,
    onDrawEnd: PropTypes.func,
    allowMultipleShapes: PropTypes.bool,
  }

  static defaultProps = {
    theme: {},
    shapes: {},
    allowMultipleShapes: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      shapes: this.props.shapes,
      enabled: this.props.allowMultipleShapes,
    }
  }

  @autobind
  handleOnDrawEnd(shape) {
    const { shapes } = this.state

    if (this.props.onDrawEnd) this.props.onDrawEnd(shape)
    const shapeId = Object.keys(shapes).length
    this.setState({
      shapes: shape && { ...shapes, [shapeId]: shape },
      enabled: this.props.allowMultipleShapes,
    })
  }

  @autobind
  handleClick() {
    const { shapes } = this.props
    const { enabled } = this.state

    this.setState({ shapes, enabled: !enabled })
  }

  render() {
    const {
      theme,
      onDrawEnd,
      shapes: _,
      ...rest
    } = this.props

    const { shapes, enabled } = this.state

    return (
      <Fragment>
        <Button
          onClick={this.handleClick}
          className={clsx(
            theme.FreeDrawButton,
            theme[`FreeDrawButton-${enabled}`],
          )}
        >
          {enabled ? 'Click to Disable' : 'Enable Free Draw'}
        </Button>
        <FreeDrawLayer
          onDrawEnd={this.handleOnDrawEnd}
          shapes={shapes}
          enabled={enabled}
          {...rest}
        />
      </Fragment>
    )
  }
}
