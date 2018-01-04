import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import Title from '../Title'
import coreStory from '../.storybook/coreStory'

const LinkTitle = props => (
  <Title
    nodeType="h3"
    className={classnames(
      props.theme['Title-yuge']
    )}
  >
    <a href="/">Hello! <br /> Click this text to go back home</a>
  </Title>
)

LinkTitle.propTypes = {
  theme: PropTypes.object,
}

const ThemedTitle = themed(/^Title/)(LinkTitle)


coreStory('Title', module)
  .add('Title', () => (
    <Title
      nodeType="h2"
    >
      Default Title
    </Title>
  ))
  .add('Link Title', () => (
     <ThemedTitle />
  ))
