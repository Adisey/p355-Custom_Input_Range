import React, { useState } from 'react';
import styles from './styles.module.scss'
import { Range } from '../Components'

function Index() {
    const [val01, setVal01] = useState (10)
    return (
        <div className={styles.app}>
            <div className={styles.body}>
                Range: {val01}
                <Range
                    value={val01}
                    min={0}
                    max={30}
                    step={1}
                    marker={10}
                    onChange={setVal01}
                />
                <Range
                    value={val01}
                    min={0}
                    max={30}
                    step={1}
                    marker={5}
                    onChange={setVal01}
                />
                <Range
                    value={val01}
                    min={0}
                    max={25}
                    step={2}
                    marker={7}
                    onChange={setVal01}
                />
            </div>
        </div>
    );
}

export default Index;

