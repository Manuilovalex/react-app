import { configureStore} from '@reduxjs/toolkit'
import counterReductor from './counterSlise'
import { useDispatch } from 'react-redux'

const logger = (storeApi) => (next) => (action) => {
  const prevState = storeApi.getState().counter.count
  const result = next(action)
  const nextState = storeApi.getState().counter.count

console.log(`Prev state: ${prevState}, 
Dispatch action ${(action).type}, 
Next state: ${nextState}`)

return result
}

const store = configureStore({
  reducer: {
    counter: counterReductor
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export const useAppDispatch = () => useDispatch()

export default store
