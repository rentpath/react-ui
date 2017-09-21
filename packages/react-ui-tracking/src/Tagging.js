import { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Tagging extends PureComponent {
  static contextTypes = {
    tracker: PropTypes.shape({
      register: PropTypes.func.isRequired,
      unregister: PropTypes.func.isRequired,
      update: PropTypes.func.isRequired,
    }),
  }

  constructor(props, context) {
    super(props, context)
    this.tracker = context.tracker || ({
      register: () => null,
      unregister: () => null,
      update: () => null,
    })
  }

  componentDidMount() {
    this.tracker.register(this)
    this.tracker.update()
  }

  componentDidUpdate() {
    this.tracker.update()
  }

  componentWillUnmount() {
    this.tracker.unregister(this)
    this.tracker.update()
  }

  render() {
    return null
  }
}
