import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import autobind from 'autobind-decorator'

@themed(/^Overlay/, {
  pure: true,
})
export default class Overlay extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onClick: PropTypes.func,
    theme: PropTypes.object,
    children: PropTypes.node,
  }

  static defaultProps = {
    styles: {},
    theme: {},
  }

  @autobind
  handleMouseDown(e) {
    // Verify that the click started on the overlay
    this.clickedOutside = (e.target === this.overlay)

    if (this.props.onMouseDown) {
      this.props.onMouseDown(e)
    }
  }

  @autobind
  handleMouseUp(e) {
    // Verify that the click ended on the overlay
    if (e.target !== this.overlay) {
      this.clickedOutside = false
    }

    if (this.props.onMouseUp) {
      this.props.onMouseUp(e)
    }
  }

  @autobind
  handleClick(e) {
    // If the click did not start and end on the overlay do not register click
    if (!this.clickedOutside) {
      return
    }
    this.clickedOutside = null

    if (this.props.onClick && e.target === this.overlay) {
      this.props.onClick(e)
    }
  }

  render() {
    const { className, theme, children } = this.props

    return (
      <div
        ref={node => { this.overlay = node }}
        role="presentation"
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
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
