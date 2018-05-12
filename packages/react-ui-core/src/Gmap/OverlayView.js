import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'

@themed(/^Gmap_OverlayView/, { pure: true })
export default class OverlayView extends PureComponent {
  static propTypes = {
    map: PropTypes.object,
    anchor: PropTypes.object,
    children: PropTypes.node.isRequired,
    preventBubbleEvents: PropTypes.bool,
    className: PropTypes.string,
    theme: PropTypes.object,
  }

  static defaultProps = {
    preventBubbleEvents: true,
    className: '',
    theme: {},
  }

  componentDidMount() {
    this.initOverlayView()
  }

  componentDidUpdate(prevProps) {
    const { anchor, theme, className } = this.props

    if (this.overlay && anchor !== prevProps.anchor) {
      this.drawOverlay()
    }

    if (this.container && (theme !== prevProps.theme || className !== prevProps.className)) {
      this.container.className = classnames(className, theme.Gmap_OverlayView)
    }
  }

  componentWillUnmount() {
    if (this.overlay) {
      this.overlay.setMap(null)
    }
  }

  get eventBlacklist() {
    return [
      'click',
      'contextmenu',
      'dblclick',
      'mousedown',
      'mousemove',
      'pointerdown',
      'touchend',
      'touchmove',
      'touchstart',
      'wheel',
    ]
  }

  get position() {
    const { anchor } = this.props

    if (anchor) {
      return anchor.getPosition()
    }

    return null
  }

  initOverlayView() {
    const {
      map,
      theme,
      className,
      preventBubbleEvents,
    } = this.props

    this.container = document.createElement('div')
    this.container.style.position = 'absolute'
    this.container.style.display = 'none'
    this.container.style.cursor = 'auto'
    this.container.className = classnames(className, theme.Gmap_OverlayView)
    if (preventBubbleEvents) this.preventBubbleEvents()

    this.overlay = new window.google.maps.OverlayView()
    this.overlay.onAdd = this.addChildren.bind(this)
    this.overlay.onRemove = this.removeChildren.bind(this)
    this.overlay.draw = this.drawOverlay.bind(this)

    this.overlay.setMap(map)
  }

  preventBubbleEvents() {
    const stopPropagation = e => e.stopPropagation()
    this.eventBlacklist.forEach(event => (
      this.container.addEventListener(event, stopPropagation, false)
    ))
  }

  addChildren() {
    const panes = this.overlay.getPanes()

    panes.floatPane.appendChild(this.container)
  }

  removeChildren() {
    if (this.container.parentElement) {
      this.container.parentElement.removeChild(this.container)
    }
  }

  drawOverlay() {
    const position = this.position
    let display = 'none'

    if (position) {
      const projection = this.overlay.getProjection()

      // Projection is undefined if map has not yet initialized
      if (!projection) return

      const { x, y } = projection.fromLatLngToDivPixel(position)

      // Show overlay only when it is in view.
      if (Math.abs(x) < 4000 && Math.abs(y) < 4000) {
        display = 'block'
        this.container.style.left = `${x}px`
        this.container.style.top = `${y}px`
      }
    }

    if (this.container.style.display !== display) {
      this.container.style.display = display
    }
  }

  render() {
    if (!this.container) return null

    return ReactDOM.createPortal(
      React.Children.only(this.props.children),
      this.container
    )
  }
}
