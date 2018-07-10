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
