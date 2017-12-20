import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { mount, shallow } from 'enzyme'
import { Field } from '../../Form'
import ThemedDropdown from '../Dropdown'
import theme from './mocks/theme'

const Dropdown = ThemedDropdown.WrappedComponent

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

const SampleChild = props => <button data-tid="child" onClick={props.toggleVisibilty} />

SampleChild.propTypes = {
  toggleVisibilty: PropTypes.func,
}

describe('Dropdown', () => {
  const setup = props => {
    const wrapper = mount(
      <Dropdown theme={theme} {...props}>
        <h1>test</h1>
        <SampleChild />
      </Dropdown>
    )
    return {
      wrapper,
    }
  }

  it('renders children when visible', () => {
    const wrapper = shallow(
      <Dropdown visible>
        <h1>test</h1>
      </Dropdown>
    )
    expect(wrapper.find('h1')).toHaveLength(1)
  })

  it('does not render children when not visible', () => {
    const wrapper = shallow(
      <Dropdown visible={false}>
        <h1>test</h1>
      </Dropdown>
    )
    expect(wrapper.find('h1')).toHaveLength(0)
  })

  it('default anchor fires toggleVisibilty on click', () => {
    const { wrapper } = setup({ visible: false })
    expect(wrapper.find('h1')).toHaveLength(0)
    wrapper.find('button').simulate('click')
    expect(wrapper.find('h1')).toHaveLength(1)
  })

  it('passes label to default anchor', () => {
    const text = 'test'
    const wrapper = mount(
      <Dropdown visible={false} text={'test'}>
        <h1>hi</h1>
      </Dropdown>
    )
    expect(wrapper.find('button').text()).toEqual(text)
  })

  it('uses custom anchor if passed to props', () => {
    const { wrapper } = setup({ visible: true, anchorField: SampleAnchor })
    expect(wrapper.find('label').text()).toEqual('click me')
  })

  it('passes toggleVisibilty to children', () => {
    const { wrapper } = setup({ visible: true })
    expect(wrapper.find('h1')).toHaveLength(1)
    wrapper.find('[data-tid="child"]').simulate('click')
    expect(wrapper.find('h1')).toHaveLength(0)
  })
})
