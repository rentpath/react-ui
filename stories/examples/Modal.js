import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { Modal } from 'react-ui-core/src'
import { Button } from 'react-ui-core/src/Button'
import { ModalTheme as theme } from '../theme'

const CloseButton = props => (
  <Button {...props}>
    X
  </Button>
)

export const DefaultModal = (
  <Modal
    theme={theme}
    isOpen
  >
    <div>some modal body stuff</div>
  </Modal>
)

export const CloseModal = (
  <Modal
    theme={theme}
    isOpen
    onClose={action('CloseButton closed the modal!')}
    CloseButton={CloseButton}
  >
    <div>some modal body stuff</div>
  </Modal>
)

export const ModalNoOverlayClose = (
  <Modal
    isOpen
    closeOnOverlayClick={false}
    CloseButton={CloseButton}
    onClose={action('CloseButton closed the modal!')}
    theme={theme}
  >
    <div>some modal body stuff</div>
  </Modal>
)

export const ModalPopup = () => {
  const isOpen = boolean('isOpen', false)
  return [
    <div className={theme.ClickText}>
      Activate through knobs to open
    </div>,
    <Modal
      isOpen={isOpen}
      theme={theme}
    >
      <div>Modal body</div>
    </Modal>,
  ]
}
