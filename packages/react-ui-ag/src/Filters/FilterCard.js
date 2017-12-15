import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import { parseArgs } from '@rentpath/react-ui-utils'
import { Card, Title, Text } from '@rentpath/react-ui-core'
import {
  CancelButton,
  ApplyButton,
} from '../Buttons'

const buttonType = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.func,
  PropTypes.object,
])

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
    applyButton: buttonType,
    cancelButton: buttonType,
    value: PropTypes.any,
  }

  static defaultProps = {
    theme: {},
  }

  renderButton(button, DefaultButton) {
    const [FilterButton, props] = parseArgs(this.props[button], DefaultButton)
    return <FilterButton {...props} value={this.props.value} />
  }

  render() {
    const {
      className,
      theme,
      children,
      title,
      description,
      applyButton,
      cancelButton,
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

          { (applyButton || cancelButton) &&
            <div className={theme.FilterCard_Buttons}>
              {applyButton && this.renderButton('applyButton', ApplyButton)}
              {cancelButton && this.renderButton('cancelButton', CancelButton)}
            </div>
          }
        </div>
      </Card>
    )
  }
}
