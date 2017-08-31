import React from 'react'
import { mount } from 'enzyme'
import Layer from '../Layer'

describe('<Layer />', () => {
  it('renders with a layer', () => {
    const props = {
      layer: { foo: 'bar' },
    }
    const context = {
      map: {
        addLayer: () => true,
        getLayer: () => true,
        removeLayer: () => true,
      },
    }
    const wrapper = mount(<Layer {...props} />, { context })
    expect(wrapper.prop('layer')).toEqual({ foo: 'bar' })
  })
})
