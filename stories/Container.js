import React from 'react'
import StorybookTheme from './theme/Storybook.css'

export default ({ story }) => ( // eslint-disable-line react/prop-types
  <div className={StorybookTheme['Story-center']}>
    {story()}
  </div>
)

