import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import ThemedPhoto from '../Photo'

const Photo = ThemedPhoto.WrappedComponent
const url = '/foo'
const fallbackUrl = '/fallbackWah'

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

  describe('componentDidMount()', () => {
    it('sets state error to true if img src is the fallbackUrl', () => {
      const wrapper = setup({ fallbackUrl })
      wrapper.setState({ error: false })
      const instance = wrapper.instance()
      instance.img = { current: { src: fallbackUrl } }
      instance.componentDidMount()

      expect(wrapper.state('error')).toEqual(true)
      expect(wrapper.find('img')).toHaveLength(1)
      expect(wrapper.find('img').prop('src')).toEqual(fallbackUrl)
    })

    it('returns null if img src is not the fallbackUrl', () => {
      const wrapper = setup({ fallbackUrl })
      wrapper.setState({ error: false })
      const instance = wrapper.instance()
      instance.img = { current: { src: '/foo' } }
      instance.componentDidMount()

      expect(wrapper.state('error')).not.toEqual(true)
      expect(wrapper.find('img')).toHaveLength(1)
      expect(wrapper.find('img').prop('src')).toEqual(url)
    })
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
      const wrapper = setup({ fallbackUrl })
      const instance = wrapper.instance()
      instance.fallback({ target: { src: '/foo' } })

      expect(wrapper.state('error')).toEqual(true)
      expect(wrapper.find('img').prop('src')).toEqual(url)
    })

    it('does not set the src when no fallbackUrl', () => {
      let event = { target: { src: url } }
      const wrapper = setup()
      const instance = wrapper.instance()
      event = instance.fallback(event)

      expect(wrapper.state('error')).toEqual(true)
      expect(event.target.src).toEqual(url)

      event = instance.fallback(event)
      expect(event).toBeUndefined()
    })

    it('does not get an an infinite loop with setting the src', () => {
      let event = { target: { src: url } }
      const wrapper = setup({ fallbackUrl })
      const instance = wrapper.instance()
      event = instance.fallback(event)

      expect(wrapper.state('error')).toEqual(true)
      expect(event.target.src).toEqual(fallbackUrl)

      event = instance.fallback(event)
      expect(event).toBeUndefined()
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
  })

  describe('srcset', () => {
    it('creates a picture tag', () => {
      const wrapper = setup()
      expect(wrapper.prop('src')).toEqual(url)

      const sources = [
        {
          srcset: '/srcseturl',
          media: 'media query,',
          type: 'type/bar',
        },
      ]

      const snap = renderer
        .create(<Photo url={url} alt="foo alt text" sources={sources} />)
        .toJSON()
      expect(snap).toMatchSnapshot()
    })
  })
})
