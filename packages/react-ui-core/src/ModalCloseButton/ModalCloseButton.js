import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'

@themed(/^CloseButton/, {
  pure: true,
})

export default class CloseButton extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.any,
  }

  static defaultProps = {
    theme: {},
    children: 'X',
  }

  render() {
    const {
      className,
      theme,
      children,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          className,
          theme.CloseButton
        )}
        data-tid="modal-close-button"
        {...props}
      >
        {children}
      </div>
    )
  }
}
