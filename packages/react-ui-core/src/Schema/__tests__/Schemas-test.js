import React from 'react'
import { shallow, mount } from 'enzyme'
import Schema from '../Schema'

describe('Schema', () => {
  describe('ApartmentComplex', () => {
    it('returns an ApartmentComplex structured data wrapper', () => {
      const wrapper = shallow(<Schema.ApartmentComplex />)
      expect(wrapper.find('[itemType="https://schema.org/ApartmentComplex"]').exists()).toBeTruthy()
    })

    it('returns children passed into it', () => {
      const wrapper = shallow(
        <Schema.ApartmentComplex>
          <div data-tid="child">Foo</div>
        </Schema.ApartmentComplex>
      )
      expect(wrapper.find('[data-tid="child"]')).toHaveLength(1)
    })
  })

  describe('AggregateRating', () => {
    const rating = {
      score: 4,
      count: 20,
      reviews: 9,
    }

    it('returns null when aggregate data not available', () => {
      const wrapper = mount(<Schema.AggregateRating />)
      expect(wrapper.find('[itemType="https://schema.org/AggregateRating"]').exists()).toBeFalsy()
    })

    it('returns structured data when aggregate data is available', () => {
      const wrapper = mount(
        <Schema.AggregateRating {...rating} />
      )
      expect(wrapper.find('[itemType="https://schema.org/AggregateRating"]').exists()).toBeTruthy()
    })

    it('returns the correct aggregate rating values', () => {
      const wrapper = mount(<Schema.AggregateRating {...rating} />)

      expect(wrapper.find('[itemProp="ratingValue"]').props().content).toEqual(rating.score)
      expect(wrapper.find('[itemProp="ratingCount"]').props().content).toEqual(rating.count)
      expect(wrapper.find('[itemProp="reviewCount"]').props().content).toEqual(rating.reviews)
    })
  })

  describe('Address', () => {
    const address = {
      addressLine1: '1234 W Main St',
      city: 'Eugene',
      state: 'Oregon',
      zip: '97402',
    }

    it('returns PostalAddress structured data', () => {
      const wrapper = shallow(<Schema.Address />)
      expect(wrapper.find('[itemType="https://schema.org/PostalAddress"]').exists()).toBeTruthy()
    })

    it('returns the correct address structured data when passed an address', () => {
      const wrapper = mount(<Schema.Address {...address} />)

      expect(wrapper.find('[itemProp="streetAddress"]').props().content).toEqual(address.addressLine1)
      expect(wrapper.find('[itemProp="addressLocality"]').props().content).toEqual(address.city)
      expect(wrapper.find('[itemProp="addressRegion"]').props().content).toEqual(address.state)
      expect(wrapper.find('[itemProp="postalCode"]').props().content).toEqual(address.zip)
    })
  })

  describe('Geo', () => {
    const location = {
      latitude: 39.8283,
      longitude: -98.5795,
    }

    it('returns null when lat/long are missing', () => {
      const wrapper = mount(<Schema.Geo />)
      expect(wrapper.find('[itemType="https://schema.org/GeoCoordinates"]').exists()).toBeFalsy()
    })

    it('returns the Geo schema when passed a location', () => {
      const wrapper = mount(<Schema.Geo {...location} />)
      expect(wrapper.find('[itemType="https://schema.org/GeoCoordinates"]').exists()).toBeTruthy()
    })

    it('returns the correct Geo data when passed a location', () => {
      const wrapper = mount(<Schema.Geo {...location} />)
      expect(wrapper.find('[itemProp="latitude"]').props().content).toEqual(location.latitude)
      expect(wrapper.find('[itemProp="longitude"]').props().content).toEqual(location.longitude)
    })
  })

  describe('NameAndUrlSchema', () => {
    it('returns children passed into it', () => {
      const wrapper = shallow(
        <Schema.NameAndUrl>
          <div data-tid="child">Foo</div>
        </Schema.NameAndUrl>
      )
      expect(wrapper.find('[data-tid="child"]')).toHaveLength(1)
    })

    it('returns the name itemProp w/o a link with no params', () => {
      const wrapper = mount(<Schema.NameAndUrl />)
      expect(wrapper.find('[itemProp="name"]').exists()).toBeTruthy()
      expect(wrapper.find('a[itemProp="url"]').exists()).toBeFalsy()
    })

    it('returns an itemProp link when passed a url', () => {
      const wrapper = mount(<Schema.NameAndUrl url="/apartments/Georgia/Lawrenceville/Sugarloaf-Summit/100029616/" />)
      expect(wrapper.find('a[itemProp="url"]').exists()).toBeTruthy()
    })
  })
})
