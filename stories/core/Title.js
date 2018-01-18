import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { Title } from 'react-ui-core/src/Title'

export const DefaultTitle = (
  <Title
    nodeType="h2"
  >
    Default Title
  </Title>
)

const LinkTitle = props => (
  <Title
    nodeType="h3"
    className={props.theme['Title-yuge']}
  >
    <a href="/">Hello! <br /> Click this text to go back home</a>
  </Title>
)

LinkTitle.propTypes = {
  theme: PropTypes.object,
}
const ThemedLinkTitle = themed(/^Title/)(LinkTitle)

export const EmbeddedLinkWithinTitle = (<ThemedLinkTitle />)
