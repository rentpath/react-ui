import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Theme } from 'react-themed'
import { RentTheme } from '../theme'
import { DefaultLeadModal } from './Lead'

const RentThemeDecorator = storyFn => (
  <Theme theme={RentTheme}>
    {storyFn()}
  </Theme>
)

storiesOf('react-ui-rent / LeadModal', module)
  .addDecorator((story, context) => withInfo('Rent Lead')(story)(context))
  .addDecorator(RentThemeDecorator)
  .add('LeadModal', () => DefaultLeadModal)

