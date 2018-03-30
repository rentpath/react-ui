import React from 'react'
import { shallow, mount } from 'enzyme'
import Gmap from '../Gmap'
import GmapBase from '../GmapBase'

const apiKey = 'AIzaSyDfjkBwG1XzdrC-ceFZqozEGBSQidllL8A'

describe('Gmap', () => {
  it('includes a <GmapBase /> component', () => {
    const wrapper = mount(<Gmap apiKey={apiKey} />)
    expect(wrapper.find(GmapBase)).toHaveLength(1)
  })

  it('applies extra props correctly', () => {
    const wrapper = shallow(
      <Gmap
        apiKey={apiKey}
        data-tag_section="map-tag"
      />
    )

    expect(wrapper.prop('data-tag_section')).toEqual('map-tag')
  })
})
