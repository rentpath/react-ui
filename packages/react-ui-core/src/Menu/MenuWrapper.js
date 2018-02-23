import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import Menu from './Menu'

export default class MenuWrapper extends PureComponent {

  static propTypes = {
    onSelect: PropTypes.func,
    onItemSelect: PropTypes.func,
  }

  @autobind
  handleSelection(item, index) {
    const { onSelect, onItemSelect } = this.props

    if (onItemSelect) onItemSelect(item, index)
    if (onSelect) onSelect()
  }

  render() {
    const {
      onItemSelect,
      onSelect,
      ...props
    } = this.props

    return (
      <Menu
        onItemSelect={this.handleSelection}
        {...props}
      />
    )
  }
}
