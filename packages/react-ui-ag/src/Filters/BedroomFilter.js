import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import { Card, RadioGroup } from '@rentpath/react-ui-core'

@themed('*', {
  pure: true,
})
export default class BedroomFilter extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      className,
      theme,
    } = this.props
    return (
      <Card
        className={classnames(
          theme.BedroomFilter,
          className,
        )}
      >
        <RadioGroup
          name="bedrooms"
          data-tid="bedrooms"
          className={theme.BedroomFilter_RadioGroup}
          hideInputElement
          fields={[
            { label: 'Any', value: '-1' },
            { label: 'Studio', value: '0' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4+', value: '4' },
          ]}
        />
      </Card>
    )
  }
}
