import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'

@themed(/^Gmap_FreeDrawTool/, { pure: true })
export default class FreeDrawTool extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    buttonText: PropTypes.string,
    status: PropTypes.oneOf(['active', 'disabled', 'clicked']),
    handleClick: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    buttonText: 'Draw Search',
    status: 'active',
  }

  render() {
    const {
      theme,
      className,
      buttonText,
      status,
      handleClick,
      ...rest
    } = this.props

    return (
      <button
        className={classnames(
          className,
          theme[`Gmap_FreeDrawTool-${status}`],
        )}
        onClick={handleClick}
        {...rest}
      >
        {buttonText}
      </button>
    )
  }
}
