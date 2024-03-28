import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}

const counterSlise = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementSuccess: (state, action) => {
      state.count += action.payload
    },
    decrementSuccess: (state, action) => {
      state.count -= action.payload
    }
  }
})


export const incrementAsync = () => async (dispatch) => {
  setTimeout(() => {
    dispatch(incrementSuccess(1))
  }, 1000)
}

export const decrementAsync = () => async (dispatch) => {
  setTimeout(() => {
    dispatch(decrementSuccess(1))
  }, 1000)
}

export const { incrementSuccess, decrementSuccess } = counterSlise.actions

export default counterSlise.reducer
