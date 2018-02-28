import React, { Component, cloneElement } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import autobind from 'autobind-decorator'
import classnames from 'classnames'
import { Dropdown, Text } from '@rentpath/react-ui-core'
import PriceFilterCard from './PriceFilterCard'
import DropdownFilterCardWrapper from './DropdownFilterCardWrapper'

@themed(['FilterDropdown'])
export default class PriceFilterDropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    anchorText: PropTypes.node,
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

  @autobind
  handleValueChange(value) {
    this.setState({ value })
  }

  renderAnchorButton() {
    const { value } = this.state
    const { anchorText } = this.props
    const text = value && `$${value.min}-$${value.max}`

    if (anchorText) return cloneElement(anchorText, { text })
    return <Text>{text}</Text>
  }

  render() {
    const {
      anchorText,
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
          FilterCard={PriceFilterCard}
          handleValueChange={this.handleValueChange}
        />
      </Dropdown>
    )
  }
}
