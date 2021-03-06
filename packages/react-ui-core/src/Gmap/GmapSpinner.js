import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from '@rentpath/react-themed'
import clsx from 'clsx'
import BounceLoader from './spinners/BounceLoader'

@themed(['Gmap_Spinner'], { pure: true })
export default class GmapSpinner extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    theme: PropTypes.object,
    className: PropTypes.string,
    closeDelay: PropTypes.number,
    color: PropTypes.string,
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
      <div className={clsx(
        className,
        theme.Gmap_Spinner,
      )}
      >
        <BounceLoader {...rest} loading={loading} />
      </div>
    )
  }
}
