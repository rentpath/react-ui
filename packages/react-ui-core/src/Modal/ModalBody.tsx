import * as React from 'react'
import * as classNames from 'classnames'

interface Props {

  /**
   * The theme to apply.
   */
  theme?: React.CSSProperties,

  /**
   * The input classname.
   */
  className?: string,

  /**
   * Callback on modal close.
   */
  onClose?: Function,

  /**
   * Additional props.
   */
  [propName: string]: any
}

export default class ModalBody extends React.PureComponent<Props, {}> {
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
