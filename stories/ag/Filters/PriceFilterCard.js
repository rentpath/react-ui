import React from 'react'
import PropTypes from 'prop-types'
import { action } from '@storybook/addon-actions'
import themed from 'react-themed'
import { PriceFilterCard } from 'react-ui-ag/src'
import { RangeSlider } from 'react-ui-core/src'

const rangeSliderProps = {
  formatLabel: val => `$${val}`,
  value: 500,
  minValue: 200,
  maxValue: 5000,
  step: 100,
}

const Slider = props => <RangeSlider {...rangeSliderProps}{...props} />

const InlinePriceFilterCardComponent = ({ theme }) => (
  <PriceFilterCard
    className={theme.InlineCard}
    title="Filter by price"
    description="Set a maximum price for your search."
    applyButton={{ onClick: value => { action('onChangeComplete')(`Applied($${value})`) } }}
    priceSlider={Slider}
    onChange={price => action('Inline Price Change')(`$${price}`)}
  />
)

InlinePriceFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}

const ThemedInlinePriceFilterCard = themed(['InlineCard'])(InlinePriceFilterCardComponent)
const InlinePriceFilterCard = <ThemedInlinePriceFilterCard />

const DesktopPriceFilterCardComponent = ({ theme }) => (
  <PriceFilterCard
    className={theme.SearchFilter}
    applyButton={{ onClick: value => { action('onChangeComplete')(`applied($${(value || {}).min} - $${(value || {}).max})`) } }}
    cancelButton={{ onClick: () => { action('onChangeComplete')('canceled price') } }}
    priceSlider={{
      formatLabel: val => `$${val}`,
      value: { min: 500, max: 5000 },
      minValue: 0,
      maxValue: 15000,
      step: 100,
    }}
    onChange={price => action('Desktop Price Change')(`$${price.min} - $${price.max}`)}
  />
)

DesktopPriceFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}

const ThemedDesktopPriceFilterCardComponent = themed(['SearchFilter'])(DesktopPriceFilterCardComponent)
const DesktopPriceFilterCard = <ThemedDesktopPriceFilterCardComponent />

export { InlinePriceFilterCard, DesktopPriceFilterCard }
