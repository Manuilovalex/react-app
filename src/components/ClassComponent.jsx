import { Component } from 'react'

class ButtonClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0
    }))
  }

  resetCount = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.resetCount}>Reset</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    )
  }
}

export default ButtonClass
