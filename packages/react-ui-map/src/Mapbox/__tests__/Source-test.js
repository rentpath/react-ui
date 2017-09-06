import React from 'react'
import { mount } from 'enzyme'
import Source from '../Source'

describe('<Source />', () => {
  it('renders with an id', () => {
    const props = {
      id: 'atlanta',
      type: 'geojson',
      data: { foo: 'bar' },
    }
    const context = {
      map: {
        addSource: () => true,
        getSource: () => true,
      },
    }
    const wrapper = mount(<Source {...props} />, { context })
    expect(wrapper.prop('id')).toEqual('atlanta')
  })

  it('renders with a type', () => {
    const props = {
      id: 'atlanta',
      type: 'geojson',
      data: { foo: 'bar' },
    }
    const context = {
      map: {
        addSource: () => true,
        getSource: () => true,
      },
    }
    const wrapper = mount(<Source {...props} />, { context })
    expect(wrapper.prop('type')).toEqual('geojson')
  })

  it('renders with data', () => {
    const props = {
      id: 'atlanta',
      type: 'geojson',
      data: { foo: 'bar' },
    }
    const context = {
      map: {
        addSource: () => true,
        getSource: () => true,
      },
    }
    const wrapper = mount(<Source {...props} />, { context })
    expect(wrapper.prop('data')).toEqual({ foo: 'bar' })
  })

  it('sets new data', () => {
    const props = {
      id: 'atlanta',
      type: 'geojson',
      data: { foo: 'bar' },
    }
    const mock = { setData: () => jest.fn() }

    jest.spyOn(mock, 'setData')

    const context = {
      map: {
        addSource: () => true,
        getSource: () => ({
          ...mock,
        }),
      },
    }
    const wrapper = mount(<Source {...props} />, { context })
    const newProps = { data: { bumble: 'bee' } }
    wrapper.setProps(newProps)
    expect(mock.setData).toHaveBeenCalledWith(newProps.data)
  })
})
