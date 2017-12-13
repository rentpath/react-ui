import React from 'react'
import { LeadForm, LeadModal } from 'react-ui-core/src'
import StoryBookTheme from '../theme/Storybook.css'

export const DefaultLeadForm = (
  <LeadForm
    className={StoryBookTheme['Story-padding']}
  />
)

export const DefaultLeadModal = (
  <LeadModal
    isOpen
  />
)
