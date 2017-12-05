import React, { Component } from 'react'
import { SearchBar, Button } from 'react-ui-core/src'
import theme from '../theme/SearchBar.css'

const closeButton = (
  <Button>
    X
  </Button>
)

class Example extends Component {

  constructor(props) {
    super(props)
    this.state = { suggestions: [] }
    this.generateList = this.generateList.bind(this)
  }

  generateList(value) {
    const length = value.length
    const commonWords =
      ['the', 'of', 'and', 'a', 'to', 'in', 'is', 'you', 'that', 'it',
        'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'I', 'at', 'be', 'this',
        'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what', 'all', 'were',
        'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an', 'each', 'which', 'she', 'do',
        'how', 'their', 'if', 'will', 'up', 'other', 'about', 'out', 'many', 'then', 'them',
        'these', 'so', 'some', 'her', 'would', 'make', 'like', 'him', 'into', 'time', 'has',
        'look', 'two', 'more', 'write', 'go', 'see', 'number', 'no', 'way', 'could', 'people',
        'my', 'than', 'first', 'water', 'been', 'call', 'who', 'oil', 'its', 'now', 'find', 'long',
        'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part', 'test']

    if (length < 1) {
      this.setState({ suggestions: [] })
    } else {
      const suggestions = commonWords.filter(word =>
        word.slice(0, length) === value
      )
      this.setState({ suggestions })
    }
  }

  render() {
    return (
      <SearchBar
        theme={theme}
        resetButton={closeButton}
        placeholder="Search"
        onInput={value => this.generateList(value)}
        onAfterReset={() => console.log('after reset')}
        onSubmit={() => console.log('On submit')}
        suggestions={this.state.suggestions}
      />
    )
  }
}

export const DefaultSearchBar = (
  <SearchBar
    theme={theme}
    placeholder="Search"
    onSubmit={value => { alert(`submitting ${value}`) }}
    value="test"
    suggestions={['apple', 'banana', 'carrot']}
  />
)

export const SearchBarSubmitButton = (
  <SearchBar
    theme={theme}
    placeholder="Search"
    submitButton={<span role="img" aria-label="search" >&#128270;</span>}
    onSubmit={value => { alert(`submitting ${value}`) }}
    value="test"
    suggestions={['apple', 'banana', 'carrot']}
  />
)

export const SearchBarResetButton = (
  [<SearchBar
    theme={theme}
    placeholder="Search"
    resetButton={<button>X</button>}
    suggestions={['Option 1', 'Option 2', 'Option 3']}
  />,
  ]
)

export const SearchBarWithHTMLButton = (
  <SearchBar
    theme={theme}
    placeholder="Search"
    onSubmit={value => { alert(`submitting ${value}`) }}
    value="test"
    suggestions={[<h1>HELLO</h1>, 'a', 'c', 'd']}
    suggestionValueSelector={value => {
      if (typeof value === 'object') {
        return value.props.children
      }
      return value
    }}
  />
)

export const SearchBarWithDynamicResults = (
  <Example />
)
