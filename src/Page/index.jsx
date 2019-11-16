import React, { useState } from 'react';
import styles from './styles.module.scss'
import { Range } from '../Components'

function Index() {
    const [val01, setVal01] = useState (50)
    return (
        <div className={styles.app}>
            <div className={styles.body}>
                Range: {val01}
                <Range
                    value={val01}
                    min={0}
                    max={100}
                    step={1}
                    onChange={setVal01}
                />
                <Range
                    value={val01}
                    min={0}
                    max={100}
                    step={5}
                    onChange={setVal01}
                />
                <Range
                    value={val01}
                    min={0}
                    max={100}
                    step={10}
                    onChange={setVal01}
                />
            </div>
        </div>
    );
}

export default Index;

