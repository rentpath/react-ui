import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import autobind from 'autobind-decorator'
import { Button } from '@rentpath/react-ui-core'

@themed(['CancelButton'], {
  pure: true,
})

export default class CancelButton extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    theme: PropTypes.object,
    name: PropTypes.node,
    value: PropTypes.any,
  }

  static defaultProps = {
    theme: {},
    name: 'Cancel',
  }

  @autobind
  handleClick() {
    const { onClick } = this.props

    if (onClick) onClick(this.props.value)
  }

  render() {
    const {
      theme,
      name,
      className,
      onClick,
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
        {name}
      </Button>
    )
  }
}
