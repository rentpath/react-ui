import * as React from 'react'
import * as classNames from 'classnames'

interface Props {

  /**
   * The styles to apply.
   */
  styles?: React.CSSProperties,

  /**
   * The input classname.
   */
  className?: string,

  /**
   * Callback on modal close.
   */
  onClick?: Function,

  /**
   * Additional props.
   */
  [propName: string]: any
}

export default class Overlay extends React.PureComponent<Props, {}> {

  static defaultProps = {
    styles: {},
  }

  overlay: React.ReactNode

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    if (this.props.onClick && e.target === this.overlay) {
      this.props.onClick()
    }
  }

  render() {
    const { className, styles, children } = this.props

    return (
      <div
        ref={node => { this.overlay = node }}
        onClick={this.handleClick}
        className={classNames(
          className,
          styles.overlay,
        )}
        children={children}
      />
    )
  }
}
