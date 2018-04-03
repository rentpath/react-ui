import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Gmap from '../Gmap'

const key = 'AIzaSyDfjkBwG1XzdrC-ceFZqozEGBSQidllL8A'

describe('Gmap', () => {
  describe('componentDidMount', () => {
    const setup = () => {
      const wrapper = shallow(<Gmap apiKey={key} />)
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
      const snap = renderer
        .create(<Gmap apiKey={key} spinner={<div>spinner</div>} />)
        .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('uses the default `div` and applies props if object', () => {
      const snap = renderer
        .create(<Gmap apiKey={key} spinner={{ 'data-tag_section': 'foo' }} />)
        .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('uses the `Spinner` node passed with props', () => {
      const Spinner = <span />
      const snap = renderer
        .create(<Gmap apiKey={key} spinner={Spinner} />)
        .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('does not use a spinner if none is passed', () => {
      const snap = renderer
        .create(<Gmap apiKey={key} />)
        .toJSON()
      expect(snap).toMatchSnapshot()
    })
  })
})
