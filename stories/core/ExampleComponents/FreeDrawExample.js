import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import classnames from 'classnames'
import themed from 'react-themed'
import { FreeDrawLayer, Button } from 'react-ui-core/src'

@themed(/^FreeDrawButton/, { pure: true })
export default class FreeDrawExample extends PureComponent {
  static propTypes = {
    shapes: PropTypes.object,
    onDrawBegin: PropTypes.func,
    dataStyle: PropTypes.object,
    theme: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
    shapes: {},
  }

  constructor(props) {
    super(props)
    this.state = {
      shapes: this.props.shapes,
      enabled: false,
    }
  }

  @autobind
  handleOnDrawEnd(shape) {
    this.setState({
      shapes: shape && { 0: shape },
      enabled: false,
    })
  }

  @autobind
  handleClick() {
    this.setState({ enabled: !this.state.enabled })
  }

  render() {
    const {
      theme,
      shapes: _,
      ...rest
    } = this.props

    const { shapes, enabled } = this.state

    return (
      <Fragment>
        <Button
          onClick={this.handleClick}
          className={classnames(
            theme.FreeDrawButton,
            theme[`FreeDrawButton-${enabled}`],
          )}
        >
          {enabled ? 'Drawing...' : 'Enable Free Draw'}
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
