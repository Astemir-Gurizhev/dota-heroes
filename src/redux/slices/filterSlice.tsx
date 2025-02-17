import { createSlice } from '@reduxjs/toolkit'
import { IHero } from '../../types/types'

const initialState: IHero = {
	id: '',
	name: '',
	attr: '',
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setAttrFilter: (state, action) => {
			state.attr = action.payload
		},
		setNameFilter: (state, action) => {
			state.name = action.payload
		},
	},
})

export const { setAttrFilter, setNameFilter } = filterSlice.actions

export const selectAttrFilter = (state: { filter: IHero }) => state.filter.attr
export const selectNameFilter = (state: { filter: IHero }) => state.filter.name

export default filterSlice.reducer
