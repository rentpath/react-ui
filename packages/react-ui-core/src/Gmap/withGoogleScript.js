import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import { parseArgs } from '@rentpath/react-ui-utils'
import getDisplayName from './utils/getDisplayName'

const API_BASE_URL = 'https://maps.googleapis.com/maps/api/js'
const SCRIPT_ID = 'google-maps-api-script'
const EVENT_NAME = 'googleMapsLoaded'

export default function(BaseComponent) {
  class Container extends PureComponent {
    static displayName = `withGoogleScript(${getDisplayName(BaseComponent)})`

    static propTypes = {
      apiKey: PropTypes.string.isRequired,
      version: PropTypes.string,
      libraries: PropTypes.arrayOf(
        PropTypes.string,
      ),
      spinner: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
        PropTypes.object,
      ]),
      onScriptLoadError: PropTypes.func,
      loaded: PropTypes.bool,
    }

    static defaultProps = {
      libraries: [],
      version: '3',
      onScriptLoadError: error => {
        window.mapLoadError = error
      },
    }

    state = {
      loaded: this.props.loaded || false,
      spinner: this.props.spinner,
    }

    componentDidMount() {
      if (this.state.loaded || (this.hasExistingScript && this.isInitialized)) {
        // no other place to put this due to SSR
        this.setState({ loaded: true }) // eslint-disable-line react/no-did-mount-set-state
        return
      }

      this.mapLoadedListener()
      this.loadScript()
    }

    componentWillUnmount() {
      this.removeLoadedListener()
    }

    get isInitialized() {
      return !!(window && window.google && window.google.maps)
    }

    get hasExistingScript() {
      return !!(document && document.getElementById(SCRIPT_ID))
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

    get api() {
      const { apiKey, libraries, version } = this.props
      return `${API_BASE_URL}?key=${apiKey}&v=${version}&libraries=${libraries.join()}&callback=google_map_initialize`
    }

    removeLoadedListener() {
      window.removeEventListener(EVENT_NAME, this.loadedHandler)
    }

    mapLoadedListener() {
      this.loadedHandler = () => {
        this.setState({ loaded: true })
        this.removeLoadedListener()
      }

      window.addEventListener(EVENT_NAME, this.loadedHandler)
    }

    @autobind
    scriptLoaded() {
      // NOTE: IE 11 needs a polyfill for CustomEvent
      window.dispatchEvent(new CustomEvent(EVENT_NAME))
    }

    loadScript() {
      if (!this.hasExistingScript) {
        window.google_map_initialize = this.scriptLoaded
        const script = document.createElement('script')
        script.async = true
        script.defer = true
        script.id = SCRIPT_ID
        script.src = this.api
        script.onerror = this.props.onScriptLoadError
        document.head.appendChild(script)
      }
    }

    render() {
      const { loaded } = this.state
      const {
        spinner,
        apiKey,
        libraries,
        version,
        onScriptLoadError,
        ...rest
      } = this.props

      return [
        this.spinner,
        loaded ? <BaseComponent key="google-map" {...rest} /> : null,
      ]
    }
  }

  return Container
}
