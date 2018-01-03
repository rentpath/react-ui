import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import RadioGroupFilterCard from './RadioGroupFilterCard'

export default class RadioGroupDropdownFilterCardWrapper extends PureComponent {
  static propTypes = {
    onSelect: PropTypes.func,
    handleValueChange: PropTypes.func,
    applyButton: PropTypes.object,
    cancelButton: PropTypes.object,
  }

  static defaultProps = {
    applyButton: {},
    cancelButton: {},
  }

  handleButtonClick(value, button) {
    const { handleValueChange, onSelect } = this.props

    if (handleValueChange) handleValueChange(value)
    if (onSelect) onSelect()
    if (button.onClick) button.onClick(value)
  }

  @autobind
  handleApplyClick(value) {
    this.handleButtonClick(value, this.props.applyButton)
  }

  @autobind
  handleCancelClick(value) {
    this.handleButtonClick(value, this.props.cancelButton)
  }

  render() {
    const {
      handleValueChange,
      applyButton,
      cancelButton,
      ...safeProps
    } = this.props

    return (
      <RadioGroupFilterCard
        {...safeProps}
        applyButton={{ ...applyButton, onClick: this.handleApplyClick }}
        cancelButton={{ ...cancelButton, onClick: this.handleCancelClick }}
      />
    )
  }
}
