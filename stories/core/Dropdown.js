import React from 'react'
import classnames from 'classnames'
import { action } from '@storybook/addon-actions'
import { Dropdown, Text, Menu } from 'react-ui-core/src'
import DropdownButtonExample from './DropdownButtonExample'
import DropdownInputExample from './DropdownInputExample'
import StoryBookTheme from '../theme/Storybook.css'

const inputProps = {
  text: 'Dropdown Label',
}

export const DefaultDropdown = (
  <Dropdown
    className={StoryBookTheme['Story-padding']}
    anchorField={{ text: <Text>Click Me</Text> }}
    visible
  >
    <h1>Hi!</h1>
  </Dropdown>
)

export const DropdownWithProps = (
  <Dropdown
    anchorField={inputProps}
    className={StoryBookTheme['Story-padding']}
  >
    <Menu options={['foo', 'bar', 'baz']} />
  </Dropdown>
)

export const DropdownButtonToggle = (
  <Dropdown
    className={StoryBookTheme['Story-padding']}
    anchorField={props => (<DropdownInputExample {...props} />)}
  >
    <Menu options={['foo', 'bar', 'baz']} />
  </Dropdown>
)

export const DropdownWithMenu = (
  <Dropdown
    className={classnames(
      StoryBookTheme['Story-padding'],
      StoryBookTheme.Story_Menu,
    )}
    anchorField={props => (<DropdownButtonExample {...props} />)}
  >
    <Menu
      options={['Option1', 'Option2', 'Option3']}
      handleSelectionHover={action('hovering')}
    />
    <h1>hello</h1>
  </Dropdown>
)
