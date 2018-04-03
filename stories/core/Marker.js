import React, { PureComponent } from 'react'
import { action } from '@storybook/addon-actions'
import { Marker as Gmarker } from 'react-ui-core/src'

export default class Marker extends PureComponent {

  render() {
    return (
      <Gmarker
        onClick={action('clicked')}
        id="listing-id"
        icon={{
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: '#d42022',
          fillOpacity: 1,
          scale: 10,
          strokeColor: '#ffffff',
          strokeWeight: 2,
        }}
        {...this.props}
      />
    )
  }
}
