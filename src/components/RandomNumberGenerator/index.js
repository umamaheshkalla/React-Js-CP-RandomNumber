import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNo: 0}

  OnIncrement = () => {
    this.setState({randomNo: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNo} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.OnIncrement} type="button">
            Generate
          </button>
          <h1 className="number">{randomNo}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
