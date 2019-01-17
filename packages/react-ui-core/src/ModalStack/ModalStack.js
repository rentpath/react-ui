import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import themed from 'react-themed'
import { boundMethod } from 'autobind-decorator'
import PropTypes from 'prop-types'
import get from 'lodash/fp/get'

//
// Expects currentModal to come in as an object that looks like
// {
//   id: modalId,
//   props: { ...modalProps },
// }
//
// Expects modalDefinitions to come in as an object that looks like
// {
//   modalId: {
//     name: modalName,
//     overlay: isOverlayOpen,
//     resolve: () => import(modalPath),
//   },
// }
//
@themed(['Overlay-lock'], { pure: true })
export default class ModalStack extends PureComponent {
  static propTypes = {
    currentModal: PropTypes.object,
    modalDefinitions: PropTypes.object,
    onClose: PropTypes.func,
    modalPortalId: PropTypes.string,
    overlay: PropTypes.bool,
    theme: PropTypes.object,
  }

  static defaultProps = {
    overlay: false,
    modalPortalId: 'region-modal',
    onClose: () => { },
    theme: {},
  }

  constructor(props) {
    super(props)
    this.state = {
      currentDefinition: {},
      modals: {},
    }
  }

  componentDidMount() {
    this.setupWrapperHost()
  }

  componentDidUpdate() {
    const { currentModal: { id = null }, modalDefinitions } = this.props

    if (id && !this.getModalComponent(id)) {
      const modalDefinition = get(id)(modalDefinitions)
      const { modals } = this.state

      if (modalDefinition) {
        this.loadModal(modalDefinition).then(modal => {
          if (modal) {
            this.setState({
              currentDefinition: modalDefinition,
              modals: {
                ...modals,
                [id]: modal,
              },
            })
          }
        })
      }
    }
  }

  @boundMethod
  onClose() {
    const { currentModal, onClose } = this.props

    if (onClose) onClose(currentModal.id)
  }

  getModalComponent(id) {
    return this.state.modals[id]
  }

  setupWrapperHost() {
    const { modalPortalId } = this.props

    this.modalHost = document.getElementById(modalPortalId)
    if (!this.modalHost) {
      this.modalHost = document.createElement('section')
      this.modalHost.id = modalPortalId
      document.body.appendChild(this.modalHost)
    }
  }

  async loadModal(definition) {
    const result = await definition.resolve()
    return result[definition.name] || result.default
  }

  toggleBodyClass(toggle) {
    const { theme } = this.props

    if (this.modalHost) {
      document.body.classList.toggle(theme['Overlay-lock'], toggle)
    }
  }

  @boundMethod
  renderModals() {
    const { currentModal } = this.props
    const { currentDefinition } = this.state
    const ModalComponent = this.getModalComponent(currentModal.id)
    const hasOverlay = currentDefinition.overlay

    if (ModalComponent) {
      this.toggleBodyClass(true)
      return (
        <ModalComponent
          key={`modal-${currentModal.id}`}
          isOpen
          hasOverlay={hasOverlay}
          onClose={this.onClose}
          {...currentModal.props}
        />
      )
    }

    return null
  }

  render() {
    const { currentModal } = this.props

    if (currentModal && currentModal.id && this.modalHost) {
      return createPortal(this.renderModals(), this.modalHost)
    }

    this.toggleBodyClass(false)
    return null
  }
}
