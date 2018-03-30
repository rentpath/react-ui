import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { GoogleApiWrapper } from 'google-maps-react'
import GmapBase from './GmapBase'

export default class Gmap extends PureComponent {
  static propTypes = {
    apiKey: PropTypes.string.isRequired,
    language: PropTypes.string,
    libraries: PropTypes.array,
    version: PropTypes.string,
  }

  static defaultProps = {
    version: '3',
  }

  get api() {
    const {
      apiKey,
      language,
      libraries,
      version,
    } = this.props

    return GoogleApiWrapper({
      apiKey,
      language,
      libraries,
      version,
    })(GmapBase)
  }

  render() {
    const {
      apiKey,
      language,
      libraries,
      version,
      ...rest
    } = this.props

    const Api = this.api

    return (
      <Api {...rest} />
    )
  }
}
