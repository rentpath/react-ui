import React from 'react'
import { ThemeProvider, compose } from 'react-themed'
import { Title } from 'react-ui-core/src/Title'
import { TitleTheme } from '../theme'

const theme = compose(
  {},
  TitleTheme,
)

export const DefaultTitle = (
  <ThemeProvider theme={theme}>
    <Title
      nodeType="h2"
    >
      Default Title
    </Title>
  </ThemeProvider>
)

export const EmbeddedLinkWithinTitle = (
  <ThemeProvider theme={theme}>
    <Title
      nodeType="h3"
      className={theme['Title-Yuge']}
    >
      <a href="/">Hello! <br /> Click this text to go back home</a>
    </Title>
  </ThemeProvider>
)
