import React from 'react'
import { Svg } from 'react-ui-core/src'
import { action } from '@storybook/addon-actions'
import * as pathD from '../utils/pathd'
import { SvgTheme } from '../theme'

export const SettingSvg = (
    <Svg viewBox="106 -228 512 512" height="30" width="30" pathD={pathD.SETTINGS}/>
)

export const SettingWithColor = (
    <Svg fill="red" viewBox="106 -228 512 512" height="30" width="30" pathD={pathD.SETTINGS}/>
)

export const SettingWithHeightWidth = (
    <Svg height="100" width="100" viewBox="106 -228 512 512"
          pathD={pathD.SETTINGS}/>
)

export const SearchSvg = (
    <Svg viewBox="106 -228 512 512" height="30" width="30" pathD={pathD.SEARCH}/>
)
export const SearchWithColor = (
    <Svg fill="blue" height="30" width="30" viewBox="106 -228 512 512" pathD={pathD.SEARCH}/>
)

export const SearchWithHeightWidth = (
    <Svg onClick={action('Clicked the Svg!')} height="100" width="100" viewBox="106 -228 512 512"
          pathD={pathD.SEARCH}/>
)
