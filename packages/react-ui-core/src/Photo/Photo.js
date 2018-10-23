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

    this.img = React.createRef()

    this.state = {
      url: this.props.url,
    }
  }

  componentDidMount() {
    /* eslint-disable react/no-did-mount-set-state */
    if (this.isFallback) {
      this.setState({ error: true })
    }
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

  get isFallback() {
    return this.img.current && (this.img.current.src === this.props.fallbackUrl)
  }

  @autobind
  fallback(e) {
    const { fallbackUrl } = this.props

    if (e.target.src !== fallbackUrl) {
      e.target.src = fallbackUrl
      // force a re-render
      // this is done in case of race condtion in terms of
      // being in limbo from ssr and client side state
      // or this happening sometime after hte component has mounted
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

    const isFallback = this.isFallback

    const imageTag = (<img
      src={isFallback ? fallbackUrl : this.state.url}
      alt={alt}
      data-tid="photo"
      ref={this.img}
      className={classnames(
        className,
        theme.Photo,
        isFallback && theme['Photo-error'],
      )}
      onError={this.fallback}
      {...rest}
    />)

    if (isFallback || !this.sourceTags) return imageTag

    return (
      <picture>
        {this.sourceTags}
        {imageTag}
      </picture>
    )
  }
}
