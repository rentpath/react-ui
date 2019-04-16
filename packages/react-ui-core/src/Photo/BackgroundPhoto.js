import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import pipe from 'lodash/fp/pipe'
import filter from 'lodash/fp/filter'
import map from 'lodash/fp/map'
import join from 'lodash/fp/join'
import flatten from 'lodash/flatten'
import themed from '@rentpath/react-themed'

const backgroundUrl = pipe(
  (...urls) => ([...urls]),
  flatten,
  filter(Boolean), // skip if undefined
  map(url => `url(${url})`),
  join(', ')
)

@themed(['BackgroundPhoto'], {
  pure: true,
})
export default class BackgroundPhoto extends PureComponent {
  static propTypes = {
    url: PropTypes.string,
    fallbackUrl: PropTypes.string,
    theme: PropTypes.object,
    className: PropTypes.string,
    alt: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      theme,
      className,
      url,
      fallbackUrl,
      alt,
      ...rest
    } = this.props

    return (
      <div
        style={{
          backgroundImage: backgroundUrl(url, fallbackUrl),
        }}
        className={classnames(
          className,
          theme.BackgroundPhoto
        )}
        data-tid="bg-photo"
        {...rest}
      />
    )
  }
}
