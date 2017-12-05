import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../Header'

describe('Header', () => {
  it('renders header only if no subHeader passsed', () => {
    const snap = renderer
      .create(<Header header="Contact Property" />)
      .toJSON()
    expect(snap).toMatchSnapshot()
  })

  it('renders header and subHeader if subHeader passed', () => {
    const snap = renderer
      .create(
        <Header
          header="Contact Property"
          subHeader="To: (xxx) xxx - xxxx"
        />
      )
      .toJSON()
    expect(snap).toMatchSnapshot()
  })
})
