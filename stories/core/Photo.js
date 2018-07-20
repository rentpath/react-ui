import React from 'react'
import { Photo, BackgroundPhoto } from 'react-ui-core/src'
import StoryBookTheme from '../theme/Storybook.css'

export const DefaultPhoto = (
  <Photo
    url="https://media.giphy.com/media/kaq6GnxDlJaBq/giphy.gif"
    alt="huh?"
  />
)

export const PhotoWithFallback = (
  <Photo
    url="foobar.png"
    fallbackUrl="http://www.neotechnocraft.com/images/NoImageFound.jpg"
    alt="huh?"
  />
)

export const PhotoWithSrcSet = (
  <Photo
    url="https://rentpath-res.cloudinary.com/c_fill,w_237,h_180,q_10,dpr_2.0/a4d8aac21c66727a3781953bbb0c807a"
    fallbackUrl="http://www.neotechnocraft.com/images/NoImageFound.jpg"
    sources={[
      {
        type: 'image/webp',
        media: '(min-width: 1px)',
        srcset: 'https://rentpath-res.cloudinary.com/c_fill,w_237,h_180,f_webp,q_10,dpr_2.0/a4d8aac21c66727a3781953bbb0c807a',
      },
      {
        srcset: 'https://rentpath-res.cloudinary.com/c_fill,w_237,h_180,q_10,dpr_2.0/a4d8aac21c66727a3781953bbb0c807a',
      },
    ]}
    alt="srcset sample"
  />
)

export const DefaultBackgroundPhoto = (
  <BackgroundPhoto
    className={StoryBookTheme.Story_BackgroundPhoto}
    url="https://media.giphy.com/media/kaq6GnxDlJaBq/giphy.gif"
    fallbackUrl="http://www.neotechnocraft.com/images/NoImageFound.jpg"
  />
)

export const BackgroundPhotoWithFallback = (
  <BackgroundPhoto
    className={StoryBookTheme.Story_BackgroundPhoto}
    url="foobar.png"
    fallbackUrl="http://www.neotechnocraft.com/images/NoImageFound.jpg"
  />
)
