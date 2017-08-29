import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class ModalFooter extends PureComponent {
  static propTypes = {
    styles: PropTypes.object,
    theme: PropTypes.object,
    className: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      className,
      theme,
      styles = this.props.theme.Modal || {},
      ...props
    } = this.props

    return (
      <div
        className={classNames(styles.footer, className)}
        {...props}
      />
    )
  }
}
