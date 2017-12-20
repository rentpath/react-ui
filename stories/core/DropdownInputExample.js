import React, { PureComponent } from 'react'
import { Field } from 'react-ui-core/src'
import PropTypes from 'prop-types'

export default class DropdownInputExample extends PureComponent {
  static propTypes = {
    toggleVisibilty: PropTypes.func,
    handleDocumentClick: PropTypes.func,
    visible: PropTypes.bool,
  }

  componentDidMount() {
    document.addEventListener('click', this.props.handleDocumentClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.handleDocumentClick)
  }

  handleFocus = () => {
    const { toggleVisibilty } = this.props

    if (!this.props.visible && toggleVisibilty) toggleVisibilty()
  }

  render() {
    return (
      <Field
        onFocus={this.handleFocus}
        label="Say Hi"
      />
    )
  }
}
