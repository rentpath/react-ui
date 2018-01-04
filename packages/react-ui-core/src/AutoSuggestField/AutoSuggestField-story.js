import React, { PureComponent } from 'react'
import { action } from '@storybook/addon-actions'
import AutoSuggestField from '../AutoSuggestField'
import Button from '../Button'
import coreStory from '../.storybook/coreStory'

const ClearButton = props => (<Button {...props}>X</Button>)
const SubmitButton = props => (<Button {...props}>Submit</Button>)

class Example extends PureComponent {

  constructor(props) {
    super(props)
    this.state = { suggestions: [] }
    this.generateList = this.generateList.bind(this)
  }

  generateList(value) {
    const length = value.length
    const commonWords =
      ['the', 'of', 'and', 'a', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was',
        'for', 'on', 'are', 'as', 'with', 'his', 'they', 'I', 'at', 'be', 'this',
        'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what',
        'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an',
        'each', 'which', 'she', 'do', 'how', 'their', 'if', 'will', 'up', 'other',
        'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her', 'would',
        'make', 'like', 'him', 'into', 'time', 'has', 'look', 'two', 'more', 'write',
        'go', 'see', 'number', 'no', 'way', 'could', 'people', 'my', 'than',
        'first', 'water', 'been', 'call', 'who', 'oil', 'its', 'now', 'find', 'long',
        'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part', 'test']

    if (length < 1) {
      this.setState({ suggestions: [], value })
    } else {
      const suggestions = commonWords.filter(word =>
        word.slice(0, length) === value
      )
      this.setState({ suggestions, value })
    }
  }

  render() {
    return (
      <AutoSuggestField
        onInput={value => this.generateList(value)}
        onAfterClear={action('after reset')}
        onSubmit={action('On submit')}
        suggestions={this.state.suggestions}
        anchorField={{ placeholder: 'type a common letter or two...' }}
        highlight
      />
    )
  }
}

coreStory('AutoSuggest Field', module)
  .add('Field and Submit Button', () => (
    <AutoSuggestField
      suggestions={['Option 1', 'Option 2', 'Option 3']}
      anchorField={{ placeholder: 'enter a choice...' }}
      submitButton={SubmitButton}
      onSubmit={action('On submit')}
      submitOnSelection={false}
    />
  ))
  .add('Field and Clear Button', () => (
    <AutoSuggestField
      suggestions={['Option A', 'Option B', 'Option C']}
      clearButton={ClearButton}
      onSubmit={action('On submit')}
      onSelection={action('On selection')}
      anchorField={{ placeholder: 'choose something...' }}
    />
  ))
  .add('Dynamic Results with highlighted suggestions', () => (
    <Example />
  ))
