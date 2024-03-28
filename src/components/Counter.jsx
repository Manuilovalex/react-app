import { useSelector } from 'react-redux'
import { decrementAsync, incrementAsync } from '../redux/counterSlise'
import { useAppDispatch } from '../redux/store'

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => dispatch(incrementAsync())}>Increment</button>
      <button onClick={() => dispatch(decrementAsync())}>Decrement</button>
    </div>
  )
}

export default Counter
