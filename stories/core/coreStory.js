import React from 'react'
import { storiesOf } from '@storybook/react'
import { Theme } from 'react-themed'
import { CoreTheme } from '../theme'
import { withInfo } from '@storybook/addon-info'

const CoreThemeDecorator = storyFn => (
    <Theme theme={CoreTheme}>
        {storyFn()}
    </Theme>
)

export default (name, mod) => (
  storiesOf('react-ui-core / ' + name, mod)
    .addDecorator((story, context) => withInfo(name)(story)(context))
    .addDecorator(CoreThemeDecorator)
)
