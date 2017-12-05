import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

export default class ItemWrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    index: PropTypes.number,
    selectedIndex: PropTypes.number,
    theme: PropTypes.object,
    onSelectionHover: PropTypes.func,
  }

  render() {
    const {
      selectedIndex,
      index,
      theme,
      children,
      onSelectionHover,
      ...props
    } = this.props

    return (
      <div
        className={cn(
          theme.ListItem,
          selectedIndex === index && theme.Selected
        )}
        onMouseEnter={console.log('hover')}
        {...props}
      >
        {children}
      </div>
    )
  }
}
