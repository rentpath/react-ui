import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import autobind from 'autobind-decorator'
import themed from 'react-themed'

const pictureSourcesPropTypes = PropTypes.shape({
  type: PropTypes.string,
  media: PropTypes.string,
  srcset: PropTypes.string.isRequired,
})

@themed(['Photo'], {
  pure: true,
})

export default class Photo extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    sources: PropTypes.arrayOf(pictureSourcesPropTypes),
    alt: PropTypes.string,
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

  componentDidMount() {
    /* eslint-disable react/no-did-mount-set-state */
    this.setState({ mounted: true })
    /* eslint-enable react/no-did-mount-set-state */
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

  get sourceTags() {
    const { sources } = this.props

    if (!sources || !sources.length) return false

    return (
      <React.Fragment>
        {sources.reduce((sourcesArr, { type, media, srcset }, index) => {
          if (srcset) {
            sourcesArr.push(
              <source
                type={type}
                media={media}
                srcSet={srcset}
                key={`${index}${srcset}`}
              />
            )
          }
          return sourcesArr
        }, [])}
      </React.Fragment>
    )
  }

  @autobind
  fallback() {
    if (!this.state.error) {
      this.setState({ error: true })
    }
  }

  render() {
    const {
      theme,
      className,
      url: _,
      alt,
      fallbackUrl,
      sources,
      ...rest
    } = this.props

    if (!this.state.mounted) return null
    const { url, error } = this.state

    const imageTag = (<img
      src={error ? fallbackUrl : url}
      alt={alt}
      data-tid="photo"
      className={classnames(
        className,
        theme.Photo,
        error && theme['Photo-error'],
      )}
      onError={this.fallback}
      {...rest}
    />)

    if (error || !this.sourceTags) return imageTag

    return (
      <picture>
        {this.sourceTags}
        {imageTag}
      </picture>
    )
  }
}
