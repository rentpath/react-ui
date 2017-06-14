import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Menu extends Component {
  static propTypes = {
    text: PropTypes.string,
    children: PropTypes.node.isRequired,
    menuIcon: PropTypes.object,
    theme: PropTypes.object,
    onClick: PropTypes.func,
    isEnabled: PropTypes.bool,
    isDropdown: PropTypes.bool,
  }

  static defaultProps = {
    theme: {},
    isEnabled: true,
    isDropdown: false,
  }

  get childrenAsDropdown() {
    return (
      <li>
        <ul className={this.props.theme.dropdownMenu}>
         {this.props.children}
        </ul>
      </li>
    )
  }

  menuIcon(icon) {
    return (icon ?
      <span className={this.props.theme.menuIcon}>
        {icon}
      </span>
    : null)
  }

  render() {
    const {
      text,
      theme,
      menuIcon,
      onClick,
      isEnabled,
      isDropdown,
      children,
      className,
      ...rest
    } = this.props

    if (!isEnabled) return null

    return (
      <ul {...rest} className={classNames(className, theme.menu)} onClick={onClick}>
        <li className={theme.menuText}>
          {text}
          {this.menuIcon(menuIcon)}
        </li>
        {isDropdown ? this.childrenAsDropdown : children}
      </ul>
    )
  }
}
