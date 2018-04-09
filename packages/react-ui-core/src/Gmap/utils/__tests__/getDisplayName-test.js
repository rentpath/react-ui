import React, { Component } from 'react'
import getDisplayName from '../getDisplayName'

describe('getDisplayName', () => {
  it('gets the display name of a React component', () => {
    /* eslint-disable react/no-multi-comp */
    class SomeComponent extends Component {
      render() {
        return <div />
      }
    }

    class SomeOtherComponent extends Component {
      static displayName = 'CustomDisplayName'
      render() {
        return <div />
      }
    }

    function YetAnotherComponent() {
      return <div />
    }
    /* eslint-enable react/no-multi-comp */

    expect(getDisplayName(SomeComponent)).toBe('SomeComponent')
    expect(getDisplayName(SomeOtherComponent)).toBe('CustomDisplayName')
    expect(getDisplayName(YetAnotherComponent)).toBe('YetAnotherComponent')
    expect(getDisplayName(() => <div />)).toBe('Component')
    expect(getDisplayName('div')).toBe('div')
  })
})
