import React, { PureComponent } from 'react'
import classnames from 'classnames'
import themed from 'react-themed'

type Props = {
  url: string,
  isBackgound?: boolean,
}

type State = { }

@themed('*', { pure: true })
export default class Image extends PureComponent<Props, State> {

  render() {
    return (
      <div>{this.props.url}</div>
    )
  }
}
