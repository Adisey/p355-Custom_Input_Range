import React from 'react';
import styles from './styles.module.scss'
import './styles.scss'

function Range(props) {
    const { value, min, max, step, onChange } = props;
    const change = (event) => {
        !!onChange && onChange (event.target.value)
    };
    const scaleJSX = [];
    for (let sc=min; sc <= max; sc=sc+step) {
        scaleJSX.push(<div className={styles.item} key={sc}/>)
    }
    const position = (value-min)/(max-min);
    const customStyle = {
        '--rangePosition': position
    };


    return (
        <div className={styles.range}>
            <div className={styles.scale}>
                {scaleJSX}
            </div>
            <input
                value={value}
                type="range"
                onChange={change}
                min={min}
                max={max}
                step={step}
                list="tickmarks"
                className={styles.input}
                style={customStyle}
            />
            <datalist id="tickmarks">
                <option value="0" label="0%"/>
                <option value="10"/>
                <option value="20"/>
                <option value="30"/>
                <option value="40"/>
                <option value="50" label="50%"/>
                <option value="60"/>
                <option value="70"/>
                <option value="80"/>
                <option value="90"/>
                <option value="100" label="100%"/>
            </datalist>
        </div>
    );
}

export default Range;

Range.defaultProps = {
    value: 20,
    min: 0,
    max: 100,
    step: 1,
};

