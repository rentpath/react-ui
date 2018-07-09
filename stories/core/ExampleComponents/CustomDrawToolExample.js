import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import { Button } from 'react-ui-core/src'

@themed(/^CustomDrawToolExample/, { pure: true })

export default class CustomDrawToolExample extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    handleClick: PropTypes.func,
  }

  static defaultProps = {
    themed: {},
  }

  render() {
    const { theme, className, handleClick } = this.props

    return (
      <Button
        className={classnames(className, theme.CustomDrawToolExample)}
        onClick={handleClick}
      >
        Custom Draw Tool
      </Button>
    )
  }
}
