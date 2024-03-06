import { useState } from 'react'

const Button = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }
  const decrementCount = () => {
    count > 0 ? setCount(count - 1) : count(0)
  }
  const resetCount = () => {
    setCount(0)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}

export default Button
