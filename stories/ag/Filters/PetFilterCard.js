import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { action } from '@storybook/addon-actions'
import { PetFilterCard } from 'react-ui-ag/src'

const DesktopPetFilterCardComponent = ({ theme }) => (
  <PetFilterCard
    className={theme.SearchFilter}
    title=""
    description=""
    applyButton={{
      onClick: value => action('click')(`apply(${value})`),
    }}
    cancelButton={{
      onClick: () => action('click')('cancel'),
    }}
  />
)
DesktopPetFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedDesktopPetFilterCard = themed(['SearchFilter'])(DesktopPetFilterCardComponent)
const DesktopPetFilterCard = <ThemedDesktopPetFilterCard />

const InlinePetFilterCardComponent = ({ theme }) => (
  <PetFilterCard
    className={theme.InlineCard}
    fields={[
      { label: 'Both', value: 'both', checked: true },
    ]}
    applyButton={{
      onClick: value => action('click')(`apply(${value})`),
      name: 'Apply filter',
    }}
  />
)
InlinePetFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedInlinePetFilterCard = themed(['InlineCard'])(InlinePetFilterCardComponent)
const InlinePetFilterCard = <ThemedInlinePetFilterCard />

export { InlinePetFilterCard, DesktopPetFilterCard }
