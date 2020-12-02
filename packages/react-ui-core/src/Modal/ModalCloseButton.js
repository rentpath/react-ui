import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from '@rentpath/react-themed'
import clsx from 'clsx'

@themed(/^CloseButton/, {
  pure: true,
})
export default class CloseButton extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.any,
  }

  static defaultProps = {
    theme: {},
    children: 'X',
  }

  render() {
    const {
      className,
      theme,
      children,
      ...props
    } = this.props

    return (
      <div
        className={clsx(
          className,
          theme.CloseButton
        )}
        data-tid="close-modal"
        {...props}
      >
        {children}
      </div>
    )
  }
}
