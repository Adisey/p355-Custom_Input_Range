import React, { useState } from 'react';
import styles from './styles.module.scss'
import { Range, Test, RadioButtonsExamples } from '../Components'

function Index() {
    const [count, setCount] = useState (40);
    return (
        <div className={styles.app}>
            <div className={styles.body}>
                <div className={styles.container}>
                    <button onClick={() => setCount (count + 1)}>MAIN +</button>
                    MAIN Count: {count}
                </div>
                <div className={styles.container}>
                    <Test/>
                </div>
                <div className={styles.container}>
                    <button onClick={() => setCount (count + 1)}>Value +</button>
                    Range: {count}
                </div>
                <div className={styles.container}>
                    <Range
                        value={count}
                        min={0}
                        max={100}
                        step={1}
                        marker={10}
                        onChange={setCount}
                    />
                </div>
                <div className={styles.container}>
                    <Range
                        value={count}
                        min={0}
                        max={100}
                        step={2}
                        marker={10}
                        onChange={setCount}
                    />
                </div>
                <div className={styles.container}>
                    <Range
                        value={count}
                        min={0}
                        max={100}
                        step={5}
                        marker={25}
                        onChange={setCount}
                        suffix={'%'}
                    />
                </div>
                <div className={styles.container}>
                    <Range
                        value={count}
                        min={0}
                        max={70}
                        step={2}
                        marker={10}
                        onChange={setCount}
                        title={'Водка:'}
                        suffix={'º'}
                    />
                </div>
                <Range
                    value={count}
                    min={0}
                    max={73}
                    step={3}
                    marker={11}
                    onChange={setCount}
                />
                <Range
                    value={count}
                    min={0}
                    max={1800}
                    step={10}
                    marker={100}
                    onChange={setCount}
                />
                <div className={styles.container}>
                    Range: {count}
                    <Range
                        value={count}
                        min={0}
                        max={100}
                        step={1}
                        marker={10}
                        onChange={setCount}
                    />
                    <Range
                        value={count}
                        min={0}
                        max={100}
                        step={5}
                        marker={25}
                        onChange={setCount}
                        suffix={'%'}
                    />
                    <Range
                        value={count}
                        min={0}
                        max={70}
                        step={2}
                        marker={10}
                        onChange={setCount}
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
