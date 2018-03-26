import React from 'react'
import { LinkList } from 'react-ui-core/src'

const sampleList = [
  { url: '/#-test1', text: 'Link1' },
  { url: '/#-test2', text: 'Link2' },
  { url: '/#-test3', text: 'Link3' },
]

export const DefaultLinkList = (
  <LinkList
    links={sampleList}
  />
)

export const AnchorTagLinkList = (
  <LinkList
    links={sampleList}
    useAnchorTag
  />
)
