import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Overlay from './Overlay'
import ModalBody from './ModalBody'

export default class Modal extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    onClose: PropTypes.func,
    closeOnOverlayClick: PropTypes.bool,
  }

  static defaultProps = {
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
    const { theme, ...props } = this.props

    return (
      <Overlay onClick={this.overlayClose} styles={theme.Overlay}>
        <ModalBody theme={theme} {...props} />
      </Overlay>
    )
  }
}
