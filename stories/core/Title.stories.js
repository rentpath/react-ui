import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import { Title } from 'react-ui-core/src/Title'
import StoryBookTheme from '../theme/Storybook.css'
import coreStory from './coreStory'

const LinkTitle = props => (
  <Title
    nodeType="h3"
    className={classnames(
      StoryBookTheme['Story-center'],
      props.theme['Title-yuge']
    )}
  >
    <a href="/">Hello! <br /> Click this text to go back home</a>
  </Title>
)

LinkTitle.propTypes = {
  theme: PropTypes.object,
}

const ThemedTitle =  themed(/^Title/)(LinkTitle)


coreStory('Title', module)
  .add('Title', () => (
    <Title
      nodeType="h2"
      className={StoryBookTheme['Story-center']}
    >
      Default Title
    </Title>
  ))
  .add('Link Title', () => (
     <ThemedTitle />
  ))
