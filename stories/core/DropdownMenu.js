import React from 'react'
import { DropDownMenu } from 'react-ui-core/src'

export const DefaultDropDownMenu = (
  <DropDownMenu
    options={['Option1', 'Option2', 'Option3']}
  />
)

export const DropDownMenuOnSelection = (
  <DropDownMenu
    options={['Option1', 'Option2', 'Option3']}
    onSelection={value => {
      alert(value)
    }}
  />
)

export const DropDownMenuOnSelectionHover = (
  <DropDownMenu
    options={['Option1', 'Option2', 'Option3']}
    onSelectionHover={value => {
      alert(value)
    }}
  />
)
