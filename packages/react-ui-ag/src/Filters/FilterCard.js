import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import { Card, Title, Text } from '@rentpath/react-ui-core'
import {
  CancelButton as DefaultCancelButton,
  ApplyButton as DefaultApplyButton,
} from '../Buttons'

@themed(/^FilterCard/, {
  pure: true,
})

export default class FilterCard extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    children: PropTypes.node,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    description: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    ApplyButton: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    CancelButton: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    onApplyClick: PropTypes.func,
    onCancelClick: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    ApplyButton: DefaultApplyButton,
    CancelButton: DefaultCancelButton,
  }

  render() {
    const {
      className,
      theme,
      children,
      title,
      description,
      onApplyClick,
      onCancelClick,
      ApplyButton,
      CancelButton,
      ...props
    } = this.props

    return (
      <Card
        className={classnames(
          theme.FilterCard,
          className,
        )}
        {...props}
      >
        {(title || description) &&
          <div className={theme.FilterCard_Header}>
            {title && <Title className={theme.FilterCard_Title}>{title}</Title>}
            {description && <Text className={theme.FilterCard_Description}>{description}</Text>}
          </div>
        }
        <div className={theme.FilterCard_Body}>
          {children}

          { (onApplyClick || onCancelClick) &&
            <div className={theme.FilterCard_Buttons}>
              <ApplyButton onClick={onApplyClick} />
              <CancelButton onClick={onCancelClick} />
            </div>
          }
        </div>
      </Card>
    )
  }
}
