import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'

import { Text, DropdownMenu } from '@rentpath/react-ui-core'

@themed(/^GridViewHeader/, { pure: true })
export default class GridViewHeader extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    sortMenu: PropTypes.object,
    counter: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
    sortMenu: {},
  }

  render() {
    const {
      theme,
      className,
      sortMenu,
      counter,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          className,
          theme.GridViewHeader,
        )}
        data-tid="grid-view-header"
        {...props}
      >
        <Text className={theme.GridViewHeader_Counter}>{counter}</Text>
        <DropdownMenu {...sortMenu} />
      </div>
    )
  }
}
