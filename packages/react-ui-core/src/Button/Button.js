import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'

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
      ...props
    } = this.props

    return (
      <NodeType
        data-tid="button"
        {...props}
        className={
          classnames(
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
