import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import themed from 'react-themed'

@themed('*', { pure: true })

export default class Card extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      theme,
      className,
      children,
      ...props
    } = this.props

    return (
      <div
        className={cn(
          theme.Card,
          className,
        )}
        data-tid="card"
        {...props}
      >
        <div className={theme.Card_Body} data-tid="card-body">
          {children}
        </div>
      </div>
    )
  }
}
