import React, { Component, cloneElement } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import autobind from 'autobind-decorator'
import classnames from 'classnames'
import { Dropdown, Text } from '@rentpath/react-ui-core'
import RadioGroupFilterCard from './RadioGroupFilterCard'
import DropdownFilterCardWrapper from './DropdownFilterCardWrapper'

const nodeFuncOrObject = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.func,
  PropTypes.object,
])

@themed(['FilterDropdown'])
export default class RadioGroupDropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    anchorText: PropTypes.node,
    fields: PropTypes.arrayOf(PropTypes.shape({
      label: nodeFuncOrObject,
      value: PropTypes.string,
      anchorLabel: nodeFuncOrObject,
    })),
    applyButton: PropTypes.object,
    cancelButton: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
    fields: [],
  }

  constructor(props) {
    super(props)
    this.state = {
      value: null,
    }
  }

  get standardFields() {
    return this.props.fields.map(originalField => {
      const { anchorLabel, ...field } = originalField
      return {
        ...field,
        checked: field.value === this.state.value,
      }
    })
  }

  @autobind
  handleValueChange(value) {
    this.setState({ value })
  }

  renderAnchorButton() {
    const { value } = this.state
    const { fields, anchorText } = this.props

    const { label, anchorLabel } = fields.find(f => f.value === value) || {}
    const text = anchorLabel || label

    if (anchorText) return cloneElement(anchorText, { text })
    return <Text>{text}</Text>
  }

  render() {
    const {
      anchorText,
      fields,
      theme,
      className,
      ...props
    } = this.props

    return (
      <Dropdown
        className={classnames(
          className,
          theme.FilterDropdown,
        )}
        anchorField={{ children: this.renderAnchorButton() }}
      >
        <DropdownFilterCardWrapper
          {...props}
          FilterCard={RadioGroupFilterCard}
          fields={this.standardFields}
          handleValueChange={this.handleValueChange}
        />
      </Dropdown>
    )
  }
}
