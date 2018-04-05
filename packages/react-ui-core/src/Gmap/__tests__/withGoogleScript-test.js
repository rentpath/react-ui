import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import withGoogleScript from '../withGoogleScript'

const key = 'AIzaSyDfjkBwG1XzdrC-ceFZqozEGBSQidllL8A'

describe('withGoogleScript', () => {
  describe('componentDidMount', () => {
    const setup = () => {
      const Component = withGoogleScript('div')
      const wrapper = shallow(<Component apiKey={key} />)
      const instance = wrapper.instance()
      const scriptLoadedSpy = jest.spyOn(instance, 'scriptLoaded')
      const loadScriptSpy = jest.spyOn(instance, 'loadScript')

      return { wrapper, instance, scriptLoadedSpy, loadScriptSpy }
    }

    it('fires `scriptLoaded` if google map script has already been loaded', () => {
      const { instance, scriptLoadedSpy, loadScriptSpy } = setup()
      instance.componentDidMount()

      expect(scriptLoadedSpy).toHaveBeenCalled()
      expect(loadScriptSpy).not.toHaveBeenCalled()
    })

    it('fires `loadScript` if google map script has not been loaded', () => {
      const maps = window.google.maps
      window.google.maps = undefined
      const { instance, scriptLoadedSpy, loadScriptSpy } = setup()

      instance.componentDidMount()

      expect(scriptLoadedSpy).not.toHaveBeenCalled()
      expect(loadScriptSpy).toHaveBeenCalled()
      window.google.maps = maps
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
          />
        )
        .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('does not use a spinner if none is passed', () => {
      const Component = withGoogleScript('div')
      const snap = renderer.create(<Component apiKey={key} />).toJSON()
      expect(snap).toMatchSnapshot()
    })
  })
})
