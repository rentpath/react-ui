import React, { PureComponent } from 'react'
import { Field } from 'react-ui-core/src'
import PropTypes from 'prop-types'

export default class DropdownInputExample extends PureComponent {
  static propTypes = {
    onSelect: PropTypes.func,
    handleDocumentClick: PropTypes.func,
    visible: PropTypes.bool,
  }

  handleFocus = () => {
    const { onSelect } = this.props

    if (!this.props.visible && onSelect) onSelect()
  }

  render() {
    const {
      visible,
      handleDocumentClick,
      ...props
    } = this.props

    return (
      <Field
        onFocus={this.handleFocus}
        {...props}
        label="Say Hi"
      />
    )
  }
}
