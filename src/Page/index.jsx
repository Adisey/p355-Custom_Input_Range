import React, { useState } from 'react';
import styles from './styles.module.scss'
import { Range, Test, RadioButtonsExamples } from '../Components'

function Index() {
    const [val01, setVal01] = useState (40);
    return (
        <div className={ styles.app }>
            <div className={ styles.body }>
                <div className={ styles.container }>
                    <button onClick={ () => setCount(count + 1) }>MAIN +</button>
                    MAIN Count: { count }
                </div>
                <div className={ styles.container }>
                    <Test/>
                </div>
                <div className={ styles.container }>
                    <button onClick={ () => setVal01(val01 + 1) }>Value +</button>
                    Range: { val01 }
                </div>
                <div className={ styles.container }>
                    <Range
                        value={ val01 }
                        min={ 0 }
                        max={ 100 }
                        step={ 1 }
                        marker={ 10 }
                        onChange={ setVal01 }
                    />
                </div>
                <div className={ styles.container }>
                    <Range
                        value={ val01 }
                        min={ 0 }
                        max={ 100 }
                        step={ 2 }
                        marker={ 10 }
                        onChange={ setVal01 }
                    />
                </div>
                <div className={ styles.container }>
                    <Range
                        value={ val01 }
                        min={ 0 }
                        max={ 100 }
                        step={ 5 }
                        marker={ 25 }
                        onChange={ setVal01 }
                        suffix={ '%' }
                    />
                </div>
                <div className={ styles.container }>
                    <Range
                        value={ val01 }
                        min={ 0 }
                        max={ 70 }
                        step={ 2 }
                        marker={ 10 }
                        onChange={ setVal01 }
                        title={ 'Водка:' }
                        suffix={ 'º' }
                    />
                </div>
                <Range
                    value={ val01 }
                    min={ 0 }
                    max={ 73 }
                    step={ 3 }
                    marker={ 11 }
                    onChange={ setVal01 }
                />
                <Range
                    value={ val01 }
                    min={ 0 }
                    max={ 1800 }
                    step={ 10 }
                    marker={ 100 }
                    onChange={ setVal01 }
                />
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

