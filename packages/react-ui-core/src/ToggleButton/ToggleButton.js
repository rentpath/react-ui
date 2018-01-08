import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'

@themed('*', {
  pure: true,
})
export default class Title extends PureComponent {
  static propTypes = {
    nodeType: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.object,
    children: PropTypes.node,
  }

  static defaultProps = {
    theme: {},
    nodeType: 'h2',
  }

  render() {
    const {
      nodeType: NodeType,
      className,
      theme,
      children,
      ...props
    } = this.props

    return (
      <NodeType
        className={classnames(
          theme.Title,
          className,
        )}
        data-tid="title"
        {...props}
      >
        {children}
      </NodeType>
    )
  }
}
