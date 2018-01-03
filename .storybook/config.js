import { configure, setAddon, addDecorator } from '@storybook/react';
//import { configure } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs'
import { setDefaults } from '@storybook/addon-info'
import { setOptions } from '@storybook/addon-options'
import chaptersAddon from 'react-storybook-addon-chapters';


setAddon(chaptersAddon);

addDecorator(checkA11y);
addDecorator(withKnobs);

setDefaults({
  header: true, // Toggles display of header with component name and description
  //inline: true,
  source: true, // Displays the source of story Component
  maxPropsIntoLine: 1,
})

setOptions({
  inline: true,
  name: 'React-UI',
  url: 'https://github.com/rentpath/react-ui',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
})

const loadStories = () => {
  require('../stories/core')
  require('../stories/map')
  require('../stories/rent')
  require('../stories/ag')
}

configure(loadStories, module)
