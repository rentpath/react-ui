import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import { Card, Title, Text, Button } from '@rentpath/react-ui-core'

@themed('*', {
  pure: true,
})

export default class FilterCard extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    children: PropTypes.node,
    title: PropTypes.string,
    description: PropTypes.string,
    handleApplyClick: PropTypes.func,
    handleCancelClick: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    title: '',
    description: '',
  }

  render() {
    const {
      className,
      theme,
      children,
      title,
      description,
      handleApplyClick,
      handleCancelClick,
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
        {title && <Title className={theme.FilterCard_Title}>{title}</Title>}
        {description && <Text className={theme.FilterCard_Description}>{description}</Text>}
        <div className={theme.FilterCard_Body}>
          {children}
        </div>
        {handleApplyClick &&
          <Button
            data-tid="filter-card-apply-button"
            onClick={handleApplyClick}
          >
            Apply
          </Button>
        }
        {handleCancelClick &&
          <Button
            data-tid="filter-card-cancel-button"
            onClick={handleCancelClick}
          >
            Cancel
          </Button>}
      </Card>
    )
  }
}
