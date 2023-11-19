import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onClickedButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    const value = isSubscribed ? 'Subscribed' : 'Subscribe'

    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="title">Welcome</h1>
          <p className="description">Thank you! Happy Learning</p>
          <button className="btn" onClick={this.onClickedButton} type="button">
            {value}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
