import React, { PureComponent, Fragment } from 'react'
import { createPortal } from 'react-dom'
import autobind from 'autobind-decorator'
import PropTypes from 'prop-types'
import get from 'lodash/fp/get'
import Overlay from '../Modal/Overlay'

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

export default class ModalStack extends PureComponent {
  static propTypes = {
    currentModal: PropTypes.object,
    modalDefinitions: PropTypes.object,
    onClose: PropTypes.func,
    modalPortalId: PropTypes.string,
  }

  static defaultProps = {
    overlay: false,
    modalPortalId: 'region-modal',
    onClose: () => {},
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

      if (modalDefinition) {
        this.loadModal(modalDefinition).then(modal => {
          if (modal) {
            this.setState({
              currentDefinition: modalDefinition,
              modals: {
                ...this.state.modals,
                [id]: modal,
              },
            })
          }
        })
      }
    }
  }

  @autobind
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

  @autobind
  getWrapperComponent(useOverlay) {
    const { currentModal } = this.props
    return useOverlay
      ? {
        Component: Overlay,
        props: {
          key: `overlay-${currentModal.id}`,
          onClick: this.onClose,
        },
      }
      : {
        Component: Fragment,
        props: {},
      }
  }

  async loadModal(definition) {
    const result = await definition.resolve()
    return result[definition.name] || result.default
  }

  @autobind
  renderModals() {
    const { currentModal } = this.props
    const { currentDefinition } = this.state
    const ModalComponent = this.getModalComponent(currentModal.id)

    const Wrapper = this.getWrapperComponent(currentDefinition.overlay)

    if (ModalComponent) {
      return (
        <Wrapper.Component {...Wrapper.props}>
          <ModalComponent
            key={`modal-${currentModal.id}`}
            isOpen
            onClose={this.onClose}
            {...currentModal.props}
          />
        </Wrapper.Component>
      )
    }
    return null
  }

  render() {
    const { currentModal } = this.props

    if (currentModal && currentModal.id && this.modalHost) {
      return createPortal(this.renderModals(), this.modalHost)
    }
    return null
  }
}
