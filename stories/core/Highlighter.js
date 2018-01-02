import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { Highlighter } from 'react-ui-core/src'
import StoryBookTheme from '../theme/Storybook.css'

export const DefaultHighlighter = (
  <div className={StoryBookTheme['Story-padding']}>
    <Highlighter pattern="test">
      this is a test to see if this works, test seems to have passed the test
    </Highlighter>
  </div>
)

export const HighlighterWithIndex = () => {
  /* eslint-disable quote-props */
  const options = {
    '0': 'all',
    '1': 'first',
    '2': 'second',
    '3': 'third',
  }
  /* eslint-enable quote-props */
  const indexHighlighted = parseInt(select('index to highlight', options, '1'), 10)

  const pattern = text('pattern', 'two')
  return (
    <div className={StoryBookTheme['Story-padding']}>
      <Highlighter
        indexHighlighted={indexHighlighted}
        pattern={pattern}
      >
        one two three, one two three, one two three
      </Highlighter>
    </div>
  )
}
