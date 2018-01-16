import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'

export default class DropdownFilterCardWrapper extends PureComponent {
  static propTypes = {
    onSelect: PropTypes.func,
    handleValueChange: PropTypes.func,
    applyButton: PropTypes.object,
    cancelButton: PropTypes.object,
    FilterCard: PropTypes.func.isRequired,
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
      FilterCard,
      ...safeProps
    } = this.props

    return (
      <FilterCard
        {...safeProps}
        applyButton={{ ...applyButton, onClick: this.handleApplyClick }}
        cancelButton={{ ...cancelButton, onClick: this.handleCancelClick }}
      />
    )
  }
}
