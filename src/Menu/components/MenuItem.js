import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class MenuItem extends Component {
  static propTypes = {
    text: PropTypes.string,
    theme: PropTypes.object,
    url: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    isEnabled: PropTypes.bool,
  }

  static defaultProps = {
    theme: {},
    isEnabled: true,
  }

  render() {
    const {
      text,
      url,
      theme,
      onClick,
      children,
      isEnabled,
      className,
      ...rest
    } = this.props

    if (!isEnabled) return null

    return (
      <li {...rest} className={classNames(className, theme.menuItem)} onClick={onClick}>
       { url ? <a href={url}>{text}</a> : text}
       {children}
      </li>
    )
  }
}
