import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../redux/reducers/taskSlice'

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
})