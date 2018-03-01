import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import autobind from 'autobind-decorator'
import themed from 'react-themed'

@themed(/^ListItem/, {
  pure: true,
})

export default class ListItem extends PureComponent {

  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    nodeType: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.object,
    ]),
    children: PropTypes.node,
    onMouseEnter: PropTypes.func,
    onClick: PropTypes.func,
    index: PropTypes.number,
    highlight: PropTypes.bool,
    selected: PropTypes.bool,
  }

  static defaultProps = {
    theme: {},
    nodeType: 'li',
  }

  @autobind
  handleMouseEnter() {
    const { onMouseEnter, index } = this.props

    if (onMouseEnter) onMouseEnter(index)
  }

  render() {
    const {
      theme,
      className,
      children,
      onMouseEnter,
      index,
      highlight,
      selected,
      nodeType: NodeType,
      ...props
    } = this.props

    return (
      <NodeType
        className={cn(
          theme.ListItem,
          className,
          highlight && theme['ListItem-highlight'],
          selected && theme['ListItem-selected'],
        )}
        index={index}
        onMouseEnter={this.handleMouseEnter}
        {...props}
      >
        {children}
      </NodeType>
    )
  }
}
