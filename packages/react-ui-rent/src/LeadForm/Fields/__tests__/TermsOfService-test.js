import React from 'react'
import renderer from 'react-test-renderer'
import { keyMirror } from '@rentpath/react-ui-utils'
import TermsOfService from '../TermsOfService'

const theme = keyMirror([
  'Text',
  'TermsOfService',
])

describe('TermsOfService', () => {
  it('renders default children if none passed', () => {
    const snap = renderer
      .create(<TermsOfService theme={theme} />)
      .toJSON()
    expect(snap).toMatchSnapshot()
  })

  it('renders children passed', () => {
    const snap = renderer
      .create(<TermsOfService theme={theme}>Foo</TermsOfService>)
      .toJSON()

    expect(snap).toMatchSnapshot()
  })
})
