import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from '@rentpath/react-themed'
import autobind from 'autobind-decorator'
import Button from './Button'

@themed(['ApplyButton'], {
  pure: true,
})
export default class ApplyButton extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    theme: PropTypes.object,
    value: PropTypes.any,
  }

  static defaultProps = {
    children: 'Apply',
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
      value,
      ...props
    } = this.props

    if (!onClick) return null

    return (
      <Button
        className={classnames(
          theme.ApplyButton,
          className,
        )}
        onClick={this.handleClick}
        data-tid="apply-button"
        {...props}
      >
        {children}
      </Button>
    )
  }
}
