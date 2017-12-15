import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Field } from '../Form'

export default class InputAnchor extends PureComponent {
  static propTypes = {
    changeVisibility: PropTypes.func,
    handleDocumentClick: PropTypes.func,
    className: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    dropDownVisible: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
  }

  componentDidMount() {
    document.addEventListener('click', this.props.handleDocumentClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.handleDocumentClick)
  }

  handleClick() {
    this.props.changeVisibility(true)
  }

  handleFocus() {
    this.props.changeVisibility(true)
  }

  render() {
    const {
      className,
      onClick, // eslint-disable-line no-unused-vars
      value,
      placeholder,
      ...props
    } = this.props

    return (
      <Field
        data-tid="dropdown-anchor-input"
        onFocus={this.handleFocus}
        className={className}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    )
  }
}
