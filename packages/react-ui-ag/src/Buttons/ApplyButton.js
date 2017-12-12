import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import { Button } from '@rentpath/react-ui-core'

@themed(['ApplyButton'], {
  pure: true,
})

export default class ApplyButton extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    theme: PropTypes.object,
    name: PropTypes.node,
  }

  static defaultProps = {
    theme: {},
    name: 'Apply',
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
          theme.ApplyButton,
          className,
        )}
        onClick={onClick}
        data-tid="apply-button"
        {...props}
      >
        {name}
      </Button>
    )
  }
}
