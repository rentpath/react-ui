import { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class PageView extends PureComponent {
  static contextTypes = {
    tracker: PropTypes.shape({
      pageView: PropTypes.func.isRequired,
    }),
  }

  constructor(props, context) {
    super(props, context)
    this.tracker = context.tracker || ({
      pageView: () => null,
    })
  }

  componentDidMount() {
    this.tracker.pageView(this.props)
  }

  componentDidUpdate() {
    this.tracker.pageView(this.props)
  }

  render() {
    return null
  }
}
