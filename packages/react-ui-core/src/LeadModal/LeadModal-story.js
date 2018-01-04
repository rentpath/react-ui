import React from 'react'
import LeadModal from '../LeadModal'
import coreStory from '../.storybook/coreStory'

coreStory('LeadModal', module)
  .add('LeadModal', () => (
    <LeadModal
      isOpen
    />
  ))
