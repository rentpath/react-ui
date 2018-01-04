import React from 'react'
import LeadModal from '../LeadModal'
import coreStory from '../.storybook/coreStory'

coreStory('Lead', module)
  .add('LeadForm', () => (
    <LeadForm />
  ))
  .add('LeadModal', () => (
    <LeadModal
      isOpen
    />
  ))
