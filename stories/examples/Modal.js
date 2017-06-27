import React from 'react'
import { action } from '@storybook/addon-actions'
import { ModalTheme } from '../theme'
import { Modal } from '../../packages/react-ui-modal'

export const DefaultModal = (
  <Modal
    theme={ModalTheme}
    onClick={action('Closed the modal!')}
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
