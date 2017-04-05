import React, { PureComponent, PropTypes } from 'react'
import classNames from 'classnames'

export default class Overlay extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    styles: PropTypes.object,
  }

  static defaultProps = {
    styles: {},
  }

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
