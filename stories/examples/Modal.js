import React from 'react'
import { action } from '@storybook/addon-actions'
import { ModalTheme } from '../theme'
import { Modal, ModalBody, Overlay } from 'react-ui-core/src'

const CloseButton = () => (
  <div onClick={action('CloseButton closed the modal!')}>
    Close Button
  </div>
)

export const DefaultModal = (
  <Modal
    theme={ModalTheme}
    onClick={action('Overlay closed the modal!')}
    CloseButton={CloseButton}
  >
    <div>some modal body stuff</div>
  </Modal>
)

export const ModalNoOverlayClose = (
  <Modal
    closeOnOverlayClick={false}
    theme={ModalTheme}
  >
    <div>some modal body stuff</div>
  </Modal>
)
