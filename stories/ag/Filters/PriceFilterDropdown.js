import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import { action } from '@storybook/addon-actions'
import { PriceFilterDropdown, DropdownAnchorText } from 'react-ui-ag/src'

const DesktopPriceFilterDropdownComponent = ({ theme }) => (
  <PriceFilterDropdown
    className={classnames(theme.SearchFilter, theme.PriceFilterCard)}
    anchorText={<DropdownAnchorText defaultText="Price" />}
    priceSlider={{
      formatLabel: val => `$${val}`,
      value: { min: 500, max: 5000 },
      minValue: 0,
      maxValue: 15000,
      step: 100,
    }}
    applyButton={{ onClick: value => { action('onChangeComplete')(`applied($${(value || {}).min} - $${(value || {}).max})`) } }}
    cancelButton={{ onClick: () => { action('onChangeComplete')('canceled price') } }}
    onChange={price => action('Desktop Price Change')(`$${price.min} - $${price.max}`)}
  />
)
DesktopPriceFilterDropdownComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedDesktopPriceFilterDropdown = themed(['SearchFilter', 'PriceFilterCard'])(DesktopPriceFilterDropdownComponent)
const DesktopPriceFilterDropdown = <ThemedDesktopPriceFilterDropdown />

export { DesktopPriceFilterDropdown }
