import React from 'react'
import { action } from '@storybook/addon-actions'
import { FilterCard } from 'react-ui-ag/src'

export const DefaultFilterCard = (
  <FilterCard
    title="BEST FILTER EVER!!"
    description="This filter will change everything forever"
  >
    <div>Filters go here</div>
  </FilterCard>
)

export const OneButtonFilterCard = (
  <FilterCard
    className="FilterCard-WithButtons"
    title="BEST FILTER EVER!!"
    description="This filter will change everything forever"
    handleApplyClick={() => action('click')('apply')}
  >
    <div>Filters go here</div>
  </FilterCard>
)

export const TwoButtonFilterCard = (
  <FilterCard
    className="FilterCard-WithButtons"
    title="BEST FILTER EVER!!"
    description="This filter will change everything forever"
    handleApplyClick={() => action('click')('apply')}
    handleCancelClick={() => action('click')('cancel')}
  >
    <div>Filters go here</div>
  </FilterCard>
)
