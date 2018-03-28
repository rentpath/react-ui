import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import autobind from 'autobind-decorator'
import classnames from 'classnames'
import { parseArgs } from '@rentpath/react-ui-utils'
import { Map } from 'google-maps-react'
import omit from 'lodash/omit'
import get from 'lodash/get'

const SPINNER_CLOSE_TIMEOUT = 500
const DEFAULT_ZOOM = 8
const DEFAULT_CENTER = { // Atlanta, GA
  lat: 33.7490,
  lng: -84.3880,
}

@themed(/^Gmap/, { pure: true })
export default class GmapBase extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    onReady: PropTypes.func,
    google: PropTypes.object,
    spinner: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
      PropTypes.shape({
        closeDelay: PropTypes.number,
      }),
    ]),
  }

  static defaultProps = {
    theme: {},
    zoom: DEFAULT_ZOOM,
  }

  constructor(props) {
    super(props)

    this.closeDelay = SPINNER_CLOSE_TIMEOUT
    this.state = {
      spinner: props.spinner,
    }
  }

  get spinner() {
    let { spinner } = this.state
    const props = { key: 'map-spinner' }

    if (spinner) {
      if (React.isValidElement(spinner)) return React.cloneElement(spinner, props)

      if (typeof spinner === 'object') {
        this.closeDelay = get(spinner, 'closeDelay', SPINNER_CLOSE_TIMEOUT)
        spinner = omit(spinner, 'closeDelay')
      }

      return React.createElement(...parseArgs(spinner, 'div', props))
    }

    return null
  }

  closeSpinner() {
    // add timeout so the gray background isn't the only thing we see
    setTimeout(() => {
      this.setState({ spinner: false })
    }, this.closeDelay)
  }

  @autobind
  handleOnReady(mapProps, map) {
    const { onReady, spinner } = this.props

    if (spinner) this.closeSpinner()
    if (onReady) onReady(mapProps, map)
  }

  render() {
    const {
      theme,
      className,
      spinner,
      google,
      ...rest
    } = this.props

    return [
      this.spinner,
      <Map
        className={classnames(
          className,
          theme.Gmap,
        )}
        key="map"
        google={google}
        onReady={this.handleOnReady}
        zoom={DEFAULT_ZOOM}
        initialCenter={DEFAULT_CENTER}
        {...rest}
      />,
    ]
  }
}
