import React, { useState } from 'react';
import styles from './styles.module.scss'
import { Range } from '../Components'

function Index() {
    const [val01, setVal01] = useState (40);
    return (
        <div className={styles.app}>
            <div className={styles.body}>
                Range: {val01}
                <Range
                    value={val01}
                    min={0}
                    max={100}
                    step={1}
                    marker={10}
                    onChange={setVal01}
                />
                <Range
                    value={val01}
                    min={0}
                    max={100}
                    step={2}
                    marker={10}
                    onChange={setVal01}
                />
                <Range
                    value={val01}
                    min={0}
                    max={100}
                    step={5}
                    marker={25}
                    onChange={setVal01}
                    suffix={'%'}
                />
                <Range
                    value={val01}
                    min={0}
                    max={70}
                    step={2}
                    marker={10}
                    onChange={setVal01}
                    title={'Водка:'}
                    suffix={'º'}
                />
                <Range
                    value={val01}
                    min={0}
                    max={73}
                    step={3}
                    marker={11}
                    onChange={setVal01}
                />
                <Range
                    value={val01}
                    min={0}
                    max={1800}
                    step={10}
                    marker={100}
                    onChange={setVal01}
                />
            </div>
        </div>
    );
}

export default Index;

