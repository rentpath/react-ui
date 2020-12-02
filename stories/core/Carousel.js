import React from 'react'
import clsx from 'clsx'
import { Carousel, PhotoCarousel } from 'react-ui-core/src'
import StoryBookTheme from '../theme/Storybook.css'

const Item = ({ children }) => ( // eslint-disable-line react/prop-types
  <div
    className={clsx(
      StoryBookTheme.Story_CarouselItem,
      StoryBookTheme['Story_CarouselItem-center'],
    )}
  >
    {children}
  </div>
)

const items = [
  <Item>Test 1</Item>,
  <Item>Test 2</Item>,
  <Item>Test 3</Item>,
  <Item>Test 4</Item>,
]

export const DefaultCarousel = (
  <Carousel
    items={items}
  />
)

export const CarouselPaginationNext = (
  [
    <p key="notification">USE LEFT AND RIGHT ARROWS TO SWIPE</p>,
    <Carousel
      key="carousel"
      items={items}
      pagination={{
        pageNumber: 1,
        total: 10,
        pageSize: 2,
        next: {
          children: 'Next Page',
          className: StoryBookTheme.Story_CarouselItem,
        },
        previous: {
          children: 'Previous Page',
          className: StoryBookTheme.Story_CarouselItem,
        },
      }}
    />,
  ]
)

export const CarouselPaginationPrevious = (
  [
    <p key="notification">USE LEFT AND RIGHT ARROWS TO SWIPE</p>,
    <Carousel
      key="carousel"
      items={items}
      pagination={{
        pageNumber: 2,
        total: 10,
        pageSize: 2,
        next: {
          children: 'Next Page',
          className: StoryBookTheme.Story_CarouselItem,
        },
        previous: {
          children: 'Previous Page',
          className: StoryBookTheme.Story_CarouselItem,
        },
      }}
    />,
  ]
)

export const CarouselNavigation = (
  <Carousel
    items={items}
    navigation={{
      next: {
        children: 'Next',
      },
      previous: {
        children: 'Previous',
      },
    }}
  />
)

const photoProps = [
  {
    path: 'c_fill,w_393,h_160,q_30,fl_progressive:semi,dpr_1.0/fc5b7d16d7ce9c82787883e3a9bc6c30',
    caption: 'test 1',
  },
  {
    path: 'c_fill,w_393,h_160,q_30,fl_progressive:semi,dpr_1.0/d56984e959a3feb1235f85ee202a0fc6',
    caption: null,
  },
  {
    path: 'c_fill,w_393,h_160,q_30,fl_progressive:semi,dpr_1.0/fd972eb03a0463c484580349ad5177b7',
    caption: null,
  },
  {
    path: 'c_fill,w_393,h_160,q_30,fl_progressive:semi,dpr_1.0/d9551cdeb8152c6ecafd96ccf0c9a5dc',
    caption: null,
  },
  {
    path: 'c_fill,w_393,h_160,q_30,fl_progressive:semi,dpr_1.0/d13b78bff171be4a68ff576e036251ab',
    caption: null,
  },
]

export const PhotoCarouselExample = (
  <PhotoCarousel
    items={photoProps}
    server="https://rentpath-res.cloudinary.com/"
    lazyLoad={{
      offset: 100,
      resize: true,
      height: 158,
      width: 280,
    }}
    showNav
  />
)
