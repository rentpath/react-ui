import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class ModalBody extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      className,
      theme,
      styles = this.props.theme.Modal || {},
      CloseButton,
      onClose,
      ...props
    } = this.props

    return (
      <div className={classNames(styles.container, className)}>
        {CloseButton && <CloseButton onClose={onClose} />}
        <div
          className={styles.body}
          {...props}
        />
      </div>
    )
  }
}
