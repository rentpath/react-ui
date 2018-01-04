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
    options: PropTypes.node,
    onItemSelect: PropTypes.func,
    onItemMouseOver: PropTypes.func,
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
    nodeType: 'div',
    listItem: { nodeType: 'div' },
  }

  constructor(props) {
    super(props)

    this.state = {
      highlightIndex: props.highlightIndex || 0,
    }
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

  @autobind
  onKeyDown(event) {
    const code = event.keyCode || event.key || event.keyIndentifier

    switch (code) {
      case ARROW_DOWN:
        this.highlightOption(this.state.highlightIndex + 1)
        break
      case ARROW_UP:
        event.preventDefault()
        this.highlightOption(this.state.highlightIndex - 1)
        break
      case ENTER:
        event.preventDefault()
        this.handleSelection()
        break
      default:
    }
  }

  get value() {
    const { options } = this.props
    return options[this.state.highlightIndex]
  }

  @autobind
  handleSelection() {
    const { onItemSelect } = this.props

    if (onItemSelect) onItemSelect(this.value)
  }

  @autobind
  highlightOption(index) {
    const { options, onItemMouseOver } = this.props

    if (index < 0 || index >= options.length) return
    this.setState({ highlightIndex: index }, () => {
      if (onItemMouseOver) onItemMouseOver(this.value)
    })
  }

  render() {
    const {
      options,
      theme,
      onItemMouseOver,
      className,
      onItemSelect,
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