import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from '../Modal'
import { LeadForm } from '../LeadForm'
import ModalCloseButton from './CloseButton'

export default class LeadModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    CloseButton: PropTypes.any,
  }

  static defaultProps = {
    CloseButton: ModalCloseButton,
  }

  render() {
    const {
      isOpen,
      CloseButton,
      ...props
    } = this.props

    if (!isOpen) return null

    return (
      <Modal
        isOpen={isOpen}
        CloseButton={CloseButton}
      >
        <LeadForm {...props} />
      </Modal>
    )
  }
}
