import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import { BounceLoader } from 'react-spinners'

@themed(['Gmap_Spinner'], { pure: true })

export default class MapSpinner extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    theme: PropTypes.object,
    className: PropTypes.string,
    closeDelay: PropTypes.number,
  }

  static defaultProps = {
    closeDelay: 0,
    loading: false,
    theme: {},
    color: '#000',
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: this.props.loading,
    }

    this.closeTimer = null
  }

  componentDidUpdate(nextProps) {
    if (this.props.loading !== nextProps.loading && nextProps.loading) {
      this.close()
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.closeTimer)
  }

  close() {
    const { closeDelay } = this.props

    // add timeout so the gray background isn't the only thing we see
    this.closeTimer = window.setTimeout(() => {
      this.setState({ loading: false })
    }, closeDelay)
  }

  render() {
    const { loading } = this.state
    const {
      theme,
      className,
      closeDelay,
      ...rest
    } = this.props

    return (
      <div className={classnames(
        className,
        theme.Gmap_Spinner,
      )}
      >
        <BounceLoader {...rest} loading={loading} />
      </div>
    )
  }
}
