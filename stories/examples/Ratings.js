import React from 'react'
import { RatingsTheme } from '../theme'
import { styles } from '../theme/Ratings.css'
import { Ratings, Star, HalfStar, EmptyStar } from 'react-ui-core/src/Ratings'

export const DefaultRatings = (
  <Ratings
  theme= {RatingsTheme}
   stars={3.5}
   total={5}
  >
  </Ratings>
)
