import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class Tracker extends PureComponent {
  static propTypes = {
    setData: PropTypes.func,
    pageView: PropTypes.func,
    children: PropTypes.node,
  }

  static childContextTypes = {
    tracker: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.instances = []
    this.update = this.update.bind(this)
    this.pageView = this.pageView.bind(this)
    this.register = this.register.bind(this)
    this.unregister = this.unregister.bind(this)
  }

  getChildContext() {
    const {
      update,
      pageView,
      register,
      unregister,
    } = this

    return {
      tracker: {
        update,
        pageView,
        register,
        unregister,
      },
    }
  }

  register(instance) {
    this.instances.push(instance)
  }

  unregister(instance) {
    const index = this.instances.indexOf(instance)
    this.instances.splice(index, 1)
  }

  instanceProps() {
    return this.instances.reduce((props, ref) => Object.assign(props, ref.props), {})
  }

  update() {
    if (!this._update) {
      this._update = Promise.resolve().then(() => {
        this._update = null
        if (this.props.setData) {
          this.props.setData(this.instanceProps())
        }
      })
    }
    return this._update
  }

  pageView(props) {
    if (!this.props.pageView) {
      return
    }
    if (this._pageView) {
      Object.assign(this._pageView, props)
    } else {
      this._pageView = { ...props }
      this.update().then(() => {
        this.props.pageView(this._pageView)
        this._pageView = null
      })
    }
  }

  render() {
    return Array.isArray(this.props.children) ? (
      <div>
        {this.props.children}
      </div>
    ) : this.props.children || null
  }
}
