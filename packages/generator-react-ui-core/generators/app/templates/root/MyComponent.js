import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'

@themed(/^<%=componentName%>/, {
  pure: true,
})

export default class <%=componentName%> extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
  }

  constructor(props) {
    super(props)
  }

  render() {
    const {
      ...props
    } = this.props

    return (
    )
  }
}
