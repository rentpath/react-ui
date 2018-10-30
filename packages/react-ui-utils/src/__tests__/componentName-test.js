import { Component } from 'react'
import componentName from '../componentName'

describe('utils/componentName', () => {
  it('returns component when the component is a string', () => {
    const cmp = 'foo'
    expect(componentName(cmp)).toEqual(cmp)
  })

  it('returns nothing when there is no component', () => {
    const cmp = undefined
    expect(componentName(cmp)).toBeUndefined()
  })

  it('returns the `displayName` when present', () => {
    class Cmp extends Component {
      static displayName = 'SomeName'
    }
    expect(componentName(Cmp)).toEqual('SomeName')
  })

  it('returns `name` when no `displayName` is present', () => {
    /* eslint-disable react/no-multi-comp */
    class Cmp extends Component { }
    expect(componentName(Cmp)).toEqual('Cmp')
    /* eslint-enable react/no-multi-comp */
  })

  describe('fallbackName when neither `displayName` or `name` are present', () => {
    it('returns default when no fallbackName passed', () => {
      expect(componentName(() => { })).toEqual('Component')
    })

    it('returns custom fallback when fallbackName passed', () => {
      expect(componentName(() => { }, 'FooBarComponent')).toEqual('FooBarComponent')
    })
  })
})
