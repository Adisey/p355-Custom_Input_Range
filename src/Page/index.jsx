import React, { useState } from 'react';
import styles from './styles.module.scss'
import { Range, RadioButtonsExamples } from '../Components'

function Index() {
    const [val01, setVal01] = useState (40);
    return (
        <div className={styles.app}>
            <div className={styles.body}>
                <div className={styles.container}>
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
                </div>
                <div className={styles.container}>
                    <RadioButtonsExamples/>

                </div>
            </div>
        </div>
    );
}

export default Index;

