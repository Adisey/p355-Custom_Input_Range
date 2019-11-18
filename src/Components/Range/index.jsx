import React from 'react';
import styles from './styles.module.scss'
import './styles.scss'

function Range(props) {
    const {value, min, max, step, marker, onChange, prefix, suffix, title} = props;

    const localMarker = marker ? Math.ceil(marker / step) * step : (max - min) / 10;
    const median = Math.floor((localMarker - min) / 2);
    let part = 0;
    const parts = {};
    const minPoint = 4;
    const maxPoint = 12;
    for (let point = min; point < localMarker; point = point + step) {
        const heightPercent = point <= median ? (localMarker - point * 2) / localMarker : (point - median) * 2 / localMarker;
        const height = (maxPoint - minPoint) * heightPercent + minPoint;
        console.log(`-point-(${ point })-heightPercent->`, heightPercent, 'height=>', height);
        parts[point] = height
    }

    const change = (event) => {
        !!onChange && onChange(event.target.value)
    };
    const scalePointJSX = [];
    const scaleValuesJSX = [
        <div className={ styles.scaleValuesItem }
             key={ -999 }>{ `${ prefix ? prefix : '' }${ min }${ suffix ? suffix : '' }` }</div>
    ];
    for (let sc = min; sc <= max; sc = sc + step) {
        let indexInPart = sc - part;
        if (indexInPart >= localMarker) {
            part = part + localMarker;
            indexInPart = 0;
            const showVal = `${ prefix ? prefix : '' }${ sc }${ suffix ? suffix : '' }`;
            scaleValuesJSX.push(<div className={ styles.scaleValuesItem } key={ sc }>{ showVal }</div>)
        }

        const itemStyle = {
            'height': `${ parts[indexInPart] }px`,
            backgroundColor: sc <= value ? '#51B5F3' : '#DDDDDD'
        };

        scalePointJSX.push(<div className={ styles.scalePointItem } key={ sc } style={ itemStyle }/>)
    }
    const position = (value - min) / (max - min);
    const customStyle = {
        '--rangePosition': position
    };
    return (
        <div className={ styles.range }>
            { title ?
                (<div className={ styles.title }>
                        {title} <span>{`${ prefix ? prefix : '' }${ value }${ suffix ? suffix : '' }`}</span>
                </div>) :
                null }
            <div className={ styles.scalePoint }>
                { scalePointJSX }
            </div>
            <input
                value={ value }
                type="range"
                onChange={ change }
                min={ min }
                max={ max }
                step={ step }
                className={ styles.input }
                style={ customStyle }
            />
            <div className={ styles.scaleValues }>
                { scaleValuesJSX }
            </div>
        </div>
    );
}

export default Range;

Range.defaultProps = {
    value: 20,
    min: 0,
    max: 100,
    step: 1
};

