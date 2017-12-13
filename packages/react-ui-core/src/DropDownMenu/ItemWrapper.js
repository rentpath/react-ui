import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import themed from 'react-themed'

@themed('DropDownMenu', { pure: true })

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
      ...props
    } = this.props

    return (
      <div
        data-tid={'dropdown-menu-list-item'}
        className={cn(
          theme.DropDownMenu_ListItem,
          selectedIndex === index && theme.DropDownMenu_Selected
        )}
        onClick={onSelectionClick}
        onMouseEnter={this.handleHover}
        {...props}
      >
        {children}
      </div>
    )
  }
}
