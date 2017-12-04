import React from 'react'
import { SearchBar } from 'react-ui-core/src'
import { DefaultButton } from './Button'
import theme from '../theme/SearchBar.css'

export const DefaultSearchBar = (
  <SearchBar
    theme={theme}
    resetButton={DefaultButton}
    placeholder="Search"
    value="test"
    onInput={value => console.log(value)}
    onAfterReset={() => console.log('after reset')}
    onSubmit={() => console.log('On submit')}
    suggestions={[1, 2, 3, 4, 5, 6, 7, 8]}
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
