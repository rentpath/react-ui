import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { action } from '@storybook/addon-actions'
import { BathroomFilterCard } from 'react-ui-ag/src'

const InlineBathroomFilterCardComponent = ({ theme }) => (
  <BathroomFilterCard
    title="Filter by bathrooms"
    description="View properties with desired number of bathrooms."
    className={theme.InlineCard}
    applyButton={{ onClick: value => action('click')(`applied(${value})`) }}
  />
)

InlineBathroomFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}

const ThemedInlineBathroomFilterCard = themed(['InlineCard'])(InlineBathroomFilterCardComponent)
const InlineBathroomFilterCard = <ThemedInlineBathroomFilterCard />

const DesktopBathroomFilterCardComponent = ({ theme }) => (
  <BathroomFilterCard
    className={theme.SearchFilter}
    applyButton={{ onClick: value => action('click')(`applied(${value})`) }}
    cancelButton={{ onClick: () => action('click')('cancelled') }}
  />
)

DesktopBathroomFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedDesktopBathroomFilterCard = themed(['SearchFilter'])(DesktopBathroomFilterCardComponent)
const DesktopBathroomFilterCard = <ThemedDesktopBathroomFilterCard />

export { InlineBathroomFilterCard, DesktopBathroomFilterCard }
