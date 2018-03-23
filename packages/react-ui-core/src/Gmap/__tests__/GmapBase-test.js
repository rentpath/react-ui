import React from 'react'
import { shallow } from 'enzyme'
import { BaseGoogleMap } from '../GmapBase'

describe('GmapBase', () => {
  it('applies a default zoom and center', () => {
    const wrapper = shallow(<BaseGoogleMap />)
    const defaultZoom = wrapper.prop('defaultZoom')
    const defaultCenter = wrapper.prop('defaultCenter')
    expect(defaultZoom).toEqual(8)
    expect(defaultCenter).toEqual({
      lat: 33.7490,
      lng: -84.3880,
    })
  })

  it('passes children', () => {
    const wrapper = shallow(
      <BaseGoogleMap>
        <div>test</div>
      </BaseGoogleMap>
    )
    expect(wrapper.childAt(0).html()).toEqual('<div>test</div>')
  })
})
