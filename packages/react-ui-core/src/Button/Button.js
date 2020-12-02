import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import themed from '@rentpath/react-themed'

@themed(/^Button/, {
  pure: true,
})
export default class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    theme: PropTypes.object,
    nodeType: PropTypes.string,
    componentRef: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    nodeType: 'button',
  }

  render() {
    const {
      size,
      color,
      theme,
      className,
      nodeType: NodeType,
      componentRef,
      ...props
    } = this.props

    return (
      <NodeType
        data-tid="button"
        {...props}
        ref={componentRef}
        className={
          clsx(
            className,
            theme.Button,
            color && theme[`Button-${color}`],
            size && theme[`Button-${size}`],
          )
        }
      />
    )
  }
}
