import React, { PureComponent } from 'react'
import themed from 'react-themed'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import autobind from 'autobind-decorator'
import { ToggleButton } from '../Button'

@themed(/^Drawer/, {
  pure: true,
})

export default class Drawer extends PureComponent {

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
    height: 205,
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
      visible: visibleProp,
      onClick,
      ...props
    } = this.props

    const {
      visible,
    } = this.state

    return (
      <div
        className={classnames(
          theme.Drawer,
          theme[visible ? 'Drawer-on' : 'Drawer-off'],
          className,
        )}
        style={visible ? {} : { transform: `translateY(${height}px)` }}
        data-tid="drawer"
      >
        <ToggleButton
          className={classnames(
            theme[visible ? 'Drawer-Button-on' : 'Drawer-Button-off'],
          )}
          theme={theme}
          onClick={this.handleToggle}
          value={visible}
          {...props}
        >
          {(visible) ? closeButtonContents : openButtonContents}
        </ToggleButton>
        <div
          className={theme.Drawer_Content}
          data-tid="drawer-content"
        >
          {children}
        </div>
      </div>
    )
  }
}
