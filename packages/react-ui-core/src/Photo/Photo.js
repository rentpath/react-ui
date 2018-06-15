import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'

@themed(['Photo'], {
  pure: true,
})

export default class Photo extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    fallbackUrl: PropTypes.string,
    theme: PropTypes.object,
    className: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
  }

  // don't need the constructor once we fix the getDerivedStateFromProps
  constructor(props) {
    super(props)

    this.state = {
      url: this.props.url,
      error: false,
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { url } = nextState || {}

    if (!url || (url !== nextProps.url)) {
      this.setState({
        url: nextProps.url,
        error: false,
      })
    }
  }

  /* throws a `willComponentUpdate` warning because of the
   * themed wrapper component using it
   * should revisit when we either fix react-themed or move
   * to something else
   *
  static getDerivedStateFromProps(props, state) {
    const { url } = state || {}

    if (!url || (url !== props.url)) {
      return {
        url: props.url,
        error: false,
      }
    }

    return null
  }
  */

  fallback() {
    this.setState({ error: true })
  }

  render() {
    const {
      theme,
      className,
      url: _,
      alt,
      fallbackUrl,
      ...rest
    } = this.props

    const { url, error } = this.state

    return (
      <img
        src={error ? fallbackUrl : url}
        alt={alt}
        data-tid="photo"
        className={classnames(
          className,
          theme.Photo
        )}
        onError={!error && this.fallback}
        {...rest}
      />
    )
  }
}
