import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { Highlighter } from 'react-ui-core/src'

export const DefaultHighlighter = (
  <Highlighter pattern="test">
    this is a test to see if this works, test seems to have passed the test
  </Highlighter>
)

export const HighlighterWithIndex = () => {
  const options = {
    0: 'all',
    1: 'first',
    2: 'second',
    3: 'third',
  }
  const indexHighlighted = parseInt(select('index to highlight', options, '1'), 10)

  const pattern = text('pattern', 'two')
  return (
    <Highlighter
      indexHighlighted={indexHighlighted}
      pattern={pattern}
    >
      one two three, one two three, one two three
    </Highlighter>
  )
}
