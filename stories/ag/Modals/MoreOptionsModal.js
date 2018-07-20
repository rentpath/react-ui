import React from 'react'
import { MoreOptionsModal } from 'react-ui-ag/src'
import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export const scrollableMoreOptionsModal = () => {
  const filters = (<div style={{height: '800px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
    <h3>Filters for scrolling</h3>
    <h3>Filters for scrolling</h3>
    <h3>Filters for scrolling</h3>
    <h3>Filters for scrolling</h3>
    <h3>Filters for scrolling</h3>
    <h3>Filters for scrolling</h3>
    <h3>Filters for scrolling</h3>
    <h3>Filters for scrolling</h3>
  </div>)

  const moreOptionsModalProps = {
    header: 'X Properties Found',
    showButtonProps: {
      text: 'Show X Properties',
    },
    filters,
  }

  return (
    <MoreOptionsModal
      {...moreOptionsModalProps}
    />

  )
}
