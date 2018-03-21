import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import { parseArgs } from '@rentpath/react-ui-utils'
import ModalCloseButton from './ModalCloseButton'

@themed(/^ModalBody/, {
  pure: true,
})

export default class ModalBody extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    CloseButton: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
      PropTypes.object,
    ]),
    onClose: PropTypes.func,
    children: PropTypes.any,
  }

  static defaultProps = {
    theme: {},
  }

  renderCloseButton(CloseButton) {
    if (CloseButton) {
      const [Close, props] = parseArgs(CloseButton, ModalCloseButton)
      return (
        <Close {...props} onClick={this.props.onClose} />
      )
    }

    return null
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
        {...props}
      >
        {this.renderCloseButton(CloseButton)}
        <div className={theme.ModalBody_InnerBody}>
          {children}
        </div>
      </div>
    )
  }
}
