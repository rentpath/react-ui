import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import Button from '../Button'
import Modal from '../Modal'
import StorybookTheme from '../.storybook/theme/Storybook.css'
import coreStory from '../.storybook/coreStory'

const CloseButton = props => (
  <Button {...props}>
    X
  </Button>
)

coreStory('Modal', module)
  .addDecorator(withKnobs)
  .add('Modal', () => (
    <Modal
      isOpen
    >
      <div>some modal body stuff</div>
    </Modal>
  ))
  .add('Modal With Close Button', () => (
    <Modal
      isOpen
      onClose={action('CloseButton closed the modal!')}
      CloseButton={CloseButton}
    >
      <div>some modal body stuff</div>
    </Modal>
  ))
  .add('Modal No Close on Overlay', () => (
    <Modal
      isOpen
      closeOnOverlayClick={false}
      CloseButton={CloseButton}
      onClose={action('CloseButton closed the modal!')}
    >
      <div>some modal body stuff</div>
    </Modal>
  ))
  .add('Modal Open By Click', () => {
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
  })
