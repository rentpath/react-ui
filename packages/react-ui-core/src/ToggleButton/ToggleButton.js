import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import autobind from 'autobind-decorator'
import { Button } from '../Button'
import { parseArgs } from '@rentpath/react-ui-utils'

@themed(/^ToggleButton/)

export default class ToggleButton extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    children: PropTypes.node,
    value: PropTypes.bool,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    value: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      value: props.value,
    }
  }

  @autobind
  toggle() {
    const { onClick } = this.props
    const value = !this.state.value
    this.setState({
      value,
    })
    if (onClick) onClick(value)
  }

  render() {
    const {
      className,
      theme,
      children,
      onClick,
      value,
      ...props
    } = this.props

    return (
      <button
        onClick={this.toggle}
        className={classnames(
          theme.ToggleButton,
          className,
          theme[this.state.value ? 'ToggleButton-On' : 'ToggleButton-Off'],
        )}
        data-tid="toggleButton"
        {...props}
      >
        {children}
      </button>
    )
  }
}
