import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Theme } from 'react-themed'
import { MapTheme } from '../theme'
import MapPage from './Map'

const MapThemeDecorator = storyFn => (
  <Theme theme={MapTheme}>
    {storyFn()}
  </Theme>
)

storiesOf('react-ui-map / Map', module)
  .addDecorator((story, context) => withInfo('Map')(story)(context))
  .addDecorator(MapThemeDecorator)
  .add('Map', () => MapPage)
