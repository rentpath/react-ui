import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { setupEvents } from './utils/mapEventHelpers'

const EVENTS = {
  onCloseClick: 'closeclick',
  onContentChanged: 'content_changed',
  onDomReady: 'domready',
  onPositionChanged: 'position_changed',
  onZIndexChanged: 'zindex_changed',
}

const EVENT_NAMES = Object.keys(EVENTS)

export default class InfoWindow extends PureComponent {
  static propTypes = {
    map: PropTypes.object,
    anchor: PropTypes.object,
    children: PropTypes.node,
  }

  constructor(props) {
    super(props)

    this.initInfoWindow()
  }

  componentDidMount() {
    this.infowindow.setContent(this.container)
    this.openWindow()
  }

  componentDidUpdate(prevProps) {
    const { anchor } = this.props

    if (anchor && (prevProps.anchor !== anchor)) {
      this.openWindow()
    } else {
      this.closeWindow()
    }
  }

  componentWillUnmount() {
    this.closeWindow()
  }

  initInfoWindow() {
    this.container = document.createElement('div')
    this.infowindow = new window.google.maps.InfoWindow()

    setupEvents(this.infowindow, EVENTS, this.props)
  }

  openWindow() {
    const { map, anchor } = this.props

    if (this.infowindow && anchor) {
      this.infowindow.open(map, anchor)
    }
  }

  closeWindow() {
    if (this.infowindow) {
      this.infowindow.close()
    }
  }

  render() {
    return ReactDOM.createPortal(
      React.Children.only(this.props.children),
      this.container
    )
  }
}

EVENT_NAMES.forEach(name => {
  InfoWindow.propTypes[name] = PropTypes.func
})
