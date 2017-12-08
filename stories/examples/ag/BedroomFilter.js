import React from 'react'
import { ThemeProvider, compose } from 'react-themed'
import { BedroomFilter } from 'react-ui-ag/src'
import {
  CardTheme,
  BedroomFilterTheme,
  RadioButtonTheme,
} from '../../theme'

const theme = compose({},
  CardTheme,
  BedroomFilterTheme,
  RadioButtonTheme,
)

export const DefaultBedroomFilter = (
  <ThemeProvider theme={theme}>
    <BedroomFilter />
  </ThemeProvider>
)
