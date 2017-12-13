import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import themed from 'react-themed'

@themed(/^DropdownMenu/, { pure: true })

export default class ItemWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
    index: PropTypes.number,
    selectedIndex: PropTypes.number,
    theme: PropTypes.object,
    handleSelectionHover: PropTypes.func,
    handleSelectionClick: PropTypes.func,
    onClick: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover() {
    this.props.handleSelectionHover(this.props.index)
  }

  render() {
    const {
      selectedIndex,
      index,
      theme,
      children,
      handleSelectionClick,
      handleSelectionHover,
      onClick,
      ...props
    } = this.props

    return (
      <div
        data-tid="dropdown-menu-list-item"
        className={cn(
          theme.DropdownMenu_ListItem,
          selectedIndex === index && theme.DropdownMenu_Selected
        )}
        onClick={handleSelectionClick}
        onMouseEnter={this.handleHover}
        {...props}
      >
        {children}
      </div>
    )
  }
}
