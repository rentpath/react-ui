import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { parseArgs } from '@rentpath/react-ui-utils'
import themed from 'react-themed'
import classnames from 'classnames'
import autobind from 'autobind-decorator'
import Overlay from './Overlay'
import ModalCloseButton from './ModalCloseButton'

const dataAttrs = props => Object.keys(props).reduce((acc, key) => {
  if (/data-tag/.test(key)) acc[key] = props[key]
  return acc
}, {})

@themed(/^Modal/, { pure: true })
export default class Modal extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool,
    theme: PropTypes.object,
    onClose: PropTypes.func,
    closeOnOverlayClick: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any,
    hasOverlay: PropTypes.bool,
    CloseButton: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    isOpen: false,
    theme: {},
    hasOverlay: true,
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

  get closeButton() {
    const { CloseButton } = this.props

    if (CloseButton) {
      const [Close, props] = parseArgs(CloseButton, ModalCloseButton)
      return (
        <Close
          data-tid="close-modal"
          {...props}
          onClick={this.overlayClose}
        />
      )
    }

    return null
  }

  get wrapper() {
    const { hasOverlay } = this.props
    const { isOpen } = this.state

    if (hasOverlay) {
      return {
        Component: Overlay,
        props: {
          onClick: this.overlayClose,
          isOpen,
          ...dataAttrs(this.props),
        },
      }
    }

    return { Component: Fragment, props: {} }
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
      onClose,
      CloseButton,
      hasOverlay,
      closeOnOverlayClick,
      ...props
    } = this.props

    const Wrapper = this.wrapper

    return (
      <Wrapper.Component {...Wrapper.props}>
        <div
          data-tid="modal"
          {...props}
          className={classnames(
            className,
            theme[`Modal-${isOpen ? 'open' : 'close'}`],
            theme.Modal
          )}
        >
          {this.closeButton}
          {children}
        </div>
      </Wrapper.Component>
    )
  }
}
