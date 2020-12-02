import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import themed from '@rentpath/react-themed'
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
        className={clsx(
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
