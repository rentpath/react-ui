import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import autobind from 'autobind-decorator'

import { Modal, Button } from '@rentpath/react-ui-core'

@themed(/^MoreOptionsModal/, { pure: true })

export default class MoreOptionsModal extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool,
    theme: PropTypes.object,
    moreOptionsForm: PropTypes.node,
    total: PropTypes.number,
    filterTotal: PropTypes.number,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    restoreFilters: PropTypes.func,
    clearFilters: PropTypes.func,
    applyFilters: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    total: 0,
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpen: true,
    }
  }

  @autobind
  getShowPropertyButton() {
    const { filterTotal, total } = this.props

    let count = (filterTotal !== null) ? filterTotal : total
    let propertyCount = 'Show 0 Properties'

    if (count > 1) {
      count = this.formatNumberWithCommas(count)
      propertyCount = `Show ${count} Properties`
    } else if (count === 1) {
      propertyCount = 'Show 1 Property'
    }

    return propertyCount
  }

  @autobind
  getPropertyCount() {
    const { filterTotal, total } = this.props
    let count = (filterTotal !== null) ? filterTotal : total
    let propertyCount = '0 Properties Found'

    if (count > 1) {
      count = this.formatNumberWithCommas(count)
      propertyCount = `${count} Properties Found`
    } else if (count === 1) {
      propertyCount = '1 Property Found'
    }

    return propertyCount
  }
  @autobind
  handleOutsideMouseDown(e) {
    // If a click starts outside the modal, set the outside flag
    // so when the click event occurs on the overlay,
    // it will close the modal.
    this.clickedOutside = (e.target === this.overlay)
  }

  @autobind
  handleOutsideMouseUp(e) {
    // If a click ends inside the modal, unset the outside flag
    // so when the click event bubbles up to the overlay,
    // it will not close the modal.
    if (e.target !== this.overlay) {
      this.clickedOutside = false
    }
  }

  @autobind
  handleOutsideClick(e) {
    const { onClose, applyFilters } = this.props

    // Verify the click started on the overlay.
    // This will handle the case of the user starting a click inside the modal,
    // then dragging and releasing the button outside the modal.
    if (!this.clickedOutside) {
      return
    }

    // Clear the flag so it will not affect the next click
    this.clickedOutside = null

    // Verify the click ended on the overlay and did not bubble up
    // from the modal
    if (e.target !== this.overlay) {
      return
    }

    if (onClose) {
      onClose()
      if (applyFilters) {
        applyFilters()
      }
    }
  }

  @autobind
  handleSubmit(e) {
    const {
      onSubmit,
      onClose,
    } = this.props

    if (!onSubmit) {
      e.preventDefault()
    } else {
      onSubmit()
    }

    if (onClose) {
      onClose()
    }
  }

  @autobind
  handleCancel() {
    const {
      onClose,
      restoreFilters,
    } = this.props
    restoreFilters()
    onClose()
  }

  formatNumberWithCommas(number) {
    return String(number).replace(/(.)(?=(\d{3})+$)/g, '$1,')
  }

  renderHeader() {
    const {
      onClose,
      theme,
    } = this.props

    const propertyCount = this.getPropertyCount()

    return (
      <div className={theme.MoreOptionsModal_Header}>
        <h2
          className={theme.MoreOptionsModal_PropertyCount}
          data-tid="more-filters-props-count"
        >
          {propertyCount}
        </h2>
        <div
          role="button"
          tabIndex={0}
          className={theme.MoreOptionsModal_CloseButton}
          onClick={onClose}
          data-tid="more-filters-close"
          data-tag_item="close"
        >
          Close
        </div>
      </div>
    )
  }

  renderFooter() {
    const {
      theme,
      clearFilters,
    } = this.props

    const showPropertyButton = this.getShowPropertyButton()

    return (
      <div className={theme.MoreOptionsModal_Footer}>
        <Button
          className={theme.MoreOptionsModal_ResetAll}
          onClick={clearFilters}
        >
          <span
            data-tid="more-filters-reset-all"
            data-tag_item="reset_all"
          >
            Reset All
          </span>
        </Button>
        <div className={theme.MoreOptionsModal_FooterButtons}>
          <Button
            className={theme.MoreOptionsModal_Cancel}
            onClick={this.handleCancel}
          >
            <span
              data-tid="more-filters-cancel"
              data-tag_item="close"
            >
              Cancel
            </span>
          </Button>
          <Button
            className={theme.MoreOptionsModal_ShowProps}
            onClick={this.handleSubmit}
            data-tid="more-filters-submit-link"
          >
            <span
              data-tid="more-filters-show-props"
              data-tag_item="show_properties_button"
            >
              {showPropertyButton}
            </span>
          </Button>
        </div>
      </div>
    )
  }

  render() {
    const {
      theme,
      moreOptionsForm,
      onClose,
      isOpen,
    } = this.props

    return (
      <div
        role="presentation"
        className={theme.MoreOptionsModalOverlay}
        ref={node => { this.overlay = node }}
        onMouseDown={this.handleOutsideMouseDown}
        onMouseUp={this.handleOutsideMouseUp}
        onClick={this.handleOutsideClick}
        key="overlay"
      >
        <Modal
          className={theme.MoreOptionsModal}
          key="modal"
          data-tag_section="more_filters"
          isOpen={isOpen}
          onClose={onClose}
          data-tid="more-filters-modal"
        >
          <div className={theme.MoreOptionsModal_InnerContainer}>
            <div className={theme.MoreOptionsModal_FiltersContainer}>
              {this.renderHeader()}
              <div className={theme.MoreOptionsModal_Content}>
                {moreOptionsForm}
              </div>
              {this.renderFooter()}
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
