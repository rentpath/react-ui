import React from 'react'
import { SearchBar, Button } from 'react-ui-core/src'
import theme from '../theme/SearchBar.css'

const closeButton = (
  <Button>
    X
  </Button>
)

export const DefaultSearchBar = (
  <SearchBar
    theme={theme}
    resetButton={closeButton}
    placeholder="Search"
    value="test"
    onInput={value => console.log(value)}
    onAfterReset={() => console.log('after reset')}
    onSubmit={() => console.log('On submit')}
    suggestions={['a', 'b', 'c', 'd']}
  />
)

export const SearchBarWithHTMLButton = (
  <SearchBar
    theme={theme}
    placeholder="Search"
    resetButton={<button>X</button>}
    value="test"
    suggestions={[<h1>HELLO</h1>, 'a', 'c', 'd']}
  />
)
