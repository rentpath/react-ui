import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { Modal } from 'react-ui-core/src'
import { Button } from 'react-ui-core/src/Button'
import { ModalTheme, ButtonTheme } from '../theme'

const CloseButton = () => (
  <Button
    onClick={action('CloseButton closed the modal!')}
    theme={ButtonTheme}
  >
    Close Button
  </Button>
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

export const ModalPopup = () => {
  const isOpen = boolean('isOpen', true)
  return (
    <Modal
      isOpen={isOpen}
      theme={ModalTheme}
    >
      <div>Modal body</div>
    </Modal>
  )
}
