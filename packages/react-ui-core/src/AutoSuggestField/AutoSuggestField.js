import React, { PureComponent, createElement } from 'react'
import { parseArgs } from '@rentpath/react-ui-utils'
import capitalize from 'lodash/capitalize'
import PropTypes from 'prop-types'
import themed from '@rentpath/react-themed'
import clsx from 'clsx'
import { Dropdown } from '../Dropdown'
import { Card } from '../Card'
import { Highlighter } from '../Highlighter'
import { Menu } from '../Menu'
import { Button } from '../Button'
import { Field } from '../Form'

export const ENTER = 13
export const ESCAPE = 27

@themed(/^AutoSuggestField/, { pure: true })
export default class AutoSuggestField extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    anchorField: PropTypes.object,
    clearButton: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.object,
    ]),
    submitButton: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.object,
    ]),
    highlight: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
    highlightIndex: PropTypes.number,
    onAfterClear: PropTypes.func,
    onSubmit: PropTypes.func,
    onSelection: PropTypes.func,
    onItemMouseOver: PropTypes.func,
    onItemKeyOver: PropTypes.func,
    onInput: PropTypes.func,
    submitOnSelection: PropTypes.bool,
    visible: PropTypes.bool,
    onVisibilityChange: PropTypes.func,
    suggestions: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.node,
    ]),
    value: PropTypes.string,
    valueSelector: PropTypes.func,
    showSelectionInInputField: PropTypes.bool,
  }

  static defaultProps = {
    theme: {},
    anchorField: {},
    value: '',
    onSubmit: () => {},
    onInput: () => {},
    onSelection: () => {},
    valueSelector: value => value,
    submitOnSelection: true,
    visible: false,
    highlight: false,
  }

  constructor(props) {
    super(props)
    const {
      value,
      visible,
    } = props

    this.state = {
      value,
      visible,
      keyedOverSelection: null,
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
        keyedOverSelection: null,
      })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown = event => {
    const code = event.keyCode || event.key || event.keyIndentifier

    switch (code) {
      case ESCAPE:
        this.handleClear()
        break
      case ENTER:
        this.handleSubmit(event)
        break
      default:
    }
  }

  onChange = event => {
    const { valueSelector } = this.props
    const { keyedOverSelection } = this.state

    if (keyedOverSelection) {
      this.setState({ keyedOverSelection: null, value: valueSelector(keyedOverSelection) })
    }
    const value = event.target.value
    this.setState({ value })
    this.handleVisibilityChange(true)
    this.props.onInput(value)
  }

  onItemKeyOver = value => {
    const { onItemKeyOver } = this.props
    this.setState({ keyedOverSelection: value })
    if (onItemKeyOver) onItemKeyOver(value)
  }

  onItemMouseOver = value => {
    const { onItemMouseOver } = this.props

    if (onItemMouseOver) onItemMouseOver(value)
  }

  get highlightedListItem() {
    const { highlight } = this.props

    if (!highlight) return { nodeType: 'div' }
    const indexHighlighted = highlight.indexHighlighted >= 0 ? highlight.indexHighlighted : 0

    return {
      nodeType: Highlighter,
      indexHighlighted,
      ignoreCase: true,
      pattern: this.state.value,
      ...(typeof highlight === 'object' ? highlight : {}),
    }
  }

  get inputValue() {
    const { value, keyedOverSelection } = this.state
    const { showSelectionInInputField, valueSelector } = this.props

    if (!showSelectionInInputField) return value
    return valueSelector(keyedOverSelection) || value
  }

  updateValueAndClose(value, callback = () => {}) {
    this.handleVisibilityChange(false)
    this.setState({
      value,
    }, callback)
  }

  handleSubmit = event => {
    this.props.onSubmit(this.state.value, event.type)
    this.updateValueAndClose(this.state.value)
  }

  handleSuggestionSelection = (value, _index, eventType) => {
    const {
      onSubmit,
      onSelection,
      submitOnSelection,
      onInput,
      valueSelector,
    } = this.props

    onInput(value)
    onSelection(value)
    this.updateValueAndClose(
      valueSelector(value),
      () => {
        if (submitOnSelection) onSubmit(this.state.value, eventType)
      }
    )
  }

  handleVisibilityChange = visible => {
    const onVisibilityChange = this.props.onVisibilityChange
    this.setState({
      visible,
    })
    if (onVisibilityChange) onVisibilityChange(visible)
  }

  handleClear = () => {
    const { onAfterClear } = this.props
    this.updateValueAndClose('')
    if (onAfterClear) onAfterClear()
  }

  renderButton(button, type, props) {
    const { theme } = this.props
    const name = capitalize(type)

    if (!button) return null

    return createElement(...parseArgs(button, Button, {
      ...props,
      onClick: this[`handle${name}`],
      'data-tid': `autosuggest-${type}-button`,
      className: theme[`AutoSuggestField_Button${name}`],
    }))
  }

  renderAnchorField() {
    return {
      ...this.props.anchorField,
      value: this.inputValue,
      anchor: Field,
      onChange: this.onChange,
    }
  }

  render() {
    const {
      theme,
      clearButton,
      submitButton,
      anchorField,
      suggestions,
      className,
      onSubmit,
      onItemMouseOver,
      onItemKeyOver,
      onSelection,
      highlight,
      valueSelector,
      value,
      onAfterClear,
      submitOnSelection,
      visible,
      onInput,
      onVisibilityChange,
      showSelectionInInputField,
      ...props
    } = this.props

    return (
      <div
        className={clsx(
          theme.AutoSuggestField,
          className
        )}
        data-tid="autosuggest-field"
      >
        <Dropdown
          anchorField={this.renderAnchorField()}
          value={this.inputValue}
          visible={this.state.visible}
          onVisibilityChange={this.handleVisibilityChange}
          {...props}
        >
          <Card>
            <Menu
              listItem={this.highlightedListItem}
              options={suggestions}
              onItemSelect={this.handleSuggestionSelection}
              onItemMouseOver={this.onItemMouseOver}
              onItemKeyOver={this.onItemKeyOver}
            />
          </Card>
        </Dropdown>
        {this.renderButton(submitButton, 'submit', props)}
        {this.renderButton(clearButton, 'clear', props)}
      </div>
    )
  }
}
