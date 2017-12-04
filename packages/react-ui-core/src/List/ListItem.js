import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import themed from 'react-themed'

@themed('*', { pure: true })

export default class ListItem extends PureComponent {

  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    nodeType: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    theme: {},
    nodeType: 'li',
  }

  render() {
    const {
      theme,
      className,
      children,
      nodeType: NodeType,
      ...props
    } = this.props

    return (
      <NodeType
        className={cn(
          theme.ListItem,
          className,
        )}
        {...props}
      >
        {children}
      </NodeType>
    )
  }
}
