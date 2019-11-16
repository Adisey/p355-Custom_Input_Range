import React, {useState} from 'react';
import styles from './styles.module.scss'
import { Range } from '../Components'

function Index() {
    const [val01, setVal01] =useState(50)
    return (
        <div className={styles.app}>
            <div className={styles.body}>
                header
                <Range
                value={val01}
                min={10}
                max={70}
                onChange={setVal01}
                />
            </div>
        </div>
    );
}

export default Index;

