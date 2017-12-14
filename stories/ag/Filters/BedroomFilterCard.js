import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { action } from '@storybook/addon-actions'
import { BedroomFilterCard } from 'react-ui-ag/src'

const DesktopBedroomFilterCardComponent = ({ theme }) => (
  <BedroomFilterCard
    className={theme.SearchFilter}
    title=""
    description=""
    onApplyClick={value => action('click')(`apply(${value})`)}
    onCancelClick={() => action('click')('cancel')}
  />
)
DesktopBedroomFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedDesktopBedroomFilterCard = themed(['SearchFilter'])(DesktopBedroomFilterCardComponent)
const DesktopBedroomFilterCard = <ThemedDesktopBedroomFilterCard />

const InlineBedroomFilterCardComponent = ({ theme }) => (
  <BedroomFilterCard
    className={theme.InlineCard}
    fields={[
      { label: 'Studio', value: '0' },
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3+', value: '3+' },
    ]}
    onApplyClick={value => action('click')(`apply(${value})`)}
  />
)
InlineBedroomFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedInlineBedroomFilterCard = themed(['InlineCard'])(InlineBedroomFilterCardComponent)
const InlineBedroomFilterCard = <ThemedInlineBedroomFilterCard />

export { InlineBedroomFilterCard, DesktopBedroomFilterCard }
