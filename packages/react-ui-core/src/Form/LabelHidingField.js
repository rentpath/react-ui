import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { boundMethod } from 'autobind-decorator'
import Field from './Field'

@themed(/^LabelHidingField/)
export default class LabelHidingField extends Component {
  static propTypes = {
    theme: PropTypes.object,
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    nodeType: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    theme: {},
    nodeType: Field,
  }

  constructor(props) {
    super(props)
    this.state = {
      labelVisible: !props.defaultValue && !props.value,
    }
  }

  @boundMethod
  onChange(event) {
    if (event.target.value) {
      if (this.state.labelVisible) {
        this.setState({ labelVisible: false })
      }
    } else {
      this.setState({ labelVisible: true })
    }
    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  get fieldLabel() {
    const { label, theme } = this.props

    if (this.state.labelVisible) {
      return {
        text: label,
        className: theme.LabelHidingField_Label,
      }
    }

    return null
  }

  render() {
    const {
      theme,
      label,
      onChange,
      nodeType: NodeType,
      ...props
    } = this.props

    return (
      <NodeType
        className={theme.LabelHidingField}
        onChange={this.onChange}
        label={this.fieldLabel}
        {...props}
      />
    )
  }
}
