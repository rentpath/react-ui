import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import styles from './Icon.css'
import * as icons from '../icons'
import featureIcons from './iconMap'
import classNames from 'classnames'

const DEFAULT_ICON = featureIcons.Amenity

export default class Icon extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    title: '',
  }

  render() {
    const {
      name,
      className,
      ...props,
    } = this.props
    const icon = icons[name] || featureIcons[name] || DEFAULT_ICON

    return (
      <span
        {...props}
        className={classNames(className, styles.icon, styles[name])}
      >
        <svg>
          <use xlinkHref={`#${icon}`} />
        </svg>
      </span>
    )
  }
}
