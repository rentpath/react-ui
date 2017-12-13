import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import { List } from '../List'

const ENTER = 13
const ARROW_UP = 38
const ARROW_DOWN = 40

@themed(['Menu'], {
  pure: true,
})

export default class Menu extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    options: PropTypes.node,
    onSelection: PropTypes.func,
    handleSelectionHover: PropTypes.func,
    optionValueSelector: PropTypes.func,
    nodeType: PropTypes.string,
    listItem: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.object,
    ]),
    highlightIndex: PropTypes.number,
  }

  static defaultProps = {
    theme: {},
    handleSelectionHover: () => {},
    onSelection: () => { },
    nodeType: 'div',
    listItem: { nodeType: 'div' },
  }

  constructor(props) {
    super(props)

    this.state = {
      highlightIndex: props.highlightIndex || 0,
    }

    this.highlightOption = this.highlightOption.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.getValue = this.getValue.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.highlightIndex !== nextProps.highlightIndex) {
      this.setState({ highlightIndex: nextProps.highlightIndex })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown(event) {
    switch (event.keyCode) {
      case ARROW_DOWN:
        this.highlightOption(this.state.highlightIndex + 1)
        break
      case ARROW_UP:
        event.preventDefault()
        this.highlightOption(this.state.highlightIndex - 1)
        break
      case ENTER:
        event.preventDefault()
        this.handleSelection(this.state.highlightIndex)
        break
      default:
    }
  }

  getValue() {
    const { optionValueSelector, options } = this.props
    let value = options[this.state.highlightIndex]

    if (optionValueSelector) value = optionValueSelector(value)
    return value
  }

  handleSelection() {
    this.props.onSelection(this.getValue())
  }

  highlightOption(index) {
    if (index < 0 || index >= this.props.options.length) return
    this.setState({
      highlightIndex: index,
    })

    this.props.handleSelectionHover(this.getValue())
  }

  render() {
    const {
      options,
      theme,
      handleSelectionHover,
      className,
      onSelection,
      ...props
    } = this.props

    return (
      <List
        role="button"
        className={classnames(
          className,
          theme.Menu
        )}
        items={options}
        highlightIndex={this.state.highlightIndex}
        onClick={this.handleSelection}
        onMouseEnter={this.highlightOption}
        {...props}
      />
    )
  }
}
