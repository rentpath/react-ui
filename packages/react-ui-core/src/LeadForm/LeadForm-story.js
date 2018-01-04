import React from 'react'
import LeadForm from './LeadForm'
import coreStory from '../.storybook/coreStory'

coreStory('LeadForm', module)
  .add('LeadForm', () => (
    <LeadForm />
  ))
