import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { themed } from 'react-themed-too'
import autobind from 'autobind-decorator'
import Button from './Button'

@themed(['CancelButton'], {
  pure: true,
})

export default class CancelButton extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    theme: PropTypes.object,
    value: PropTypes.any,
  }

  static defaultProps = {
    children: 'Cancel',
    theme: {},
  }

  @autobind
  handleClick() {
    const { onClick } = this.props

    if (onClick) onClick(this.props.value)
  }

  render() {
    const {
      theme,
      className,
      onClick,
      children,
      ...props
    } = this.props

    if (!onClick) return null

    return (
      <Button
        className={classnames(
          theme.CancelButton,
          className,
        )}
        onClick={this.handleClick}
        data-tid="cancel-button"
        {...props}
      >
        {children}
      </Button>
    )
  }
}
