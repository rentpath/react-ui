import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'

@themed(/^Overlay/, {
  pure: true,
})

export default class Overlay extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    theme: PropTypes.object,
    children: PropTypes.node,
  }

  static defaultProps = {
    styles: {},
    theme: {},
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
    const { className, theme, children } = this.props

    return (
      <div
        ref={node => { this.overlay = node }}
        role="presentation"
        onClick={this.handleClick}
        className={classnames(
          className,
          theme.Overlay,
        )}
      >
        {children}
      </div>
    )
  }
}
