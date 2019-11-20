import React from 'react';
import {RadioButtons} from '../'
import styles from './styles.module.scss'

function RadioButtonsExamples() {

    return (
        <div className={ styles.range }>
            Radio Buttons Examples
            <RadioButtons
            values={[
                {label: 'L1', val: 'l1'},
                {label: 'L2', val: 'l2'}
            ]}
            profileProp={[{id:'22'}]}
            />

        </div>
    );
}

export default RadioButtonsExamples;

