import React, { PureComponent } from 'react'
import { DropDown, List, Text, Field } from 'react-ui-core/src'
import PropTypes from 'prop-types'

class DropDownFieldAnchor extends PureComponent {
  static propTypes = {
    toggleVisibilty: PropTypes.func,
    dropDownVisible: PropTypes.bool,
  }

  handleClick = () => {
    if (!this.props.dropDownVisible) this.props.toggleVisibilty()
  }

  render() {
    return <Field onClick={this.handleClick} />
  }
}

export const DefaultDropDown = (
  <DropDown text={<Text>Click Me</Text>}>
    <div><h1>Hi</h1></div>
  </DropDown>
)

export const InputDropDown = (
  <DropDown Anchor={DropDownFieldAnchor}>
    <List items={['foo', 'bar', 'baz']} />
  </DropDown>
)
