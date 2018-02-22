import React from 'react'
import { Icon } from 'react-ui-core/src'
import { circle, heartRed } from '../assets'

const svg = (
  <svg>
    <circle
      cx={50}
      cy={50}
      r={10}
      fill="red"
    />
  </svg>
)

export const InlineIcon = (<Icon svg={svg} />)

export const FileBasedIcon = (<Icon svg={heartRed} />)

