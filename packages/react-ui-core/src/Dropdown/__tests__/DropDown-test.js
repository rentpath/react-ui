import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { mount, shallow } from 'enzyme'
import { Field } from '../../Form'
import Dropdown from '../Dropdown'

const theme = {
  Dropdown: 'Dropdown',
}

class SampleAnchor extends PureComponent {
  static propTypes = {
    toggleVisibilty: PropTypes.func,
  }

  handleClick = () => {
    this.props.toggleVisibilty()
  }

  render() {
    return (
      <Field
        onClick={this.handleClick}
        label="click me"
      />
    )
  }
}

describe('Dropdown', () => {
  const setup = props => {
    const wrapper = mount(
      <Dropdown theme={theme} {...props}>
        <h1>test</h1>
      </Dropdown>
    )
    return {
      wrapper,
    }
  }

  it('renders children when visible', () => {
    const shallowWrapper = shallow(
      <Dropdown visible>
        <h1>test</h1>
      </Dropdown>
    )
    expect(shallowWrapper.find('h1').length).toEqual(1)
  })

  it('does not render children when not visible', () => {
    const { wrapper } = setup({ visible: false })
    expect(wrapper.find('h1').length).toEqual(0)
  })

  it('passes handleClick to anchorField prop', () => {
    const { wrapper } = setup({ visible: true })
    expect(wrapper.find('h1').length).toEqual(1)
    wrapper.find('button').simulate('click')
    expect(wrapper.find('h1').length).toEqual(0)
  })

  it('passes label to default anchor', () => {
    const text = 'test'
    const { wrapper } = setup({
      visible: true,
      text,
    })

    expect(wrapper.find('button').text()).toEqual(text)
  })

  it('passes uses custom anchor if passed to props', () => {
    const { wrapper } = setup({ visible: true, anchorField: SampleAnchor })
    expect(wrapper.find('label').text()).toEqual('click me')
  })
})
