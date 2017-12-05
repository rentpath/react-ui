import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import { randomId } from '@rentpath/react-ui-utils'
import themed from 'react-themed'
import { Input } from '../Form'
import List from '../List'
import ItemWrapper from './ItemWrapper'

const ESC = 27
const ENTER = 13
const ARROW_UP = 38
const ARROW_DOWN = 40

@themed(/^SearchBar/, {
  pure: true,
})

export default class SearchBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    onInput: PropTypes.func,
    suggestions: PropTypes.node,
    suggestionsVisible: PropTypes.bool,
    resetButton: PropTypes.node,
    onAfterReset: PropTypes.func,
    submitButton: PropTypes.node,
    onSubmit: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
    value: '',
    onAfterReset: () => {},
    onSubmit: () => {},
    onInput: () => { },
    suggestionsVisible: false,
  }

  constructor(props) {
    super(props)

    const { value, suggestionsVisible } = this.props

    this.reset = this.reset.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSuggestionSelection = this.handleSuggestionSelection.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.activateSuggestion = this.activateSuggestion.bind(this)
    this.disableSuggestions = this.disableSuggestions.bind(this)
    this.enableSuggestions = this.enableSuggestions.bind(this)
    this.onInput = debounce(this.props.onInput, 300, { leading: false, trailing: true })

    this.state = {
      value,
      suggestionsVisible,
      activeSuggestionIndex: 0,
    }
  }

  onKeyDown(event) {
    switch (event.keyCode) {
      case ARROW_DOWN:
        this.activateSuggestion(this.state.activeSuggestionIndex + 1)
        break
      case ARROW_UP:
        event.preventDefault()
        this.activateSuggestion(this.state.activeSuggestionIndex - 1)
        break
      case ENTER:
        if (this.props.suggestions.length > 0) { this.handleSuggestionSelection() }
        this.props.onSubmit(this.state.value)
        this.disableSuggestions()
        event.target.blur()
        break
      case ESC:
        this.disableSuggestions()
        break
      default:
    }
  }

  get uniqueId() {
    const id = this._uniqueId || (this._uniqueId = randomId())
    return id
  }

  handleChange(event) {
    const value = event.target.value
    this.setState({ value })
    this.onInput(value)
  }

  handleSuggestionSelection() {
    const { suggestions } = this.props
    const { activeSuggestionIndex } = this.state
    this.setState({
      value: suggestions[activeSuggestionIndex],
    })
    console.log('handleSuggestionSelection:', activeSuggestionIndex, suggestions[activeSuggestionIndex])
  }

  reset() {
    this.setState({ value: '' })
    this.props.onAfterReset()
  }

  activateSuggestion(index) {
    console.log('activateSuggestion', index)
    if (index <= 0 || index >= this.props.suggestions.length) return
    this.setState({
      activeSuggestionIndex: index,
    })
  }

  disableSuggestions() {
    this.setState({
      suggestionsVisible: false,
    })
  }

  enableSuggestions() {
    this.setState({
      suggestionsVisible: true,
    })
  }

  button(button, func, buttonType) {
    return button ? React.cloneElement(
      button,
      {
        onClick: func,
        key: `${buttonType}-${this.uniqueId}}`,
        className: this.props.theme[`${buttonType}Button`],
      },
    ) : null
  }

  render() {
    const {
      theme,
      className,
      resetButton,
      submitButton,
      onSubmit,
      placeholder,
      suggestions,
    } = this.props

    const {
      value,
      suggestionsVisible,
      activeSuggestionIndex,
    } = this.state

    console.log(value)

    return (
      [
        <div className={theme.searchBar}>
          <Input
            theme={theme}
            className={className}
            value={value}
            placeholder={placeholder}
            onChange={this.handleChange}
            key={`input-${this.uniqueId}`}
            onKeyDown={this.onKeyDown}
            onBlur={this.disableSuggestions}
            onFocus={this.enableSuggestions}
          />
          {this.button(submitButton, onSubmit, 'submit')}
          {this.button(resetButton, this.reset.bind(this), 'reset')}
        </div>,
        suggestionsVisible && <div className={theme.suggestions} key={`suggestions-${this.uniqueId}`}>
          <List
            theme={theme}
            items={suggestions}
            Item={ItemWrapper}
            nodeType="div"
            listItemNodeType="ul"
            selectedIndex={activeSuggestionIndex}
            onClick={this.handleSuggestionSelection}
            onSelectionHover={this.activateSuggestion}
          />
        </div>,
      ]
    )
  }
}
