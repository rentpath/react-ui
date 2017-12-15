import React from 'react'
import { shallow } from 'enzyme'
import { Button } from '@rentpath/react-ui-core'

import ThemedApplyButton from '../ApplyButton'

const ApplyButton = ThemedApplyButton.WrappedComponent

describe('ag/Buttons/ApplyButton', () => {
  it('does not render a button with no handleClick function', () => {
    const wrapper = shallow(<ApplyButton />)
    expect(wrapper.find(Button)).toHaveLength(0)
  })

  it('renders a button with an onClick function', () => {
    const wrapper = shallow(<ApplyButton onClick={() => null} />)
    expect(wrapper.find(Button)).toHaveLength(1)
  })

  it('renders a button with the name Apply by default', () => {
    const wrapper = shallow(<ApplyButton onClick={() => null} />)
    expect(wrapper.find(Button).children().text()).toEqual('Apply')
  })

  it('allows an override of the name', () => {
    const wrapper = shallow(<ApplyButton name="Do not apply!!!" onClick={() => null} />)
    expect(wrapper.find(Button).children().text()).toEqual('Do not apply!!!')
  })

  it('has a default data-tid', () => {
    const wrapper = shallow(<ApplyButton onClick={() => null} />)
    expect(wrapper.find('[data-tid="apply-button"]')).toHaveLength(1)
  })

  it('has allows an override of the data-tid', () => {
    const wrapper = shallow(<ApplyButton onClick={() => null} data-tid="foo" />)
    expect(wrapper.find('[data-tid="foo"]')).toHaveLength(1)
    expect(wrapper.find('[data-tid="apply-button"]')).toHaveLength(0)
  })

  it('passes value to the provided onClick function', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<ApplyButton onClick={onClick} value="valueOfDoom" />)
    wrapper.simulate('click')
    expect(onClick.mock.calls[0][0]).toEqual('valueOfDoom')
  })
})
