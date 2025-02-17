import { useState } from 'react';
import { FilterAtr } from '../filter-atr/FilterAtr'; 
import styles from './Filter.module.css';

export const Filter = () => {
    const [activeAttr, setActiveAttr] = useState('');

    return (
        <div className={styles.filter}>
            <FilterAtr activeAttr={activeAttr} setActiveAttr={setActiveAttr} />
        </div>
    );
};