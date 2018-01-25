import React from 'react'
import { mount } from 'enzyme'
import MapLayer from '../MapLayer'

describe('MapLayer', () => {
  it('renders with a MapLayer', () => {
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
    const wrapper = mount(<MapLayer {...props} />, { context })
    expect(wrapper.prop('layer')).toEqual({ foo: 'bar' })
  })
})
