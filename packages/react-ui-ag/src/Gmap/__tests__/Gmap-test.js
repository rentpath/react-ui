import React from 'react'
import { shallow } from 'enzyme'
import Gmap from '../Gmap'

const key = 'api-key'

describe('ag/Gmap', () => {
  it('applies an `apiKey`', () => {
    const wrapper = shallow(<Gmap apiKey={key} />)
    expect(wrapper.prop('apiKey')).toEqual('api-key')
  })

  it('applies extra props correctly', () => {
    const wrapper = shallow(<Gmap apiKey={key} data-tag_section="map-tag" />)
    expect(wrapper.prop('data-tag_section')).toEqual('map-tag')
  })
})
