import React from 'react'
import renderer from 'react-test-renderer'
import ThemedCloseButton from '../ModalCloseButton'

const ModalCloseButton = ThemedCloseButton.WrappedComponent

describe('ModalCloseButton', () => {
  it('renders default children if none passed', () => {
    const snap = renderer
      .create(<ModalCloseButton />)
      .toJSON()
    expect(snap).toMatchSnapshot()
  })

  it('renders children passed', () => {
    const snap = renderer
      .create(<ModalCloseButton>Close</ModalCloseButton>)
      .toJSON()

    expect(snap).toMatchSnapshot()
  })
})
