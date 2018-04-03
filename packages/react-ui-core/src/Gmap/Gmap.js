import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import { parseArgs } from '@rentpath/react-ui-utils'
import GmapBase from './GmapBase'

const API_BASE_URL = 'https://maps.googleapis.com/maps/api/js'

export default class Gmap extends PureComponent {
  static propTypes = {
    apiKey: PropTypes.string.isRequired,
    libraries: PropTypes.arrayOf(
      PropTypes.string,
    ),
    spinner: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    libraries: [],
  }

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      spinner: props.spinner,
    }
  }

  componentDidMount() {
    if (this.isInitialized) {
      this.scriptLoaded()
      return
    }
    this.loadScript()
  }

  get isInitialized() {
    return !!(window.google && window.google.maps)
  }

  get spinner() {
    const { spinner, loaded } = this.state
    const props = { key: 'map-spinner', loading: !loaded }

    if (spinner) {
      if (React.isValidElement(spinner)) return React.cloneElement(spinner, props)
      return React.createElement(...parseArgs(spinner, 'div', props))
    }

    return null
  }

  @autobind
  scriptLoaded() {
    this.setState({ loaded: true })
  }

  async loadScript() {
    const { apiKey, libraries } = this.props
    const url = `${API_BASE_URL}?key=${apiKey}&libraries=${libraries.join()}`

    await import(/* webpackChunkName: "scriptjs" */ 'scriptjs').then(scriptjs => {
      scriptjs(url, this.scriptLoaded)
    })
  }

  render() {
    const { loaded } = this.state
    const {
      spinner,
      apiKey,
      libraries,
      ...rest
    } = this.props

    return [
      this.spinner,
      loaded ? <GmapBase key="google-map" {...rest} /> : null,
    ]
  }
}
