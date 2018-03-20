import React, { Component, createElement } from 'react'
import { parseArgs } from '@rentpath/react-ui-utils'
import debounce from 'lodash/debounce'
import capitalize from 'lodash/capitalize'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import themed from 'react-themed'
import classnames from 'classnames'
import { Dropdown } from '../Dropdown'
import { Card } from '../Card'
import { Highlighter } from '../Highlighter'
import { Menu } from '../Menu'
import { Button } from '../Button'
import { Field } from '../Form'

const ENTER = 13
const ESCAPE = 27

@themed(/^(AutoSuggestField|Button_Clear|Button_Submit)/, {
  pure: true,
})

export default class AutoSuggestField extends Component {
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
    onInput: PropTypes.func,
    submitOnSelection: PropTypes.bool,
    visible: PropTypes.bool,
    onVisibilityChange: PropTypes.func,
    suggestions: PropTypes.node,
    value: PropTypes.string,
    valueSelector: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    anchorField: {},
    value: '',
    onSubmit: () => { },
    onInput: () => { },
    onSelection: () => { },
    valueSelector: value => value,
    submitOnSelection: true,
    visible: false,
    highlight: false,
  }

  constructor(props) {
    super(props)
    const { value, visible, onInput } = props

    this.onInput = debounce(onInput, 300)
    this.state = {
      value,
      visible,
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillReceiveProps(nextProps) {
    if (!(this.props.value === nextProps.value)) {
      this.setState({
        value: nextProps.value,
      })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  @autobind
  onKeyDown(event) {
    const { suggestions } = this.props
    const { visible } = this.state
    const code = event.keyCode || event.key || event.keyIndentifier

    switch (code) {
      case ESCAPE:
        this.handleClear()
        break
      case ENTER:
        if (!visible || !suggestions || !suggestions.length) {
          this.handleSubmit(this.state.value)
        }
        break
      default:
    }
  }

  get highlightedListItem() {
    const { highlight } = this.props

    if (!highlight) return { nodeType: 'div' }
    const indexHighlighted = highlight.indexHighlighted >= 0 ? highlight.indexHighlighted : 1

    return { nodeType: props =>
      (<Highlighter
        indexHighlighted={indexHighlighted}
        {...props}
        pattern={this.state.value}
      />),
    }
  }

  updateValueAndClose(value, cb = () => { }) {
    this.handleVisibilityChange(false)
    this.setState({
      value,
    }, cb)
  }

  @autobind
  handleInput(event) {
    const value = event.target.value
    this.setState({ value })
    this.handleVisibilityChange(true)
    this.onInput(value)
  }

  @autobind
  handleSubmit() {
    this.props.onSubmit(this.state.value)
    this.updateValueAndClose(this.state.value)
  }

  @autobind
  handleSuggestionSelection(value) {
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
        if (submitOnSelection) onSubmit(this.state.value)
      }
    )
  }

  @autobind
  handleVisibilityChange(visible) {
    const onVisibilityChange = this.props.onVisibilityChange
    this.setState({
      visible,
    })
    if (onVisibilityChange) onVisibilityChange(visible)
  }

  @autobind
  handleClear() {
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
      className: theme[`Button_${name}`],
    }))
  }

  renderAnchorField() {
    return {
      ...this.props.anchorField,
      value: this.state.value,
      anchor: Field,
      onChange: this.handleInput,
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
      onSubmit, // eslint-disable-line no-unused-vars
      onItemMouseOver,
      onSelection, // eslint-disable-line no-unused-vars
      highlight,
      valueSelector,
      value,
      onAfterClear,
      submitOnSelection,
      visible,
      onInput,
      onVisibilityChange,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          theme.AutoSuggestField,
          className
        )}
        data-tid="autosuggest-field"
      >
        <Dropdown
          anchorField={this.renderAnchorField()}
          value={this.state.value}
          visible={this.state.visible}
          onVisibilityChange={this.handleVisibilityChange}
          {...props}
        >
          <Card>
            <Menu
              listItem={this.highlightedListItem}
              options={suggestions}
              onItemSelect={this.handleSuggestionSelection}
              onItemMouseOver={onItemMouseOver}
            />
          </Card>
        </Dropdown>
        {this.renderButton(submitButton, 'submit', props)}
        {this.renderButton(clearButton, 'clear', props)}
      </div>
    )
  }
}
