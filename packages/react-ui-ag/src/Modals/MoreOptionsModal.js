import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import { Modal, Button, Text } from '@rentpath/react-ui-core'

@themed(/^MoreOptionsModal/, { pure: true })

export default class MoreOptionsModal extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    header: PropTypes.node,
    showButtonProps: PropTypes.object,
    filters: PropTypes.node,
    resetButtonProps: PropTypes.object,
    cancelButtonProps: PropTypes.object,
    closeButtonProps: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
    showButtonProps: {},
    resetButtonProps: {},
    cancelButtonProps: {},
    isOpen: true,
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpen: true,
    }
  }

  get showButtonProps() {
    const { showButtonProps } = this.props

    return {
      children: showButtonProps.text || 'Show Properties',
      onClick: () => {
        if (showButtonProps.onClick) showButtonProps.onClick()
        this.setState({ isOpen: false })
      },
      ...showButtonProps,
    }
  }

  get cancelButtonProps() {
    const { cancelButtonProps } = this.props

    return {
      children: cancelButtonProps.text || 'Cancel',
      onClick: () => {
        if (cancelButtonProps.onClick) cancelButtonProps.onClick()
        this.setState({ isOpen: false })
      },
      ...cancelButtonProps,
    }
  }

  get resetButtonProps() {
    const { resetButtonProps } = this.props

    return {
      children: resetButtonProps.text || 'Reset All',
      onClick: () => {
        if (resetButtonProps.onClick) resetButtonProps.onClick()
        this.setState({ isOpen: false })
      },
      ...resetButtonProps,
    }
  }

  render() {
    const {
      theme,
      header,
      className,
      filters,
      ...props
    } = this.props

    const { isOpen } = this.state
    console.log(isOpen, 'is open')

    return (
      <Modal
        isOpen={isOpen}
        className={classnames(
          className,
          theme.MoreOptionsModal
        )}
        data-tid="more-options-modal"
        CloseButton={{
          children: 'Close',
        }}
        {...props}
      >
        <div className={theme.MoreOptionsModal_Header} data-tid="more-options-header">
          <Text className={theme.MoreOptionsModal_HeaderText} >
            {header}
          </Text>
        </div>
        <div className={theme.MoreOptionsModal_FiltersBody}>
          {filters}
        </div>
        <div className={theme.MoreOptionsModal_Footer} data-tid="more-options-footer">
          <Button className={theme.MoreOptionsModal_ResetButton} {...this.resetButtonProps} />
          <div className={theme.MoreOptionsModal_FooterButtonGroup}>
            <Button className={theme.MoreOptionsModal_CancelButton} {...this.cancelButtonProps} />
            <Button className={theme.MoreOptionsModal_ShowButton} {...this.showButtonProps} />
          </div>
        </div>
      </Modal>
    )
  }
}
