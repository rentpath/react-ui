import React from 'react'
import { shallow } from 'enzyme'
import ThemedTitle from '../Title'
import theme from './mocks/theme'

const Title = ThemedTitle.WrappedComponent

describe('Title', () => {
  it('renders a h1 with text', () => {
    const props = {
      theme,
      nodeType: 'h1',
    }

    const wrapper = shallow(<Title {...props}>Test Text</Title>)
    expect(wrapper.find('h1').exists()).toBeTruthy()
    expect(wrapper.find('h1').text()).toEqual('Test Text')
  })

  it('renders a h1 with an anchor tag', () => {
    const props = {
      theme,
      className: theme['Title-Yuge'],
      nodeType: 'h2',
      children: <a href="#">Home</a>,
    }

    const wrapper = shallow(<Title {...props} />)
    expect(wrapper.find('h2').exists()).toBeTruthy()
    expect(wrapper.find('h2').hasClass('Title-Yuge')).toBeTruthy()
    expect(wrapper.find('h2').contains([<a href="#">Home</a>])).toBeTruthy()
  })
})
