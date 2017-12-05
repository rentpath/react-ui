import React from 'react'
import { SearchBar, Button } from 'react-ui-core/src'
import theme from '../theme/SearchBar.css'

const commonWords = ["the","of","and","a","to","in","is","you","that","it",
"he","was","for","on","are","as","with","his","they","I","at","be","this",
"have","from","or","one","had","by","word","but","not","what","all","were",
"we","when","your","can","said","there","use","an","each","which","she","do",
"how","their","if","will","up","other","about","out","many","then","them",
"these","so","some","her","would","make","like","him","into","time","has",
"look","two","more","write","go","see","number","no","way","could","people",
"my","than","first","water","been","call","who","oil","its","now","find","long",
"down","day","did","get","come","made","may","part"]

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
    onInput={value => generateList(value)}
    onAfterReset={() => console.log('after reset')}
    onSubmit={() => console.log('On submit')}
    suggestions={['a', 'b', 'c', 'd']}
  />
)

const generateList = value => {

}

export const SearchBarWithHTMLButton = (
  <SearchBar
    theme={theme}
    placeholder="Search"
    resetButton={<button>X</button>}
    value="test"
    suggestions={[<h1>HELLO</h1>, 'a', 'c', 'd']}
  />
)
