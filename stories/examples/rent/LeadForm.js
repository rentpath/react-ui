import React from 'react'
import { ThemeProvider, compose } from 'react-themed'
import { LeadModal } from 'react-ui-rent/src'
import {
  ModalTheme,
  LeadTheme,
} from '../../theme'

const theme = compose({},
  ModalTheme,
  LeadTheme,
)

export const DefaultLeadModal = (
  <ThemeProvider theme={theme}>
    <LeadModal
      isOpen
    />
  </ThemeProvider>
)

