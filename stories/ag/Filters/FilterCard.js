import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { action } from '@storybook/addon-actions'
import { FilterCard } from 'react-ui-ag/src'

const DefaultFilterCard = (
  <FilterCard
    title="BEST FILTER EVER!!"
    description="This filter will change everything forever"
  >
    <div>Filters go here</div>
  </FilterCard>
)

const OneButtonFilterCardComponent = ({ theme }) => (
  <FilterCard
    className={theme.WithButtons}
    title="BEST FILTER EVER!!"
    description="This filter will change everything forever"
    onApplyClick={() => action('click')('apply')}
  >
    <div>Filters go here</div>
  </FilterCard>
)
OneButtonFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedOneButtonFilterCard = themed(['WithButtons'])(OneButtonFilterCardComponent)
const OneButtonFilterCard = <ThemedOneButtonFilterCard />

const TwoButtonFilterCardComponent = ({ theme }) => (
  <FilterCard
    className={theme.WithButtons}
    title="BEST FILTER EVER!!"
    description="This filter will change everything forever"
    onApplyClick={() => action('click')('apply')}
    onCancelClick={() => action('click')('cancel')}
  >
    <div>Filters go here</div>
  </FilterCard>
)
TwoButtonFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedTwoButtonFilterCard = themed(['WithButtons'])(TwoButtonFilterCardComponent)
const TwoButtonFilterCard = <ThemedTwoButtonFilterCard />

export { DefaultFilterCard, OneButtonFilterCard, TwoButtonFilterCard }
