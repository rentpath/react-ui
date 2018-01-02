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
    applyButtonDataTagSelection: PropTypes.string,
    applyButtonDataTagItem: PropTypes.string,
    applyButtonDataTagSection: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
    applyButtonDataTagSelection: '',
    applyButtonDataTagItem: 'update_results_button',
    applyButtonDataTagSection: 'filter_card',
  }

  renderButton(button, DefaultButton) {
    const [FilterButton, props] = parseArgs(this.props[button], DefaultButton)
    return (
      <FilterButton
        {...props}
        data-tag_item={this.props.applyButtonDataTagItem}
        data-tag_section={this.props.applyButtonDataTagSection}
        data-tag_selection={this.props.applyButtonDataTagSelection}
        value={this.props.value}
      />
    )
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
      applyButtonDataTagSelection,
      applyButtonDataTagItem,
      applyButtonDataTagSection,
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
