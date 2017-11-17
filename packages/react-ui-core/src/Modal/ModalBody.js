import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'

@themed('*', {
  pure: true,
})

export default class ModalBody extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    CloseButton: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.any,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      className,
      theme,
      CloseButton,
      onClose,
      children,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          theme.ModalBody,
          className
        )}
      >
        {CloseButton && <CloseButton onClick={onClose} />}
        <div
          className={theme.ModalBody_InnerBody}
          {...props}
        >
          {children}
        </div>
      </div>
    )
  }
}
