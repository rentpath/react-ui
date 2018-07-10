import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import ThemedPhoto from '../Photo'

const Photo = ThemedPhoto.WrappedComponent
const url = '/foo'

describe('Photo', () => {
  const setup = props => (
    shallow(
      <Photo
        alt="foo alt text"
        url={url}
        {...props}
      />
    )
  )

  it('passes extra props through', () => {
    const wrapper = setup({ 'data-tag_foo': 'testing' })
    expect(wrapper.prop('data-tag_foo')).toEqual('testing')
  })

  describe('componentWillReceiveProps', () => {
    it('resets the state with a new url when the url has changed', () => {
      const wrapper = setup()
      const newUrl = '/baz'

      expect(wrapper.prop('src')).toEqual(url)
      wrapper.setProps({ url: newUrl })
      expect(wrapper.prop('src')).toEqual(newUrl)
    })
  })

  describe('fallback', () => {
    it('only sets the error to true', () => {
      const wrapper = setup()
      wrapper.instance().fallback()
      expect(wrapper.state('error')).toEqual(true)
    })
  })

  describe('src', () => {
    it('sets a url', () => {
      const wrapper = setup()
      expect(wrapper.prop('src')).toEqual(url)

      const snap = renderer
        .create(<Photo url={url} alt="foo alt text" />)
        .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('uses the `fallbackUrl` when a loading error has happened', () => {
      const fallbackUrl = '/wahwah'
      const wrapper = setup({ fallbackUrl })

      wrapper.setState({ error: true })
      expect(wrapper.prop('src')).toEqual(fallbackUrl)
    })
  })
})
