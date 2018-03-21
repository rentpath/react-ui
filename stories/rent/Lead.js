import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { boolean } from '@storybook/addon-knobs'
import { LeadModal } from 'react-ui-rent/src'

const RentLeadModal = props => (
  <LeadModal
    className={props.theme.RentLeadForm}
    isOpen={boolean('isOpen', true)}
  />
)

RentLeadModal.propTypes = {
  theme: PropTypes.object,
}

const ThemedRentLeadModal = themed(/^RentLeadForm/)(RentLeadModal)
const DefaultLeadModal = (<ThemedRentLeadModal />)

export { DefaultLeadModal }
