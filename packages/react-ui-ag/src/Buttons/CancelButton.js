import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
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
  }

  static defaultProps = {
    theme: {},
    name: 'Cancel',
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
        onClick={onClick}
        data-tid="cancel-button"
        {...props}
      >
        {name}
      </Button>
    )
  }
}
