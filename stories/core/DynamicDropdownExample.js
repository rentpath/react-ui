import React, { PureComponent } from 'react'
import themed from 'react-themed'
import classnames from 'classnames'
import { Dropdown, Menu, Card } from 'react-ui-core/src'
import PropTypes from 'prop-types'
import DropdownButtonExample from './DropdownButtonExample'

@themed('*', { pure: true })

export default class DynamicDropdownExample extends PureComponent {
  static propTypes = {
    toggleVisibilty: PropTypes.func,
    visible: PropTypes.bool,
    handleDocumentClick: PropTypes.func,
    theme: PropTypes.object,
    buttonText: PropTypes.string,
  }

  static defaultProps = {
    themed: {},
    buttonText: 'choose',
  }

  constructor(props) {
    super(props)
    this.setButtonText = this.setButtonText.bind(this)
    this.state = { buttonText: this.props.buttonText }
  }

  setButtonText(value) {
    this.setState({ buttonText: value })
  }

  render() {
    const { theme } = this.props

    return (
      <Dropdown
        className={classnames(
          theme['Story-padding'],
          theme.Story_Menu,
        )}
        anchorField={props => (
          <DropdownButtonExample buttonText={this.state.buttonText} {...props} />
        )}
      >
        <MenuWrapper
          options={['Option1', 'Option2', 'Option3']}
          setButtonText={this.setButtonText}
        />
      </Dropdown>
    )
  }
}

const MenuWrapper = props => {
  const handleSelection = value => {
    props.setButtonText(value)
    props.onSelect()
  }

  const { setButtonText, ...safeProps } = props

  return (
    <Card>
      <Menu
        onItemSelect={handleSelection}
        {...safeProps}
      />
    </Card>
  )
}

MenuWrapper.propTypes = {
  onSelect: PropTypes.func,
  setButtonText: PropTypes.func,
}
