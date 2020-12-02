import React, { PureComponent } from 'react'
import isEqual from 'lodash/isEqual'
import PropTypes from 'prop-types'
import themed from '@rentpath/react-themed'
import clsx from 'clsx'
import { List } from '../List'

export const ENTER = 13
export const ARROW_UP = 38
export const ARROW_DOWN = 40

@themed(['Menu'], { pure: true })
export default class Menu extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.shape({
        label: PropTypes.node,
        value: PropTypes.node,
        disabled: PropTypes.bool,
      }),
    ])),
    onItemSelect: PropTypes.func,
    onItemMouseOver: PropTypes.func,
    onItemKeyOver: PropTypes.func,
    nodeType: PropTypes.string,
    listItem: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.object,
    ]),
    highlightIndex: PropTypes.number,
    selectedIndex: PropTypes.number,
  }

  static defaultProps = {
    theme: {},
    nodeType: 'div',
    listItem: { nodeType: 'div' },
    options: [],
  }

  constructor(props) {
    super(props)
    this.state = {
      highlightIndex: -1,
      indexedOptionIndex: -1,
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
    if (!this.props.highlightIndex) this.resetHighlightedIndex()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.highlightIndex !== nextProps.highlightIndex) {
      this.setState({ highlightIndex: nextProps.highlightIndex })
    }

    if (!isEqual(this.props.options, nextProps.options)) {
      this.resetHighlightedIndex()
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown = event => {
    const code = event.keyCode || event.key || event.keyIndentifier

    switch (code) {
      case ARROW_DOWN:
        event.preventDefault()
        this.highlightOptionAtIndex(this.state.indexedOptionIndex + 1)
        break
      case ARROW_UP:
        event.preventDefault()
        this.highlightOptionAtIndex(this.state.indexedOptionIndex - 1)
        break
      case ENTER:
        event.preventDefault()
        this.handleSelection(event)
        break
      default:
    }
  }

  onMouseEnter = index => {
    const { onItemMouseOver } = this.props

    if (index < 0 || index >= this.options.length) return
    this.setState({
      highlightIndex: index,
    }, () => {
      if (onItemMouseOver) onItemMouseOver(this.highlightedOption)
    })
  }

  get options() {
    return this.props.options || []
  }

  get highlightedOption() {
    return this.options[this.state.highlightIndex]
  }

  get indexedOptions() {
    return this.options.reduce((options, { disabled }, index) => (
      disabled !== true ? [...options, { disabled, index }] : options
    ), [])
  }

  handleSelection = event => {
    const { onItemSelect } = this.props

    const option = this.highlightedOption

    if (onItemSelect && option && !option.disabled) {
      onItemSelect(option, this.state.highlightIndex, event.type || 'keydown')
    }
  }

  resetHighlightedIndex() {
    this.setState({
      highlightIndex: -1,
      indexedOptionIndex: -1,
    })
  }

  highlightOptionAtIndex(index) {
    const { onItemKeyOver } = this.props
    const indexedOptions = this.indexedOptions

    if (index < 0 || index >= indexedOptions.length) return
    this.setState({
      highlightIndex: indexedOptions[index].index,
      indexedOptionIndex: index,
    }, () => {
      if (onItemKeyOver) onItemKeyOver(this.highlightedOption)
    })
  }

  render() {
    const {
      theme,
      onItemMouseOver,
      onItemKeyOver,
      className,
      onItemSelect,
      selectedIndex,
      options,
      ...props
    } = this.props

    return (
      <List
        role="button"
        className={clsx(
          className,
          theme.Menu
        )}
        items={this.options}
        highlightIndex={this.state.highlightIndex}
        selectedIndex={selectedIndex}
        onClick={this.handleSelection}
        onMouseEnter={this.onMouseEnter}
        {...props}
      />
    )
  }
}
