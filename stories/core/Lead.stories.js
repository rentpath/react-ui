import React from 'react'
import { LeadForm, LeadModal } from 'react-ui-core/src'
import StoryBookTheme from '../theme/Storybook.css'
import coreStory from './coreStory'

coreStory('Lead', module)
  .add('LeadForm', () => (
    <LeadForm
      className={StoryBookTheme['Story-padding']}
    />
  ))
  .add('LeadModal', () => (
    <LeadModal
      isOpen
    />
  ))
