import React, { Component } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import themed from 'react-themed'
import classnames from 'classnames'
import { Dropdown } from '../Dropdown'
import MenuWrapper from './MenuWrapper'

@themed(/^DropdownMenu/)

export default class DropdownMenu extends Component {
  static propTypes = {
    theme: PropTypes.object,
    options: PropTypes.array,
    onItemSelect: PropTypes.func,
    className: PropTypes.string,
    selectedIndex: PropTypes.number,
    createAnchorText: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    options: [],
    selectedIndex: 0,
    onItemSelect: () => {},
  }

  constructor(props) {
    super(props)
    this.state = { selectedIndex: this.props.selectedIndex || 0 }
  }

  get selectedItem() {
    return this.itemLabel(this.props.options[this.state.selectedIndex]) || ''
  }

  itemLabel(item) {
    return typeof item === 'object' ? item.label : item
  }

  @autobind
  itemSelectionHandler(item, index) {
    const { onItemSelect } = this.props

    if (onItemSelect) onItemSelect(item, index)

    this.setState({ selectedIndex: index })
  }

  renderAnchorFieldText() {
    const { createAnchorText } = this.props

    if (createAnchorText) return createAnchorText(this.selectedItem)

    return this.selectedItem
  }

  render() {
    const {
      theme,
      className,
      options,
      selectedIndex,
      onItemSelect,
      createAnchorText,
      ...props
    } = this.props

    return (
      <Dropdown
        className={classnames(className, theme.DropdownMenu)}
        anchorField={{ children: this.renderAnchorFieldText() }}
        {...props}
      >
        <MenuWrapper
          options={options}
          onItemSelect={this.itemSelectionHandler}
        />
      </Dropdown>
    )
  }
}
