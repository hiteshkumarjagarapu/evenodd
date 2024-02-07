import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {maths: 0}
  increment = () => {
    this.setState(prev => ({
      maths: prev.maths + Math.floor(Math.random() * 100),
    }))
  }
  butIncr = () => {
    const {maths} = this.state
    return maths % 2 == 0 ? (
      <p className="para">Count is Even</p>
    ) : (
      <p>Count is Odd</p>
    )
  }

  render() {
    const bval = this.butIncr()
    const {maths} = this.state
    return (
      <div className="bg">
        <div className="bg2">
          <h1 className="heading">Count {maths}</h1>
          {bval}
          <button type="button" onClick={this.increment}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
