import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  task: {},
  isUpdate: false,
  taskLoading: false
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTaskState: (state, action) => {
      state.isUpdate = true
      state.task = action.payload
    },
    resetIsUpdate: (state) => {
      state.isUpdate = false
      state.task = {}
    },
    setLoading: (state) => {
      state.taskLoading = !state.taskLoading
    }
  },
})

export const taskState = (state) => state.tasks
export const { setTaskState, resetIsUpdate, setLoading } = taskSlice.actions

export default taskSlice.reducer