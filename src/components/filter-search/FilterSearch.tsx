import { IoMdSearch } from 'react-icons/io'
import styles from './FilterSearch.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectNameFilter, setNameFilter } from '../../redux/slices/filterSlice'
export const FilterSearch = () => {
	const dispatch = useDispatch()
	const nameFilter = useSelector(selectNameFilter)
	return (
		<div className={styles.filterSearch}>
			<input value={nameFilter} onChange={e => dispatch(setNameFilter(e.target.value))} className={styles.inputFilter} type="text" />
			<IoMdSearch className={styles.searchIcon} />
		</div>
	)
}
