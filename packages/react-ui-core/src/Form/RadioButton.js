import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import themed from '@rentpath/react-themed'
import Field from './Field'

@themed(/^RadioButton/, {
  pure: true,
})
export default class RadioButton extends PureComponent {
    static propTypes = {
      className: PropTypes.string,
      orientation: PropTypes.string,
      hideInputElement: PropTypes.bool,
      theme: PropTypes.object,
      checked: PropTypes.bool,
      onChange: PropTypes.func.isRequired,
    }

    static defaultProps = {
      theme: {},
    }

    render() {
      const {
        theme,
        className,
        orientation,
        hideInputElement,
        ...props
      } = this.props

      return (
        <Field
          className={clsx(
            className,
            theme.RadioButton,
            this.props.checked && theme['RadioButton-checked'],
            hideInputElement && theme['RadioButton-hidden'],
            orientation && theme[`RadioButton-${orientation}`]
          )}
          type="radio"
          {...props}
        />
      )
    }
}
