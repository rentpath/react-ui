import React from 'react'
import { MoreOptionsModal } from 'react-ui-ag/src'

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
    moreOptionsForm: filters,
    isOpen: true,
    total: 1500,
    filterTotal: 800,
  }

  return (
    <MoreOptionsModal
      {...moreOptionsModalProps}
    />
  )
}
