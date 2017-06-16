/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { configure, setAddon } from '@storybook/react'
import infoAddon from '@storybook/addon-info'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'react-ui',
  url: 'https://github.com/rentpath/react-ui',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
})

setAddon(infoAddon)

const loadStories = () => {
  require('../stories')
}

configure(loadStories, module)
