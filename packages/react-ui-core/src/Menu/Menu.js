import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
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
      indexedOptions: this.generateIndexedOptions(),
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
    this.highlightIndexedOption(0)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.highlightIndex !== nextProps.highlightIndex) {
      this.setState({ highlightIndex: nextProps.highlightIndex })
    }

    if (this.props.options !== nextProps.options) {
      this.setState({
        indexedOptions: this.generateIndexedOptions(),
      }, this.highlightIndexedOption(0))
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  @autobind
  onKeyDown(event) {
    const code = event.keyCode || event.key || event.keyIndentifier

    switch (code) {
      case ARROW_DOWN:
        this.highlightIndexedOption(this.state.indexedOptionIndex + 1)
        break
      case ARROW_UP:
        event.preventDefault()
        this.highlightIndexedOption(this.state.indexedOptionIndex - 1)
        break
      case ENTER:
        event.preventDefault()
        this.handleSelection()
        break
      default:
    }
  }

  get options() {
    return this.props.options || []
  }

  get highlightedOption() {
    return this.options[this.state.highlightIndex || 0]
  }

  @autobind
  handleSelection() {
    const { onItemSelect } = this.props

    const option = this.highlightedOption

    if (onItemSelect && option && !option.disabled) {
      onItemSelect(option, this.state.highlightIndex)
    }
  }

  @autobind
  highlightOption(index) {
    const { onItemMouseOver } = this.props

    if (index < 0 || index >= this.options.length) return
    this.setState({
      highlightIndex: index,
    }, () => {
      if (onItemMouseOver) onItemMouseOver(this.highlightedOption)
    })
  }

  @autobind
  highlightIndexedOption(index) {
    const { onItemMouseOver } = this.props

    if (index < 0 || index >= this.state.indexedOptions.length) return
    this.setState({
      highlightIndex: this.state.indexedOptions[index].index,
      indexedOptionIndex: index,
    }, () => {
      if (onItemMouseOver) onItemMouseOver(this.highlightedOption)
    })
  }

  generateIndexedOptions() {
    return this.options.map((option, index) => ({
      disabled: option.disabled,
      index,
    }))
      .filter(option => option.disabled !== true)
  }

  render() {
    const {
      theme,
      onItemMouseOver,
      className,
      onItemSelect,
      selectedIndex,
      ...props
    } = this.props

    return (
      <List
        role="button"
        className={classnames(
          className,
          theme.Menu
        )}
        items={this.options || []}
        highlightIndex={this.state.highlightIndex}
        selectedIndex={selectedIndex}
        onClick={this.handleSelection}
        onMouseEnter={this.highlightOption}
        {...props}
      />
    )
  }
}
