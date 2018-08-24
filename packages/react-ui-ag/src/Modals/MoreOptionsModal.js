import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import autobind from 'autobind-decorator'
import classnames from 'classnames'
import { Modal, Button, Text, ApplyButton, CancelButton } from '@rentpath/react-ui-core'

@themed(/^MoreOptionsModal/, { pure: true })

export default class MoreOptionsModal extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool,
    theme: PropTypes.object,
    moreOptionsForm: PropTypes.node,
    total: PropTypes.number,
    filterTotal: PropTypes.number,
    closeModal: PropTypes.func,
    onSubmit: PropTypes.func,
    clearFilters: PropTypes.func,
    restoreFilters: PropTypes.func,
    className: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
    clearFilters: () => {},
    onSubmit: () => {},
    closeModal: () => {},
    restoreFilters: () => {},
  }

  getSubmitButton() {
    const { filterTotal, total } = this.props

    const count = filterTotal || total
    let propertyCount = 'Show 0 Properties'

    if (count > 1) {
      propertyCount = `Show ${count} Properties`
    } else if (count === 1) {
      propertyCount = 'Show 1 Property'
    }

    return propertyCount
  }

  getPropertyCount() {
    const { filterTotal, total } = this.props
    const count = filterTotal || total
    let propertyCount = '0 Properties Found'

    if (count > 1) {
      propertyCount = `${count} Properties Found`
    } else if (count === 1) {
      propertyCount = '1 Property Found'
    }

    return propertyCount
  }

  @autobind
  handleSubmit() {
    const {
      onSubmit,
      closeModal,
    } = this.props

    if (onSubmit) {
      onSubmit()
    }
    closeModal()
  }

  @autobind
  handleCancel() {
    const {
      closeModal,
      restoreFilters,
    } = this.props
    restoreFilters()
    closeModal()
  }

  renderHeader() {
    const {
      theme,
    } = this.props

    const propertyCount = this.getPropertyCount()

    return (
      <div className={theme.MoreOptionsModal_Header} data-tid="more-options-header">
        <Text>
          {propertyCount}
        </Text>
        <Button
          data-tid="more-options-cancel"
          onClick={this.handleCancel}
        >
          Close
        </Button>
      </div>
    )
  }

  renderFooter() {
    const {
      theme,
      clearFilters,
    } = this.props

    const submitButton = this.getSubmitButton()

    return (
      <div data-tid="more-options-footer" className={theme.MoreOptionsModal_Footer}>
        <Button
          className={theme.MoreOptionsModal_ResetAll}
          data-tid="more-options-reset"
          onClick={clearFilters}
        >
          Reset All
        </Button>
        <div className={theme.MoreOptionsModal_FooterButtons}>
          <CancelButton
            className={theme.MoreOptionsModal_Cancel}
            data-tid="more-options-cancel"
            onClick={this.handleCancel}
          >
            Cancel
          </CancelButton>
          <ApplyButton
            className={theme.MoreOptionsModal_Submit}
            data-tid="more-options-submit"
            onClick={this.handleSubmit}
          >
            {submitButton}
          </ApplyButton>
        </div>
      </div>
    )
  }

  render() {
    const {
      className,
      theme,
      moreOptionsForm,
      isOpen,
    } = this.props

    return (
      <Modal
        className={classnames(
          className,
          theme.MoreOptionsModal
        )}
        isOpen={isOpen}
        onClose={this.handleCancel}
      >
        <div data-tid="more-options-modal" className={theme.MoreOptionsModal_InnerContainer}>
          {this.renderHeader()}
          {moreOptionsForm}
          {this.renderFooter()}
        </div>
      </Modal>
    )
  }
}
