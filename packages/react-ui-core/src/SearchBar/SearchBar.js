import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import { randomId } from '@rentpath/react-ui-utils'
import themed from 'react-themed'
import { Input } from '../Form'

@themed(/^SearchBar/, {
  pure: true,
})

export default class SearchBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    onInput: PropTypes.func,
    results: PropTypes.node,
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
    onInput: () => {},
  }

  constructor(props) {
    super(props)

    const { value } = this.props

    this.reset = this.reset.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onInput = debounce(this.props.onInput, 300, { leading: false, trailing: true })

    this.state = {
      value,
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

  reset() {
    this.setState({ value: '' })
    this.props.onAfterReset()
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
    } = this.props

    const {
      value,
    } = this.state

    return (
      [
        <Input
          theme={theme}
          className={className}
          value={value}
          placeholder={placeholder}
          onChange={this.handleChange}
          key={`input-${this.uniqueId}`}
        />,
        this.button(submitButton, onSubmit, 'submit'),
        this.button(resetButton, this.reset.bind(this), 'reset'),
      ]
    )
  }
}
