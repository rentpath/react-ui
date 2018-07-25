import React from 'react'
import { MoreOptionsModal } from 'react-ui-ag/src'
import { action } from '@storybook/addon-actions'
import moreOptionsModalTheme from '../../theme/ag/large/Modals/MoreOptionsModal.css'

export const scrollableMoreOptionsModal = () => {
  const filters = (<div className={moreOptionsModalTheme.MoreOptionsModal_FiltersContainer} >
    <div style={{ height: '800px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
      <h3>Filters for scrolling</h3>
      <h3>Filters for scrolling</h3>
      <h3>Filters for scrolling</h3>
      <h3>Filters for scrolling</h3>
      <h3>Filters for scrolling</h3>
      <h3>Filters for scrolling</h3>
      <h3>Filters for scrolling</h3>
      <h3>Filters for scrolling</h3>
    </div>
  </div>)

  const moreOptionsModalProps = {
    moreOptionsForm: filters,
    isOpen: true,
    total: 1500,
    filterTotal: 1000,
  }

  return (
    <MoreOptionsModal
      closeModal={action('closeModal')}
      {...moreOptionsModalProps}
    />
  )
}
