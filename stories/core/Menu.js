import React from 'react'
import { action } from '@storybook/addon-actions'
import { Menu } from 'react-ui-core/src'

export const DefaultMenu = (
  <Menu
    options={['Option1', 'Option2', 'Option3']}
  />
)

export const MenuOnSelection = (
  <Menu
    options={['Option1', 'Option2', 'Option3']}
    onSelection={action('selected')}
  />
)

export const MenuOnSelectionHover = (
  <Menu
    options={['Option1', 'Option2', 'Option3']}
    handleSelectionHover={action('hovering')}
  />
)
