import React from 'react'
import { action } from '@storybook/addon-actions'
import { DropdownMenu } from 'react-ui-core/src'

export const DefaultDropdownMenu = (
  <DropdownMenu
    options={['Option1', 'Option2', 'Option3']}
  />
)

export const DropdownMenuOnSelection = (
  <DropdownMenu
    options={['Option1', 'Option2', 'Option3']}
    onSelection={action('selected')}
  />
)

export const DropdownMenuOnSelectionHover = (
  <DropdownMenu
    options={['Option1', 'Option2', 'Option3']}
    handleSelectionHover={action('hovering')}
  />
)
