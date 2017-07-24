import React from 'react'
import { Icon } from 'react-ui-core/src'
import { action } from '@storybook/addon-actions'
import * as pathD from '../utils/pathd'
import { IconTheme } from '../theme'

export const SettingIcon = (
    <Icon viewBox="106 -228 512 512" pathD={pathD.SETTINGS}/>
)

export const SettingWithColor = (
    <Icon color="red" viewBox="106 -228 512 512" pathD={pathD.SETTINGS}/>
)

export const SettingWithHeightWidth = (
    <Icon height="100" width="100" theme={IconTheme} viewBox="106 -228 512 512"
          pathD={pathD.SETTINGS}/>
)

export const SearchIcon = (
    <Icon viewBox="106 -228 512 512" pathD={pathD.SEARCH}/>
)
export const SearchWithColor = (
    <Icon color="blue" viewBox="106 -228 512 512" pathD={pathD.SEARCH}/>
)

export const SearchWithHeightWidth = (
    <Icon onClick={action('Clicked the Icon!')} height="100" width="100" viewBox="106 -228 512 512"
          pathD={pathD.SEARCH}/>
)
