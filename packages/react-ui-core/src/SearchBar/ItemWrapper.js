import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

export default class ItemWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
    index: PropTypes.number,
    selectedIndex: PropTypes.number,
    theme: PropTypes.object,
    onSelectionHover: PropTypes.func,
    onSelectionClick: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover() {
    this.props.onSelectionHover(this.props.index)
  }

  render() {
    const {
      selectedIndex,
      index,
      theme,
      children,
      onSelectionClick,
    } = this.props

    return (
      <div
        className={cn(
          theme.ListItem,
          selectedIndex === index && theme.Selected
        )}
        onClick={onSelectionClick}
        onMouseEnter={this.handleHover}
      >
        {children}
      </div>
    )
  }
}
