import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import ModalBody from './ModalBody'
import Overlay from './Overlay'

@themed('*', {
  pure: true,
})

export default class Modal extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool,
    theme: PropTypes.object,
    onClose: PropTypes.func,
    closeOnOverlayClick: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any,
  }

  static defaultProps = {
    isOpen: false,
    theme: {},
    onClose: () => { },
    closeOnOverlayClick: true,
  }

  static childContextTypes = {
    theme: PropTypes.object,
  }

  getChildContext() {
    return { theme: this.props.theme }
  }

  get overlayClose() {
    const { onClose, closeOnOverlayClick } = this.props
    return closeOnOverlayClick ? onClose : undefined
  }

  render() {
    const {
      isOpen,
      theme,
      className,
      children,
      closeOnOverlayClick,
      ...props
    } = this.props

    return (
      <Overlay
        onClick={this.overlayClose}
        className={classnames(
          className,
          theme[`Modal-${isOpen ? 'open' : 'close'}`],
          theme.Modal,
        )}
      >
        <ModalBody {...props}>
          {children}
        </ModalBody>
      </Overlay>
    )
  }
}
