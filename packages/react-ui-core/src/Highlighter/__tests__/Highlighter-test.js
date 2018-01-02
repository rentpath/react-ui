import React from 'react'
import { mount } from 'enzyme'
import ThemedHighlighter from '../Highlighter'

const Highlighter = ThemedHighlighter.WrappedComponent

describe('Highlighter', () => {
  it('surounds pattern text with span and classname', () => {
    const wrapper = mount(
      <Highlighter pattern="test">
        This is a test sentence for a test
      </Highlighter>
    )

    wrapper.setProps({ pattern: 'test' })

    const highlighterMatch = wrapper.find('[data-tid="highlighter-match-1"]')
    expect(highlighterMatch.length).toEqual(1)
    const match = highlighterMatch.at(0)
    expect(match.text()).toBe('test')

    const highlighterMatch2 = wrapper.find('[data-tid="highlighter-match-2"]')
    expect(highlighterMatch2.length).toEqual(1)
    const match2 = highlighterMatch2.at(0)
    expect(match2.text()).toBe('test')

    wrapper.setProps({ pattern: 'test2' })
    expect(wrapper.find('[data-tid="highlighter-match-1"]')).toHaveLength(0)
  })

  it('surounds the nth pattern matched text with span and classname', () => {
    const wrapper = mount(
      <Highlighter pattern="test" indexHighlighted={2}>
        This is a test sentence for a test
      </Highlighter>
    )

    wrapper.setProps({ pattern: 'test' })
    expect(wrapper.find('[data-tid="highlighter-match-1"]').length).toEqual(0)
    expect(wrapper.find('[data-tid="highlighter-match-2"]').length).toEqual(1)
    wrapper.setProps({ pattern: 'test2' })
    expect(wrapper.find('[data-tid="highlighter-match-2"]').length).toEqual(0)
  })
})
