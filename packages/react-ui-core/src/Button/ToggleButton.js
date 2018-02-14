import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import autobind from 'autobind-decorator'
import Button from './Button'

@themed(/^ToggleButton/)

export default class ToggleButton extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    children: PropTypes.node,
    value: PropTypes.bool,
    onClick: PropTypes.func,
    inactive: PropTypes.bool,
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

  componentWillReceiveProps(nextProps) {
    if (!(this.props.value === nextProps.value)) {
      this.setState({
        value: nextProps.value,
      })
    }
  }

  @autobind
  toggle(event) {
    const { onClick, inactive } = this.props

    const value = inactive ? this.state.value : !this.state.value

    if (!inactive) {
      this.setState({
        value,
      })
    }

    if (onClick) onClick(value, event)
  }

  render() {
    const {
      className,
      theme,
      children,
      onClick,
      value,
      inactive,
      ...props
    } = this.props

    return (
      <Button
        onClick={this.toggle}
        className={classnames(
          theme.ToggleButton,
          className,
          theme[this.state.value ? 'ToggleButton-on' : 'ToggleButton-off'],
        )}
        data-tid="toggle-button"
        {...props}
      >
        {children}
      </Button>
    )
  }
}
