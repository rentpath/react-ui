import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import themed from 'react-themed'
import { List } from '../List'
import ItemWrapper from './ItemWrapper'

const ENTER = 13
const ARROW_UP = 38
const ARROW_DOWN = 40

@themed(/^DropdownMenu/, {
  pure: true,
})

export default class DropdownMenu extends Component {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    options: PropTypes.node,
    onSelection: PropTypes.func,
    handleSelectionHover: PropTypes.func,
    optionValueSelector: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    handleSelectionHover: () => {},
    onSelection: () => {},
  }

  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0,
    }

    this.activateOption = this.activateOption.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.getValue = this.getValue.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown(event) {
    switch (event.keyCode) {
      case ARROW_DOWN:
        this.activateOption(this.state.activeIndex + 1)
        break
      case ARROW_UP:
        event.preventDefault()
        this.activateOption(this.state.activeIndex - 1)
        break
      case ENTER:
        event.preventDefault()
        this.handleSelection(this.state.activeIndex)
        break
      default:
    }
  }

  getValue() {
    const { optionValueSelector, options } = this.props
    let value = options[this.state.activeIndex]

    if (optionValueSelector) value = optionValueSelector(value)
    return value
  }

  handleSelection() {
    this.props.onSelection(this.getValue())
  }

  activateOption(index) {
    if (index < 0 || index >= this.props.options.length) return
    this.setState({
      activeIndex: index,
    })

    this.props.handleSelectionHover(this.getValue())
  }

  render() {
    const {
      className,
      options,
      theme,
      handleSelectionHover,
      onSelection,
      ...props
    } = this.props

    const { activeIndex } = this.state

    return (
      <List
        className={cn(
          className,
          theme.List,
          theme.DropdownMenu
        )}
        items={options}
        Item={ItemWrapper}
        nodeType="div"
        selectedIndex={activeIndex}
        handleSelectionClick={this.handleSelection}
        handleSelectionHover={this.activateOption}
        {...props}
      />
    )
  }
}
