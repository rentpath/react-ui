import React from 'react'
import PropTypes from 'prop-types'
import { GridViewHeader } from 'react-ui-ag/src'
import { text, select } from '@storybook/addon-knobs'
import themed from 'react-themed'

const ExampleGridViewHeaderComponent = ({ theme }) => (
  <div className={theme.GridViewHeaderCard}>
    <GridViewHeader
      sortMenu={{
        options: [
          {
            label: 'Best Match',
            value: 'best-match',
          },
          {
            label: 'Price (Highest to Lowest)',
            value: 'price-desc',
          },
          {
            label: 'Price (Lowest to Highest)',
            value: 'price-asc',
          },
          {
            label: 'Distance (Nearest First)',
            value: 'distance',
          },
          {
            label: 'Rating (High to Low)',
            value: 'rating',
          },
        ],
        createAnchorText: anchorText => [
          <div key="sort-label" className={theme.GridViewHeader_SortLabel}>Sort By:</div>,
          <div key="anchor-text" className={theme.GridViewHeader_AnchorText}>
            {anchorText}
          </div>,
          <div key="sort-chevron" className={theme.GridViewHeader_SortChevron}>⌄</div>,
        ],
        selectedValue: select(
          'selectedValue',
          {
            'best-match': 'best-match',
            'price-desc': 'price-desc',
            'price-asc': 'price-asc',
            distance: 'distance',
            rating: 'rating',
          },
          'best-match'
        ),
      }}
      counter={text('Counter', '3,456 Apartments Available')}
    />
  </div>
)
ExampleGridViewHeaderComponent.propTypes = {
  theme: PropTypes.object,
}
ExampleGridViewHeaderComponent.defaultProps = {
  theme: {},
}

const ThemedExampleGridViewHeader = themed(/GridViewHeader/)(ExampleGridViewHeaderComponent)
const ExampleGridViewHeader = <ThemedExampleGridViewHeader />

export { ExampleGridViewHeader }
