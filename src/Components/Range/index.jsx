import React from 'react';
import styles from './styles.module.scss'

function Range(props) {
    const {value, onChange} = props
    const change =(event)=>{
        !!onChange && onChange(event.target.value)
    }
    return (
        <div className={styles.range}>
            <input value={value} type="range" onChange={change}/>
        </div>
    );
}

export default Range;

Range.defaultProps = {
    value: 20,
    min: 0,
    max: 100,
};

