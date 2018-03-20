import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { mount, shallow } from 'enzyme'
import { Field } from '../../Form'
import ThemedDropdown from '../Dropdown'
import theme from './mocks/theme'

const Dropdown = ThemedDropdown.WrappedComponent

const map = {}

class SampleAnchor extends PureComponent {
  static propTypes = {
    onSelect: PropTypes.func,
  }

  handleClick = () => {
    this.props.onSelect()
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

const SampleChild = props => <button data-tid="child" {...props} />

SampleChild.propTypes = {
  onSelect: PropTypes.func,
}

describe('Dropdown', () => {
  beforeAll(() => {
    window.document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb
    })
  })

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

  it('sets up default anchor to fire toggleVisibility on click', () => {
    const { wrapper } = setup({ visible: false })
    expect(wrapper.find('h1')).toHaveLength(0)
    wrapper.find('button').simulate('click')
    expect(wrapper.find('h1')).toHaveLength(1)
  })

  it('should close on outside click', () => {
    const { wrapper } = setup({ visible: true })
    map.click({ target: document.createElement('div') })
    expect(wrapper.state('visible')).toEqual(false)
  })

  it('should call onVisibilityChange prop on outside click', () => {
    const onVisibilityChange = jest.fn()
    setup({ visible: true, onVisibilityChange })
    map.click({ target: document.createElement('div') })
    expect(onVisibilityChange.mock.calls).toHaveLength(1)
  })

  it('passes label to default anchor', () => {
    const text = 'test'
    const wrapper = mount(
      <Dropdown visible={false} anchorField={{ children: 'test' }}>
        <h1>hi</h1>
      </Dropdown>
    )
    expect(wrapper.find('button').text()).toEqual(text)
  })

  it('uses custom anchor if passed to props', () => {
    const { wrapper } = setup({ visible: true, anchorField: SampleAnchor })
    expect(wrapper.find('label').text()).toEqual('click me')
  })

  it('does not pass toggleVisibility to string types (non React)', () => {
    const { wrapper } = setup({ visible: true })
    expect(wrapper.find('h1')).toHaveLength(1)
    wrapper.find('[data-tid="child"]').simulate('click')
    expect(wrapper.find('h1')).toHaveLength(1)
  })

  it('passes toggleVisibility to React components only', () => {
    const { wrapper } = setup({ visible: true })
    expect(wrapper.find('SampleChild')).toHaveLength(1)
    wrapper.find('SampleChild').simulate('select')
    expect(wrapper.find('SampleChild')).toHaveLength(0)
  })
})
