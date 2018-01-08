import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { Banner } from 'react-ui-ag/src'

const DefaultBannerComponent = ({ theme }) => (
  <Banner
    name="Just Text"
    theme={theme}
  />
)
DefaultBannerComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedDefaultBanner = themed(['banner'])(DefaultBannerComponent)
const DefaultBanner = <ThemedDefaultBanner />

const bannerText = (<span>$ Coupon</span>)

const BannerComponentWithNode = ({ theme }) => (
  <Banner
    name={bannerText}
    theme={theme}
  />
)
BannerComponentWithNode.propTypes = {
  theme: PropTypes.object,
}
const ThemedNodeBanner = themed(['banner'])(BannerComponentWithNode)
const BannerWithNode = <ThemedNodeBanner />

export { DefaultBanner, BannerWithNode }
