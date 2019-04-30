import React from 'react'
import { shallow } from 'enzyme'
import ThemedHighlighter from '../Highlighter'

const Highlighter = ThemedHighlighter.WrappedComponent

describe('Highlighter', () => {
  const defaultProps = {
    children: 'This is a test sentence for a test',
    pattern: 'test',
  }

  const factory = props => <Highlighter {...defaultProps} {...props} />

  it('surrounds the pattern text with a span and classname', () => {
    const wrapper = shallow(factory())
    const highlighterMatch = wrapper.find('[data-tid="highlighter-match-0"]')
    expect(highlighterMatch).toHaveLength(1)
    expect(highlighterMatch.at(0).text()).toEqual('test')

    const highlighterMatch2 = wrapper.find('[data-tid="highlighter-match-1"]')
    expect(highlighterMatch2).toHaveLength(1)
    expect(highlighterMatch2.at(0).text()).toEqual('test')

    wrapper.setProps({ pattern: 'test2' })
    expect(wrapper.find('[data-tid="highlighter-match-1"]')).toHaveLength(0)
  })

  it('does not create any highlighter matches if the string matches nothing', () => {
    const wrapper = shallow(factory({ pattern: 'test2' }))
    expect(wrapper.find('[data-tid="highlighter-match-1"]')).toHaveLength(0)
  })

  it('surrounds the 1st pattern matched text only if indexHighlighted is 0', () => {
    const wrapper = shallow(factory({ indexHighlighted: 0 }))
    expect(wrapper.find('[data-tid="highlighter-match-0"]')).toHaveLength(1)
    expect(wrapper.find('[data-tid="highlighter-match-1"]')).toHaveLength(0)
  })

  it('surrounds the nth pattern matched text with span and classname', () => {
    const wrapper = shallow(factory({ indexHighlighted: 1 }))
    expect(wrapper.find('[data-tid="highlighter-match-0"]')).toHaveLength(0)
    expect(wrapper.find('[data-tid="highlighter-match-1"]')).toHaveLength(1)
  })

  it('does not find the pattern if the case is different', () => {
    const wrapper = shallow(factory({ pattern: 'TEST' }))
    expect(wrapper.find('[data-tid="highlighter-match-0"]')).toHaveLength(0)
  })

  it('finds the pattern if the case is different with ignoreCase enabled', () => {
    const wrapper = shallow(factory({ pattern: 'TEST', ignoreCase: true }))
    expect(wrapper.find('[data-tid="highlighter-match-0"]')).toHaveLength(1)
  })

  it('allows a render wrapping if a renderer function is passed', () => {
    const wrapper = shallow(factory({ renderer: node => <div data-tid="wrapper">{node}</div> }))
    expect(wrapper.find('[data-tid="wrapper"]')).toHaveLength(1)
  })
})
