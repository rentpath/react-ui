import React from 'react'
import { EmailModal } from 'react-ui-ag/src'
import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export const OptionalEmailModal = () => (
  <EmailModal
    isOpen={boolean('isOpen', true)}
    CloseButton={{
      children: 'X',
    }}
    header={[
      <h3 key="header">Let us help with your search</h3>,
      <div key="text">Receive updates on price and availability of this property.</div>,
    ]}
    footer={
      <a role="presentation" onClick={() => action('click')('No thanks')}>
        No thanks, take me to the property page.
      </a>
    }
    label={{
      children: <div>Enter your email address <span>*</span></div>,
    }}
    onSubmit={(event, fields) => {
      if (/\w+@(\w+\.?)+/.test(fields.email)) {
        action('submit')(`good email: ${fields.email}`)
      } else {
        action('submit')(`bad email: ${fields.email}`)
      }
    }}
    error={text('error')}
    onClose={action('onClose')}
    email={text('email')}
  />
)

export const MandatoryEmailModal = () => (
  <EmailModal
    isOpen={boolean('isOpen', true)}
    CloseButton={{
      children: 'X',
    }}
    header={[
      <h3 key="header">Let us help with your search</h3>,
      <div key="text">Receive updates on price and availability of this property.</div>,
    ]}
    label={{
      children: <div>Enter your email address <span>*</span></div>,
    }}
    onSubmit={(event, fields) => {
      if (/\w+@(\w+\.?)+/.test(fields.email)) {
        action('submit')(`good email: ${fields.email}`)
      } else {
        action('submit')(`bad email: ${fields.email}`)
      }
    }}
    error={text('error', undefined)}
    onClose={action('onClose')}
    email={text('email')}
  />
)
