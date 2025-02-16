import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
const store = configureStore({
	reducer: {
		filter: filterSlice,
	},
})
export default store
