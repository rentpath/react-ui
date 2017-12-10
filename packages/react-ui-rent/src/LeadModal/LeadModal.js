import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from '@rentpath/react-ui-core'
import { LeadForm } from '../LeadForm'
import ModalCloseButton from './CloseButton'
import Header from './Header'

export default class LeadModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    CloseButton: PropTypes.any,
    onClose: PropTypes.func,
    header: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.func,
    ]),
    subHeader: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    CloseButton: ModalCloseButton,
  }

  render() {
    const {
      isOpen,
      CloseButton,
      onClose,
      header,
      subHeader,
      ...props
    } = this.props

    if (!isOpen) return null

    return (
      <Modal
        isOpen={isOpen}
        CloseButton={CloseButton}
        onClose={onClose}
      >
        <Header
          header={header}
          subHeader={subHeader}
        />
        <LeadForm {...props} />
      </Modal>
    )
  }
}
