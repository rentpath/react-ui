import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import theme from './mocks/theme'
import ThemedCard from '../Card'

const Card = ThemedCard.WrappedComponent
const content = <h1>Hello world</h1>

describe('Card', () => {
  it('applies a theme classname', () => {
    const wrapper = shallow(<Card theme={theme} />)
    const className = wrapper.prop('className')
    expect(className).toEqual('Card')
  })

  it('renders passed children and adds data-tid', () => {
    const snap = renderer
      .create(<Card>{content}</Card>)
      .toJSON()
    expect(snap).toMatchSnapshot()
  })
})
