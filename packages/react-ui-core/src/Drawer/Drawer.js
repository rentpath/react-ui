import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import themed from 'react-themed'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import autobind from 'autobind-decorator'
import { ToggleButton } from '../Button'

@themed(/^Drawer/, {
  pure: true,
})

export default class Drawer extends Component {

  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    onClick: PropTypes.func,
    height: PropTypes.number,
    children: PropTypes.node,
    openButtonContents: PropTypes.node,
    closeButtonContents: PropTypes.node,
    movementDamping: PropTypes.number,
    movementStiffness: PropTypes.number,
    visible: PropTypes.bool,
  }

  static defaultProps = {
    theme: {},
    height: 220,
    movementDamping: null,
    movementStiffness: null,
    visible: true,
  }

  constructor(props) {
    super(props)
    this.state = { visible: props.visible }
  }

  componentWillReceiveProps(nextProps) {
    if (!(this.props.visible === nextProps.visible)) {
      this.setState({
        visible: nextProps.visible,
      })
    }
  }

  @autobind
  handleToggle(value) {
    this.setState({ visible: value })
    if (this.props.onClick) this.props.onClick(value)
  }

  render() {
    const {
      theme,
      height,
      className,
      children,
      movementDamping,
      movementStiffness,
      closeButtonContents,
      openButtonContents,
    } = this.props

    const {
      visible,
    } = this.state

    return (
      <div
        className={classnames(theme.Drawer, className)}
        data-tid="drawer"
      >
        <Motion style={{
          x: spring(this.state.visible ? 0 : height,
            movementStiffness,
            movementDamping),
        }}
        >
          {({ x }) =>
            (
              <div>
                <ToggleButton
                  className={classnames(
                    theme[this.state.visible ? 'Drawer-Button-on' : 'Drawer-Button-off'],
                  )}
                  theme={theme}
                  onClick={this.handleToggle}
                  value={visible}
                >
                  {(visible) ? closeButtonContents : openButtonContents}
                </ToggleButton>
                { (x < height - 0.1) && <div
                  className={classnames(theme.Drawer_Content)}
                  data-tid="drawer-content"
                  style={{
                    height: `${height - x}px`,
                  }}
                >
                  {children}
                </div>}
              </div>
            )
          }
        </Motion>
      </div>
    )
  }
}
