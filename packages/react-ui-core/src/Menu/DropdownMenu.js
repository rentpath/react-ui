import React, { Component } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import themed from 'react-themed'
import classnames from 'classnames'
import isEqual from 'lodash/isEqual'
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
    selectedValue: PropTypes.node,
    createAnchorText: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    options: [],
    selectedIndex: 0,
    selectedValue: null,
    onItemSelect: () => {},
  }

  constructor(props) {
    super(props)
    const selectedIndex = this.selectedIndexFromValue() || this.props.selectedIndex || 0
    this.state = { selectedIndex }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedIndex !== nextProps.selectedIndex) {
      this.setState({ selectedIndex: nextProps.selectedIndex })
    } else if (this.props.selectedValue !== nextProps.selectedValue) {
      this.setState({ selectedIndex: this.selectedIndexFromValue(nextProps.selectedValue) })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { options, selectedIndex, selectedValue } = this.props

    return !isEqual(options, nextProps.options)
      || selectedIndex !== nextProps.selectedIndex
      || selectedValue !== nextProps.selectedValue
      || this.state.selectedIndex !== nextState.selectedIndex
  }

  get selectedItem() {
    return this.props.options[this.state.selectedIndex] || ''
  }

  get selectedItemLabel() {
    const item = this.selectedItem
    return typeof item === 'object' ? item.label : item
  }

  selectedIndexFromValue(selectedValue = this.props.selectedValue) {
    const index = this.props.options.findIndex(option => option.value === selectedValue)
    return index === -1 ? 0 : index
  }

  @autobind
  itemSelectionHandler(item, index) {
    const { onItemSelect } = this.props

    if (onItemSelect) onItemSelect(item, index)

    this.setState({ selectedIndex: index })
  }

  renderAnchorFieldText() {
    const { createAnchorText } = this.props

    if (createAnchorText) return createAnchorText(this.selectedItemLabel)
    return this.selectedItemLabel
  }

  render() {
    const {
      theme,
      className,
      options,
      selectedIndex,
      selectedValue,
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
          selectedIndex={this.state.selectedIndex}
          onItemSelect={this.itemSelectionHandler}
        />
      </Dropdown>
    )
  }
}
