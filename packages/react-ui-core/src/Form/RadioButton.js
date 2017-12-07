import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import Field from './Field'

@themed('*', {
  pure: true,
})
export default class RadioButton extends PureComponent {
    static propTypes = {
      className: PropTypes.string,
      orientation: PropTypes.string,
      hideInput: PropTypes.bool,
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
        hideInput,
        ...props
      } = this.props

      return (
        <Field
          className={classnames(
            className,
            theme.RadioButton,
            this.props.checked && theme['RadioButton-checked'],
            hideInput && theme['RadioButton-hide'],
            orientation && theme[`RadioButton-${orientation}`]
          )}
          type="radio"
          {...props}
        />
      )
    }
}
