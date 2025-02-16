import { configureStore } from '@reduxjs/toolkit'
import FilterSlice from './slices/filterSlice'
const store = configureStore({
	reducer: {
		FilterSlice,
	},
})
export default store
