import React from 'react';
import styles from './styles.module.scss'
import { Range } from '../Components'

function Index() {
    return (
        <div className={styles.app}>
            <div className={styles.body}>
                header
                <Range/>
            </div>
        </div>
    );
}

export default Index;

