import React, { PureComponent } from 'react'
import { Marker as Gmarker } from '@rentpath/react-ui-core'
import { markerIcon } from './markerIcons'

export default class Marker extends PureComponent {

  render() {
    return (
      <Gmarker
        icon={markerIcon()}
        {...this.props}
      />
    )
  }
}
