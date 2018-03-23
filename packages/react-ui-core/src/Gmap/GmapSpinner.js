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
  }

  static defaultProps = {
    loading: false,
    theme: {},
    color: '#000',
  }

  render() {
    const {
      theme,
      className,
      ...rest
    } = this.props

    return (
      <div className={classnames(
        className,
        theme.Gmap_Spinner,
      )}
      >
        <BounceLoader {...rest} />
      </div>
    )
  }
}
