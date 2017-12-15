import React, { Component } from 'react'
import debounce from 'lodash/debounce'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import { Dropdown, DropdownMenu } from '../Dropdown'
import InputAnchor from './InputAnchor'

const ENTER = 13
const ESCAPE = 27

@themed(/^AutoSuggestField/, {
  pure: true,
})

export default class AutoSuggestField extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    onInput: PropTypes.func,
    suggestions: PropTypes.node,
    ResetButton: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ]),
    onAfterReset: PropTypes.func,
    SubmitButton: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ]),
    onSubmit: PropTypes.func,
    onSelection: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    suggestionValueSelector: PropTypes.func,
    onSelectionHover: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    value: '',
    onAfterReset: () => {},
    onSubmit: () => {},
    onInput: () => {},
    suggestionsVisible: false,
  }

  constructor(props) {
    super(props)

    const { value } = this.props

    this.reset = this.reset.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleSuggestionSelection = this.handleSuggestionSelection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.onInput = debounce(this.props.onInput, 300, { leading: false, trailing: true })
    this.onKeyDown = this.onKeyDown.bind(this)

    this.state = {
      value,
      visible: true,
    }
    this.onInput(value)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown(event) {
    switch (event.keyCode) {
      case ESCAPE:
        event.preventDefault()
        this.reset()
        break
      case ENTER:
        event.preventDefault()
        this.handleOnSubmit(this.state.value)
        break
      default:
    }
  }

  handleInput(event) {
    const value = event.target.value
    this.setState({ value })
    this.onInput(value)
  }

  handleOnSubmit() {
    this.props.onSubmit(this.state.value)
    this.setState({ visible: false })
  }

  handleSuggestionSelection(value) {
    const { onSelection } = this.props

    this.setState({
      value,
      visible: false,
    })

    onSelection(value)
  }

  handleVisibilityChange(visible) {
    this.setState({
      visible,
    })
  }

  reset() {
    this.setState({ value: '', visible: false })
    this.props.onAfterReset()
  }

  render() {
    const {
      theme,
      ResetButton,
      SubmitButton,
      placeholder,
      suggestions,
      className,
      onSubmit, // eslint-disable-line no-unused-vars
      onSelectionHover,
      onSelection, // eslint-disable-line no-unused-vars
      suggestionValueSelector,
    } = this.props

    const {
      value,
      visible,
    } = this.state

    return (
      <div
        className={classnames(
          theme.AutoSuggestField,
          className
        )}
        data-tid="autosuggest-field"
      >

        <Dropdown
          Anchor={InputAnchor}
          value={value}
          onChange={this.handleInput}
          visible={visible}
          onVisibilityChange={this.handleVisibilityChange}
          placeholder={placeholder}
        >
          <DropdownMenu
            options={suggestions}
            onSelection={this.handleSuggestionSelection}
            onSelectionHover={onSelectionHover}
            optionValueSelector={suggestionValueSelector}
          />
        </Dropdown>

        {SubmitButton && <SubmitButton onClick={this.handleOnSubmit} />}
        {ResetButton && <ResetButton onClick={this.reset} />}
      </div>
    )
  }
}
