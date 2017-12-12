import React, { PureComponent } from 'react'
import { Dropdown, Card, List, Text, Field } from 'react-ui-core/src'
import PropTypes from 'prop-types'

class DropdownFieldAnchor extends PureComponent {
  static propTypes = {
    changeVisibility: PropTypes.func,
    dropDownVisible: PropTypes.bool,
    handleDocumentClick: PropTypes.func,
  }

  componentDidMount() {
    document.addEventListener('click', this.props.handleDocumentClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.handleDocumentClick)
  }

  handleClick = () => {
    if (!this.props.dropDownVisible) this.props.changeVisibility(true)
  }

  render() {
    return <Field onClick={this.handleClick} />
  }
}

export const DefaultDropdown = (
  <Dropdown text={<Text>Click Me</Text>}>
    <div><h1>Hi</h1></div>
  </Dropdown>
)

export const InputDropdown = (
  <Dropdown Anchor={DropdownFieldAnchor}>
    <Card>
      <List items={['foo', 'bar', 'baz']} />
    </Card>
  </Dropdown>
)
