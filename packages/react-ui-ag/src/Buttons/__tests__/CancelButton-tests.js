import React from 'react'
import { shallow } from 'enzyme'
import { Button } from '@rentpath/react-ui-core'

import ThemedCancelButton from '../CancelButton'

const CancelButton = ThemedCancelButton.WrappedComponent

describe('ag/Buttons/CancelButton', () => {
  it('does not render a button with no onClick function', () => {
    const wrapper = shallow(<CancelButton />)
    expect(wrapper.find(Button)).toHaveLength(0)
  })

  it('renders a button with an onClick function', () => {
    const wrapper = shallow(<CancelButton onClick={() => null} />)
    expect(wrapper.find(Button)).toHaveLength(1)
  })

  it('renders a button with the name Cancel by default', () => {
    const wrapper = shallow(<CancelButton onClick={() => null} />)
    expect(wrapper.find(Button).children().text()).toEqual('Cancel')
  })

  it('allows an override of the name', () => {
    const wrapper = shallow(<CancelButton name="Do not cancel!!!" onClick={() => null} />)
    expect(wrapper.find(Button).children().text()).toEqual('Do not cancel!!!')
  })

  it('has a default data-tid', () => {
    const wrapper = shallow(<CancelButton onClick={() => null} />)
    expect(wrapper.find('[data-tid="cancel-button"]')).toHaveLength(1)
  })

  it('has allows an override of the data-tid', () => {
    const wrapper = shallow(<CancelButton onClick={() => null} data-tid="foo" />)
    expect(wrapper.find('[data-tid="foo"]')).toHaveLength(1)
    expect(wrapper.find('[data-tid="cancel-button"]')).toHaveLength(0)
  })

  it('passes value to the provided onClick function', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<CancelButton onClick={onClick} value="valueOfAwesomeness" />)
    wrapper.simulate('click')
    expect(onClick.mock.calls[0][0]).toEqual('valueOfAwesomeness')
  })
})
