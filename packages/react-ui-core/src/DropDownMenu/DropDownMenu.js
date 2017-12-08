import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import themed from 'react-themed'
import { List } from '../List'
import ItemWrapper from './ItemWrapper'

const ESC = 27
const ENTER = 13
const ARROW_UP = 38
const ARROW_DOWN = 40

@themed(/^DropDown/, {
  pure: true,
})

export default class DropDownMenu extends Component {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    options: PropTypes.node,
    onSelection: PropTypes.func,
    onSelectionHover: PropTypes.func, 
    optionValueSelector: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    onSelectionHover: () => { },
    onSelection: () => { },
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
      case ESC:
        this.makeInvisible()
        break
      default:
    }
  }

  getValue() { 
    const { optionValueSelector, options, onSelection } = this.props
    let value = options[this.state.activeIndex]

    if (optionValueSelector) value = optionValueSelector(value)
    return value
  }

  handleSelection(event) {
    if (event.stopPropagation) {
      event.stopPropagation()
    }
    
    this.props.onSelection(this.getValue())
  }

  activateOption(index) {
    if (index < 0 || index >= this.props.options.length) return
    this.setState({
      activeIndex: index,
    })

    this.props.onSelectionHover(this.getValue())
  }

  render() {
    const {
      className,
      options,
      theme,
      visible,
      onSelectionHover,
      ...props
    } = this.props

    const { activeIndex } = this.state

    return (
      <List
        className={cn(
          className,
          theme.List,
        )}
        items={options}
        Item={ItemWrapper}
        nodeType="div"
        listItemNodeType="ul"
        selectedIndex={activeIndex}
        onSelectionClick={this.handleSelection}
        onSelectionHover={this.activateOption}
        {...props}
      />
    )
  }
} 
