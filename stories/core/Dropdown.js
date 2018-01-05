import React from 'react'
import classnames from 'classnames'
import { action } from '@storybook/addon-actions'
import { Dropdown, Text, Menu, Card } from 'react-ui-core/src'
import DropdownButtonExample from './DropdownButtonExample'
import DropdownInputExample from './DropdownInputExample'
import DynamicDropdownExample from './DynamicDropdownExample'
import StoryBookTheme from '../theme/Storybook.css'

const inputProps = {
  children: 'Dropdown Label',
}

const Content = props => (
  <Card {...props}><h1>Hi</h1></Card>
)

const MenuExample = props => (
  <Card>
    <Menu options={['foo', 'bar', 'baz']} {...props} />
  </Card>
)

export const DefaultDropdown = (
  <Dropdown
    className={StoryBookTheme['Story-padding']}
    anchorField={{ children: <Text>Click Me</Text> }}
  >
    <Content />
  </Dropdown>
)

export const DropdownWithProps = (
  <Dropdown
    anchorField={inputProps}
    className={StoryBookTheme['Story-padding']}
  >
    <MenuExample />
  </Dropdown>
)

export const DropDownInputAnchor = (
  <Dropdown
    className={StoryBookTheme['Story-padding']}
    anchorField={props => (<DropdownInputExample {...props} />)}
    toggleOnSelect={false}
  >
    <MenuExample />
  </Dropdown>
)

export const DropdownWithMenu = (
  <Dropdown
    className={classnames(
      StoryBookTheme['Story-padding'],
    )}
    anchorField={props => (<DropdownButtonExample {...props} />)}
  >
    <Card>
      <Menu
        options={['foo', 'bar', 'baz']}
        onItemSelect={action('selected')}
      />
      <Text className={StoryBookTheme.Story_DropdownMultiple}>Choose</Text>
    </Card>
  </Dropdown>
)

export const DropdownCloseOnOptionSelect = (
  <DynamicDropdownExample theme={StoryBookTheme} />
)
