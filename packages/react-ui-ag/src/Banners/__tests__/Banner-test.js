import React from 'react'
import { shallow } from 'enzyme'

import ThemedBanner from '../Banner'

const Banner = ThemedBanner.WrappedComponent

describe('ag/Banners/Banner', () => {
  it('renders a banner using the Text component', () => {
    const wrapper = shallow(<Banner name="coupon" />)
    expect(wrapper.find('Themed(Text)')).toHaveLength(1)
  })

  it('has allows an override of the data-tid', () => {
    const wrapper = shallow(<Banner name="Pet Friendly" data-tid="foo" />)
    expect(wrapper.find('[data-tid="foo"]')).toHaveLength(1)
    expect(wrapper.find('[data-tid="banner"]')).toHaveLength(0)
  })
})
