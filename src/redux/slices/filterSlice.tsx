import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
		setAttrFilter: (state, action: PayloadAction<string>) => {
			state.attr = action.payload
		},
	},
})

export const { setAttrFilter } = filterSlice.actions

export const selectAttrFilter = (state: { filter: IHero }) => state.filter.attr

export default filterSlice.reducer
