import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { Modal } from 'react-ui-core/src'
import { Button } from 'react-ui-core/src/Button'
import StorybookTheme from '../theme/Storybook.css'

const CloseButton = props => (
  <Button {...props}>
    X
  </Button>
)

export const DefaultModal = (
  <Modal
    isOpen
  >
    <div>some modal body stuff</div>
  </Modal>
)

export const CloseModal = (
  <Modal
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
  >
    <div>some modal body stuff</div>
  </Modal>
)

export const ModalPopup = () => {
  const isOpen = boolean('isOpen', false)
  return [
    <div
      className={StorybookTheme.Story_ModalClickText}
      key="activate-modal"
    >
      Activate through knobs to open
    </div>,
    <Modal
      isOpen={isOpen}
      key="modal"
    >
      <div>{"I'm open! Woohoo!"}</div>
    </Modal>,
  ]
}
