import { compose } from 'react-themed'
import {
  Modal,
  ModalBody,
  Overlay,
} from '../base'

import LeadForm from './LeadForm.css'

export default compose({},
  Overlay,
  Modal,
  ModalBody,
  LeadForm
)
