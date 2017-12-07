import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { mount, shallow } from 'enzyme'
import DropDown from '../DropDown'

const theme = {
  DropDown: 'DropDown',
  DropDown_Content: 'DropDown_Content',
}

class SampleAnchor extends PureComponent {
  static propTypes = {
    toggleVisibilty: PropTypes.func,
  }

  handleClick = () => {
    this.props.toggleVisibilty()
  }

  render() {
    return <button onClick={this.handleClick}>click me</button>
  }
}

describe('Drop Down', () => {
  const setup = props => {
    const wrapper = mount(
      <DropDown theme={theme} {...props}>
        <h1>test</h1>
      </DropDown>
    )
    return {
      wrapper,
    }
  }

  it('renders children when visible', () => {
    const shallowWrapper = shallow(
      <DropDown visible>
        <h1>test</h1>
      </DropDown>
    )
    expect(shallowWrapper.find('h1').length).toEqual(1)
  })

  it('does not render children when not visible', () => {
    const { wrapper } = setup({ visible: false })
    expect(wrapper.find('h1').length).toEqual(0)
  })

  it('gives children DropDown_Content className wrapper', () => {
    const { wrapper } = setup({ visible: true })
    expect(wrapper.find('.DropDown_Content').length).toEqual(1)
  })

  it('passes handleClick to Anchor prop', () => {
    const { wrapper } = setup({ visible: true })
    expect(wrapper.find('h1').length).toEqual(1)
    wrapper.find('button').simulate('click')
    expect(wrapper.find('h1').length).toEqual(0)
  })

  it('Passes text to default anchor', () => {
    const { wrapper } = setup({ visible: true, text: 'test' })
    expect(wrapper.find('button').text()).toEqual('test')
  })

  it('Passes uses custom anchor if passed to props', () => {
    const { wrapper } = setup({ visible: true, Anchor: SampleAnchor })
    expect(wrapper.find('button').text()).toEqual('click me')
  })
})
