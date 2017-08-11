import PropTypes from 'prop-types'
import React from 'react'
import styles from './HD.css'

const HD = ({ theme }) => (
  <span className={theme.container}>HD</span>
)

HD.propTypes = {
  theme: PropTypes.object,
}

HD.defaultProps = {
  theme: styles,
}

export default HD
