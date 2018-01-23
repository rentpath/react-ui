import React from 'react'
import { ToggleDropDown } from 'react-ui-ag/src'
import StoryBookTheme from '../../theme/Storybook.css'

const DefaultToggleDropDown = (
  <div
    className={StoryBookTheme['Story-center']}
    style={
      {
        width: '100%',
        height: '500px',
        border: 'solid 1px black',
        display: 'flex',
        alignItems: 'flex-end',
      }
    }
  >
    <ToggleDropDown
      openButtonContents={(<svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24"
      >
        <defs>
          <path id="a" d="M6 0L0 6l1.4 1.4L6 2.8l4.6 4.6L12 6z" />
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(6 8)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <use fill="#4A4A4A" xlinkHref="#a" />
          <g fill="#D32526" mask="url(#b)">
            <path d="M-6-8h24v24H-6z" />
          </g>
        </g>
      </svg>)}
      closeButtonContents={
        (<svg
          xmlns="http://www.w3.org/2000/svg" width="24"
          height="24" viewBox="0 0 24 24"
        >
          <defs>
            <path id="a" d="M10.6.6L6 5.2 1.4.6 0 2l6 6 6-6z" />
          </defs>
          <g fill="none" fillRule="evenodd" transform="translate(6 8)">
            <mask id="b" fill="#fff">
              <use xlinkHref="#a" />
            </mask>
            <use fill="#4A4A4A" xlinkHref="#a" />
            <g fill="#D32526" mask="url(#b)">
              <path d="M-6-8h24v24H-6z" />
            </g>
          </g>
        </svg>)
      }
    >
      <div>
      Content
      </div>
    </ToggleDropDown>
  </div>
)
export { DefaultToggleDropDown }
