import React from 'react'
import renderer from 'react-test-renderer'
import { keyMirror } from '@rentpath/react-ui-utils'
import ThemedCloseButton from '../CloseButton'

const CloseButton = ThemedCloseButton.WrappedComponent

const theme = keyMirror([
  'Text',
  'TermsOfService',
])

describe('CloseButton', () => {
  it('renders default children if none passed', () => {
    const snap = renderer
      .create(<CloseButton theme={theme} />)
      .toJSON()
    expect(snap).toMatchSnapshot()
  })

  it('renders children passed', () => {
    const snap = renderer
      .create(<CloseButton theme={theme}>Close</CloseButton>)
      .toJSON()

    expect(snap).toMatchSnapshot()
  })
})
