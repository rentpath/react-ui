import React from 'react'
import { Drawer } from 'react-ui-core/src'

const DefaultDrawer = (
  <div
    style={
      {
        width: '300px',
        height: '500px',
        border: 'solid 1px black',
        display: 'flex',
        alignItems: 'flex-end',
        overflowY: 'hidden',
      }
    }
  >
    <Drawer
      openButtonContents={(<span>&#x25B2;</span>)}
      closeButtonContents={(<span>&#x25BC;</span>)}
    >
      <div>
      Content
      </div>
    </Drawer>
  </div>
)
export { DefaultDrawer }
