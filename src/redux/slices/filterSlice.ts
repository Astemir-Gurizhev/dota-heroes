import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilterState, IHero } from '../../types/types'

const initialState: IHero = {
	id: '',
	name: '',
	attr: '',
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setAttrFilter: (state, action: PayloadAction<string>) => {
			state.attr = action.payload
		},
	},
})

export const { setAttrFilter } = filterSlice.actions

export const selectAttrFilter = (state: { filter: IFilterState }) =>
	state.FilterSlice.attr

export default filterSlice.reducer
