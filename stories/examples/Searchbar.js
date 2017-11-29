import React from 'react'
import { SearchBar } from 'react-ui-core/src'
import { DefaultButton } from './Button'
import theme from '../theme/Form.css'

export const DefaultSearchBar = (
  <SearchBar
    theme={theme}
    resetButton={DefaultButton}
    placeholder="Search"
    value="test"
    onInput={value => console.log(value)}
    onAfterReset={() => console.log('after reset')}
  />
)

export const SearchBarWithHTMLButton = (
  <SearchBar
    theme={theme}
    placeholder="Search"
    resetButton={<button>click me</button>}
    value="test"
  />
)
