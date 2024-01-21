// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    if (this.state.count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }
  onApplyBreak = () => {
    if (this.state.count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="speed-inch">Speed is {count}mph</h1>
        <p className="details">Min Limit is 0mph, Max Limit is 200mph</p>

        <div>
          <button className="Accelerate-button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="break-button" onClick={this.onApplyBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
