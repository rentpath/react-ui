import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import { action } from '@storybook/addon-actions'
import { RadioGroupDropdown, DropdownAnchorText } from 'react-ui-ag/src'
import StorybookTheme from '../../theme/Storybook.css'

const DesktopBedroomDropdownComponent = ({ theme }) => (
  <RadioGroupDropdown
    className={classnames(
      theme.SearchFilter,
      StorybookTheme['Story_Card-left']
    )}
    anchorText={<DropdownAnchorText defaultText="Bed" />}
    fields={[
      { anchorLabel: '', label: 'Any', value: '' },
      { anchorLabel: 'Studio', label: 'Studio', value: '0' },
      { anchorLabel: '1 Bed', label: '1', value: '1' },
      { anchorLabel: '2 Beds', label: '2', value: '2' },
      { anchorLabel: '3 Beds', label: '3', value: '3' },
      { anchorLabel: '4+ Beds', label: '4+', value: '4' },
    ]}
    applyButton={{
      onClick: value => action('click')(`apply(${value})`),
    }}
    cancelButton={{
      onClick: () => action('click')('cancel'),
    }}
  />
)
DesktopBedroomDropdownComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedDesktopBedroomDropdown = themed(['SearchFilter'])(DesktopBedroomDropdownComponent)
const DesktopBedroomDropdown = <ThemedDesktopBedroomDropdown />

const DesktopBathroomDropdownComponent = ({ theme }) => (
  <RadioGroupDropdown
    className={classnames(theme.SearchFilter, theme.BathroomFilterCard, StorybookTheme['Story_Card-left'])}
    anchorText={<DropdownAnchorText defaultText="Bath" />}
    fields={[
      { anchorLabel: '1+ Baths', label: '1+', value: '1' },
      { anchorLabel: '2+ Baths', label: '2+', value: '2' },
      { anchorLabel: '3+ Baths', label: '3+', value: '3' },
    ]}
    applyButton={{
      onClick: value => action('click')(`apply(${value})`),
    }}
    cancelButton={{
      onClick: () => action('click')('cancel'),
    }}
  />
)
DesktopBathroomDropdownComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedDesktopBathroomDropdown = themed(['SearchFilter', 'BathroomFilterCard'])(DesktopBathroomDropdownComponent)
const DesktopBathroomDropdown = <ThemedDesktopBathroomDropdown />

const DesktopPetDropdownComponent = ({ theme }) => (
  <RadioGroupDropdown
    className={classnames(theme.SearchFilter, theme.PetFilterCard, StorybookTheme['Story_Card-left'])}
    anchorText={<DropdownAnchorText defaultText="Pets" />}
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
DesktopPetDropdownComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedDesktopPetDropdown = themed(['SearchFilter', 'PetFilterCard'])(DesktopPetDropdownComponent)
const DesktopPetDropdown = <ThemedDesktopPetDropdown />

export {
  DesktopBedroomDropdown,
  DesktopBathroomDropdown,
  DesktopPetDropdown,
}
