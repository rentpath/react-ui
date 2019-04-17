import React from 'react'
import { text, select, boolean } from '@storybook/addon-knobs'
import { Highlighter } from 'react-ui-core/src'

export const DefaultHighlighter = (
  <Highlighter pattern="test">
    this is a test to see if this works, test seems to have passed the test
  </Highlighter>
)

export const HighlighterWithIndex = () => {
  const options = {
    all: 0,
    first: 1,
    second: 2,
    third: 3,
  }
  const indexHighlighted = parseInt(select('index to highlight', options, '1'), 10)
  const ignoreCase = boolean('ignoreCase', false)
  const pattern = text('pattern', 'two')
  return (
    <Highlighter
      indexHighlighted={indexHighlighted}
      pattern={pattern}
      ignoreCase={ignoreCase}
    >
      one two three, one TWO three, one tWo three
    </Highlighter>
  )
}
