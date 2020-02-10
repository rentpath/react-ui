import { PureComponent } from 'react'

// interface IProps {
//   onScrollDown: () => void
//   onScrollUp: () => void
// }

export default class ScrollListener extends PureComponent {
  previousScrollHeight = 0

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    const { onScrollDown, onScrollUp } = this.props

    const currentScrollHeight = window.pageYOffset

    if ((currentScrollHeight < this.previousScrollHeight) || currentScrollHeight <= 0) {
      onScrollUp && onScrollUp()
    } else {
      onScrollDown && onScrollDown()
    }

    this.previousScrollHeight = currentScrollHeight
  }

  render() {
    return null
  }
}
