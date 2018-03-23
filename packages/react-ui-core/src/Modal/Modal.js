import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import autobind from 'autobind-decorator'
import ModalBody from './ModalBody'
import Overlay from './Overlay'

@themed(/^Modal/, {
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

  constructor(props) {
    super(props)
    this.state = { isOpen: props.isOpen }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      this.setState({ isOpen: nextProps.isOpen })
    }
  }

  get overlayClose() {
    const { closeOnOverlayClick } = this.props
    return closeOnOverlayClick ? this.handleClose : undefined
  }

  @autobind
  handleClose() {
    this.setState({ isOpen: false })
    if (this.props.onClose) this.props.onClose()
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
          theme[`Modal-${this.state.isOpen ? 'open' : 'close'}`],
          theme.Modal,
        )}
      >
        <ModalBody {...props} onClose={this.handleClose}>
          {children}
        </ModalBody>
      </Overlay>
    )
  }
}
