import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import { action } from '@storybook/addon-actions'
import { ToggleButton } from 'react-ui-core/src/ToggleButton'
import StoryBookTheme from '../theme/Storybook.css'

export const DefaultToggleButton = (
  <ToggleButton
    className={classnames(
      StoryBookTheme['Story-center'],
    )}
    onClick={value => {
      action('The button is ')(`${(value) ? 'toggled' : 'untoggled'}`)
    }}
  >
    <span className="DefaultToggleButt" >Default Title</span>
  </ToggleButton>
)

export const ToggleSVG = (
  <ToggleButton
    className={StoryBookTheme['Story-center']}
    onClick={value => {
      action('The button is ')(`${(value) ? 'toggled' : 'untoggled'}`)
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg" width="20" height="20"
      viewBox="-2 -2 24 24"
    >
      <path fillRule="evenodd" d="M10 15.765l-6.188 3.247 1.2-6.87L0 7.27l6.918-1.012L10 0l3.082 6.259L20 7.27l-5.012 4.87 1.2 6.87z" />
    </svg>
  </ToggleButton>
)
