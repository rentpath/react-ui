import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { mount, shallow } from 'enzyme'
import Dropdown from '../Dropdown'

const theme = {
  Dropdown: 'Dropdown',
  Dropdown_Content: 'Dropdown_Content',
}

class SampleAnchor extends PureComponent {
  static propTypes = {
    changeVisibility: PropTypes.func,
    dropDownVisible: PropTypes.bool,
  }

  handleClick = () => {
    const { changeVisibility, dropDownVisible } = this.props
    changeVisibility(!dropDownVisible)
  }

  render() {
    return <button onClick={this.handleClick}>click me</button>
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

  it('gives children Dropdown_Content className wrapper', () => {
    const { wrapper } = setup({ visible: true })
    expect(wrapper.find('.Dropdown_Content').length).toEqual(1)
  })

  it('passes handleClick to Anchor prop', () => {
    const { wrapper } = setup({ visible: true })
    expect(wrapper.find('h1').length).toEqual(1)
    wrapper.find('button').simulate('click')
    expect(wrapper.find('h1').length).toEqual(0)
  })

  it('passes text to default anchor', () => {
    const { wrapper } = setup({ visible: true, text: 'test' })
    expect(wrapper.find('button').text()).toEqual('test')
  })

  it('Uses custom anchor if passed to props', () => {
    const { wrapper } = setup({ visible: true, Anchor: SampleAnchor })
    expect(wrapper.find('button').text()).toEqual('click me')
  })
})
