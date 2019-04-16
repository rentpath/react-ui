import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import ThemedBackgroundPhoto from '../BackgroundPhoto'

const BackgroundPhoto = ThemedBackgroundPhoto.WrappedComponent

describe('BackgroundPhoto', () => {
  it('passes extra props through', () => {
    const wrapper = shallow(
      <BackgroundPhoto
        data-tag_foo="testing"
      />
    )
    expect(wrapper.find('[data-tid="bg-photo"]').prop('data-tag_foo')).toEqual('testing')
  })

  describe('fallbackUrl', () => {
    it('renders 1 url when not set', () => {
      const snap = renderer
        .create(<BackgroundPhoto url="/foo" />)
        .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('renders 2 urls when set', () => {
      const snap = renderer
        .create(
          <BackgroundPhoto
            url="/foo"
            fallbackUrl="/bar"
          />
        )
        .toJSON()
      expect(snap).toMatchSnapshot()
    })
  })
})
