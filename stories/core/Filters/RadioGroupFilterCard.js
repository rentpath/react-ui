import React from 'react'
import PropTypes from 'prop-types'
import themed from '@rentpath/react-themed'
import classnames from 'classnames'
import { action } from '@storybook/addon-actions'
import { RadioGroupFilterCard } from 'react-ui-core/src'

const DesktopBedroomFilterCardComponent = ({ theme }) => (
  <RadioGroupFilterCard
    className={theme.SearchFilter}
    title=""
    description=""
    fields={[
      { label: 'Any', value: '' },
      { label: 'Studio', value: '0' },
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4+', value: '4' },
    ]}
    applyButton={{
      onClick: value => action('click')(`apply(${value})`),
    }}
    cancelButton={{
      onClick: () => action('click')('cancel'),
    }}
  />
)
DesktopBedroomFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedDesktopBedroomFilterCard = themed(['SearchFilter'])(DesktopBedroomFilterCardComponent)
const DesktopBedroomFilterCard = <ThemedDesktopBedroomFilterCard />

const InlineBedroomFilterCardComponent = ({ theme }) => (
  <RadioGroupFilterCard
    title="Filter by bedrooms"
    description="View properties with a certain amount of bedrooms."
    className={theme.InlineCard}
    fields={[
      { label: 'Studio', value: '0' },
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3+', value: '3+' },
    ]}
    applyButton={{
      onClick: value => action('click')(`apply(${value})`),
    }}
  />
)
InlineBedroomFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedInlineBedroomFilterCard = themed(['InlineCard'])(InlineBedroomFilterCardComponent)
const InlineBedroomFilterCard = <ThemedInlineBedroomFilterCard />

const InlineBathroomFilterCardComponent = ({ theme }) => (
  <RadioGroupFilterCard
    className={classnames(theme.InlineCard, theme.BathroomFilterCard)}
    title="Filter by bathrooms"
    description="View properties with desired number of bathrooms."
    fields={[
      { label: '1+', value: '1' },
      { label: '2+', value: '2' },
      { label: '3+', value: '3' },
    ]}
    applyButton={{ onClick: value => action('click')(`applied(${value})`) }}
  />
)
InlineBathroomFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedInlineBathroomFilterCard = themed(['InlineCard', 'BathroomFilterCard'])(InlineBathroomFilterCardComponent)
const InlineBathroomFilterCard = <ThemedInlineBathroomFilterCard />

const DesktopBathroomFilterCardComponent = ({ theme }) => (
  <RadioGroupFilterCard
    className={classnames(theme.SearchFilter, theme.BathroomFilterCard)}
    title=""
    description=""
    fields={[
      { label: '1+', value: '1' },
      { label: '2+', value: '2' },
      { label: '3+', value: '3' },
    ]}
    applyButton={{ onClick: value => action('click')(`applied(${value})`) }}
    cancelButton={{ onClick: () => action('click')('cancelled') }}
  />
)

DesktopBathroomFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedDesktopBathroomFilterCard = themed(['SearchFilter', 'BathroomFilterCard'])(DesktopBathroomFilterCardComponent)
const DesktopBathroomFilterCard = <ThemedDesktopBathroomFilterCard />

const DesktopPetFilterCardComponent = ({ theme }) => (
  <RadioGroupFilterCard
    className={classnames(theme.SearchFilter, theme.PetFilterCard)}
    title=""
    description=""
    fields={[
      { label: 'Dogs', value: 'dogs' },
      { label: 'Cats', value: 'cats' },
      { label: 'Both', value: 'both' },
    ]}
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
const ThemedDesktopPetFilterCard = themed(['SearchFilter', 'PetFilterCard'])(DesktopPetFilterCardComponent)
const DesktopPetFilterCard = <ThemedDesktopPetFilterCard />

const InlinePetFilterCardComponent = ({ theme }) => (
  <RadioGroupFilterCard
    title="Find pet friendly rentals"
    description="See apartments that are pet friendly and find your pets a lovely home."
    className={classnames(theme.InlineCard, theme.PetFilterCard)}
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
const ThemedInlinePetFilterCard = themed(['InlineCard', 'PetFilterCard'])(InlinePetFilterCardComponent)
const InlinePetFilterCard = <ThemedInlinePetFilterCard />

const InlineRatingFilterCardComponent = ({ theme }) => (
  <RadioGroupFilterCard
    title="View 4+ stars units in Atlanta"
    description="Filter and only view properties that have a 4+ star rating from other renters."
    className={classnames(theme.InlineCard, theme.RatingFilterCard)}
    fields={[
      { label: '4+ stars', value: '4', checked: true },
    ]}
    applyButton={{
      onClick: value => action('click')(`apply(${value})`),
      name: 'Apply filter',
    }}
  />
)
InlineRatingFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedInlineRatingFilterCard = themed(['InlineCard', 'RatingFilterCard'])(InlineRatingFilterCardComponent)
const InlineRatingFilterCard = <ThemedInlineRatingFilterCard />

export {
  InlineBedroomFilterCard,
  DesktopBedroomFilterCard,
  InlineBathroomFilterCard,
  DesktopBathroomFilterCard,
  InlinePetFilterCard,
  DesktopPetFilterCard,
  InlineRatingFilterCard,
}
