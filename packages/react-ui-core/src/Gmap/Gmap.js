import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { parseArgs } from '@rentpath/react-ui-utils'
import GmapBase from './GmapBase'

const createComponent = (element, className) => {
  if (React.isValidElement(element)) return element

  const [Container, props] = parseArgs(element, 'div', { className })
  return <Container {...props} />
}

@themed(/^Gmap/, { pure: true })

export default class Gmap extends PureComponent {
  static propTypes = {
    loadingElement: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.element,
      PropTypes.node,
    ]),
    containerElement: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.element,
    ]),
    mapElement: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.element,
    ]),
    theme: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
  }

  get containerElement() {
    const { containerElement, theme } = this.props
    return createComponent(containerElement, theme.Gmap_Container)
  }

  get mapElement() {
    const { mapElement, theme } = this.props
    return createComponent(mapElement, theme.Gmap_Element)
  }

  get loadingElement() {
    const { loadingElement, theme } = this.props
    return createComponent(loadingElement, theme.Gmap_Spinner)
  }

  render() {
    /* NOTE: containerElement, mapElement and loadingElement props
       are needed to use wtih the withScriptjs and withGoogleMap
       HOCs from the react-google-maps library
    */
    return (
      <GmapBase
        {...this.props}
        containerElement={this.containerElement}
        mapElement={this.mapElement}
        loadingElement={this.loadingElement}
      />
    )
  }
}
