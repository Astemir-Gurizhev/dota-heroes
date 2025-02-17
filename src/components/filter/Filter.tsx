import { useState } from 'react';
import { FilterAtr } from '../filter-atr/FilterAtr'; 
import styles from './Filter.module.css';
import { FilterSearch } from '../filter-search/FilterSearch'

export const Filter = () => {
    const [activeAttr, setActiveAttr] = useState('');

    return (
        <div className={styles.filter}>
            <FilterAtr activeAttr={activeAttr} setActiveAttr={setActiveAttr} />
						<FilterSearch />
        </div>
    );
};