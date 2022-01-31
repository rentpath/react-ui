import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import withGoogleScript from '../withGoogleScript'

const key = 'AIzaSyDfjkBwG1XzdrC-ceFZqozEGBSQidllL8A'

describe('withGoogleScript', () => {
  const setup = props => {
    const Component = withGoogleScript('div')
    return shallow(<Component apiKey={key} {...props} />)
  }

  const removeScript = () => {
    const script = document.getElementById('google-maps-api-script')

    if (script) script.remove()
  }

  describe('componentDidMount', () => {
    beforeEach(() => {
      removeScript()
    })

    it('adds a loading listener and executes `loadScript` if loaded is false', () => {
      const maps = Object.assign({}, window.google.maps)
      window.google.maps = undefined
      const instance = setup().instance()
      const scriptLoadedSpy = jest.fn()
      const loadScriptSpy = jest.fn()

      instance.scriptLoaded = scriptLoadedSpy
      instance.loadScript = loadScriptSpy
      instance.componentDidMount()

      expect(scriptLoadedSpy).not.toHaveBeenCalled()
      expect(loadScriptSpy).toHaveBeenCalled()
      window.google.maps = maps
    })

    describe('initial loaded state', () => {
      describe('loaded: false', () => {
        it('adds a loading listener and executes `loadScript` if window.google.maps does not exist', () => {
          const maps = Object.assign({}, window.google.maps)
          window.google.maps = undefined
          const instance = setup().instance()
          const loadScriptSpy = jest.fn()
          const mapLoadedListenerSpy = jest.fn()

          instance.mapLoadedListener = mapLoadedListenerSpy
          instance.loadScript = loadScriptSpy
          instance.componentDidMount()

          expect(mapLoadedListenerSpy).toHaveBeenCalled()
          expect(loadScriptSpy).toHaveBeenCalled()
          window.google.maps = maps
        })

        it('adds a loading listener and does executes `loadScript` if window.google.maps exists', () => {
          const instance = setup().instance()
          const loadScriptSpy = jest.spyOn(instance, 'loadScript')
          const mapLoadedListenerSpy = jest.spyOn(instance, 'mapLoadedListener')

          removeScript()
          instance.componentDidMount()

          expect(mapLoadedListenerSpy).toHaveBeenCalled()
          expect(loadScriptSpy).toHaveBeenCalled()
        })
      })

      describe('apiOptions prop', () => {
        it('adds channel param if apiOptions.channel is a string', () => {
          setup({ apiOptions: { channel: 'foo' } })
          const script = document.getElementById('google-maps-api-script')
          expect(script.src).toContain('&channel=foo')
        })

        it('adds the default channel param if apiOptions does not exist', () => {
          setup()
          const script = document.getElementById('google-maps-api-script')
          expect(script.src).toContain('&channel=rentpath-unknown')
        })

        it('adds the default channel param if apiOptions.channel is not a string', () => {
          setup({ apiOptions: { channel: 1 } })
          const script = document.getElementById('google-maps-api-script')
          expect(script.src).toContain('&channel=rentpath-unknown')
        })
      })
    })
  })

  describe('unmount', () => {
    it('removes the listener', () => {
      removeScript()

      const instance = setup().instance()
      const removeListenerSpy = jest.spyOn(instance, 'removeLoadedListener')
      instance.componentWillUnmount()

      expect(removeListenerSpy).toHaveBeenCalled()
    })
  })

  describe('spinner', () => {
    it('uses the prop directly if valid React element', () => {
      const Component = withGoogleScript('div')
      const snap = renderer
        .create(
          <Component
            apiKey={key}
            spinner={<div>spinner</div>}
            loaded
          />
        )
        .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('uses the default `div` and applies props if object', () => {
      const Component = withGoogleScript('div')
      const snap = renderer
        .create(
          <Component
            apiKey={key}
            spinner={{
              'data-tag_section': 'foo',
            }}
            loaded
          />
        )
        .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('uses the `Spinner` node passed with props', () => {
      const Spinner = <span />
      const Component = withGoogleScript('div')
      const snap = renderer
        .create(
          <Component
            apiKey={key}
            spinner={Spinner}
            loaded
          />
        )
        .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('does not use a spinner if none is passed', () => {
      const Component = withGoogleScript('div')
      const snap = renderer.create(<Component apiKey={key} loaded />).toJSON()
      expect(snap).toMatchSnapshot()
    })
  })
})
