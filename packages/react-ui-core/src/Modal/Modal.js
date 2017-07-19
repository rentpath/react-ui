import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Overlay from './Overlay'
import ModalBody from './ModalBody'

export default class Modal extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool,
    theme: PropTypes.object,
    onClose: PropTypes.func,
    closeOnOverlayClick: PropTypes.bool,
  }

  static defaultProps = {
    isOpen: true,
    theme: {},
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
      ...props
    } = this.props

    const classes = isOpen ? theme.Modal_open : theme.Modal_closed

    return (
      <Overlay
        onClick={this.overlayClose}
        styles={theme.Overlay}
        className={classes}
      >
        <ModalBody theme={theme} {...props} />
      </Overlay>
    )
  }
}
