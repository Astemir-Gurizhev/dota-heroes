import styles from './Filter.module.css'
export const Filter = () => {
	return (
		<div className={styles.filter}>
			<img className='icon' src='./strength.png' alt='' />
			<img className='icon' src='./agi.png' alt='' />
			<img className='icon' src='./int.png' alt='' />
		</div>
	)
}
