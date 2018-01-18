import React from 'react'
import { Banner } from 'react-ui-ag/src'

export const DefaultBanner = (
  <Banner
    name="Just Text"
  />
)

export const BannerWithNode = (
  <Banner
    name={<span>$ Coupon</span>}
  />
)
