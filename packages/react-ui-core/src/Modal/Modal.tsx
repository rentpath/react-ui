import * as React from 'react'
import Overlay from './Overlay'
import ModalBody from './ModalBody'

interface Props {

  /**
   * The theme to apply.
   */
  theme?: React.CSSProperties,

  /**
   * The input classname.
   */
  className?: string,

  /**
   * onClose handler.
   */
  onClose?: Function,

  /**
   * The tag type.
   */
  closeOnOverlayClick?: boolean,

  /**
   * Additional props.
   */
  [propName: string]: any
}

export default class Modal extends React.PureComponent<Props, {}> {
  static defaultProps = {
    theme: {},
    closeOnOverlayClick: true,
  }

  static childContextTypes = {
    theme: React.PropTypes.object,
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
