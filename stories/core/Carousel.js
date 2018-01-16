import React from 'react'
import classnames from 'classnames'
import { Carousel, PhotoCarousel } from 'react-ui-core/src'
import StoryBookTheme from '../theme/Storybook.css'

const Item = ({ children }) => ( // eslint-disable-line react/prop-types
  <div
    className={classnames(
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
    className={StoryBookTheme['Story-center']}
    items={items}
  />
)

export const CarouselPaginationNext = (
  <div className={StoryBookTheme['Story-center']}>
    <p>USE LEFT AND RIGHT ARROWS TO SWIPE</p>
    <Carousel
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
    />
  </div>
)

export const CarouselPaginationPrevious = (
  <div className={StoryBookTheme['Story-center']}>
    <p>USE LEFT AND RIGHT ARROWS TO SWIPE</p>
    <Carousel
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
    />
  </div>
)

export const CarouselNavigation = (
  <Carousel
    className={StoryBookTheme['Story-center']}
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

export const PhotoCarouselExample = (
  <PhotoCarousel
    className={StoryBookTheme['Story-center']}
    items={[
      {
        path: 'imgr/2576db62ffa153ebef00317a5c68a368/',
        caption: 'test 1',
      },
      {
        path: 'imgr/d56984e959a3feb1235f85ee202a0fc6/',
        caption: null,
      },
      {
        path: 'imgr/fd972eb03a0463c484580349ad5177b7/',
        caption: null,
      },
      {
        path: 'imgr/d9551cdeb8152c6ecafd96ccf0c9a5dc/',
        caption: null,
      },
      {
        path: 'imgr/d13b78bff171be4a68ff576e036251ab/',
        caption: null,
      },
    ]}
    server="https://image.rent.com/"
    dimensions="400-200"
    showNav
  />
)
