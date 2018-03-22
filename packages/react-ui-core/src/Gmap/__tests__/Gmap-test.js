import React from 'react'
import { shallow } from 'enzyme'
import ThemedGmap from '../Gmap'

const Gmap = ThemedGmap.WrappedComponent
const key = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDfjkBwG1XzdrC-ceFZqozEGBSQidllL8A&v=3.exp&libraries=geometry,drawing,places'

const theme = {
  Gmap_Container: 'containerClass',
  Gmap_Element: 'elementClass',
  Gmap_Spinner: 'spinnerClass',
}

describe('Gmap', () => {
  describe('containerElement', () => {
    const setup = containerElement => {
      const wrapper = shallow(
        <Gmap
          googleMapURL={key}
          theme={theme}
          containerElement={containerElement}
        />
      )
      return wrapper.prop('containerElement')
    }

    it('applies props correctly when type object', () => {
      const containerElement = setup({
        'data-tag_secton': 'container-tag',
      })

      expect(containerElement.type).toEqual('div')
      expect(containerElement.props).toEqual({
        className: 'containerClass',
        'data-tag_secton': 'container-tag',
      })
    })

    it('uses existing prop when type element', () => {
      const containerElement = setup(<span>test</span>)
      expect(React.isValidElement(containerElement)).toEqual(true)
      expect(containerElement.props.children).toEqual('test')
    })
  })

  describe('mapElement', () => {
    const setup = mapElement => {
      const wrapper = shallow(
        <Gmap
          googleMapURL={key}
          theme={theme}
          mapElement={mapElement}
        />
      )
      return wrapper.prop('mapElement')
    }

    it('applies props correctly when type object', () => {
      const mapElement = setup({
        'data-tag_secton': 'container-tag',
      })

      expect(mapElement.type).toEqual('div')
      expect(mapElement.props).toEqual({
        className: 'elementClass',
        'data-tag_secton': 'container-tag',
      })
    })

    it('uses existing prop when type element', () => {
      const mapElement = setup(<span>test</span>)
      expect(React.isValidElement(mapElement)).toEqual(true)
      expect(mapElement.props.children).toEqual('test')
    })
  })

  describe('loadingElement', () => {
    const setup = loadingElement => {
      const wrapper = shallow(
        <Gmap
          googleMapURL={key}
          theme={theme}
          loadingElement={loadingElement}
        />
      )
      return wrapper.prop('loadingElement')
    }

    it('applies props correctly when type object', () => {
      const loadingElement = setup({
        'data-tag_secton': 'container-tag',
      })

      expect(loadingElement.type).toEqual('div')
      expect(loadingElement.props).toEqual({
        className: 'spinnerClass',
        'data-tag_secton': 'container-tag',
      })
    })

    it('applies props correctly when type node', () => {
      const loadingElement = setup('foo')
      expect(loadingElement.type).toEqual('div')
      expect(loadingElement.props).toEqual({
        className: 'spinnerClass',
      })
    })

    it('uses existing prop when type element', () => {
      const loadingElement = setup(<span>test</span>)
      expect(React.isValidElement(loadingElement)).toEqual(true)
      expect(loadingElement.props.children).toEqual('test')
    })
  })
})
