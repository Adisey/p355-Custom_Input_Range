import React, { useMemo } from 'react';
import styles from './styles.module.scss'
import './styles.scss'

function Range(props) {
    const {value, min, max, step, marker, onChange, prefix, suffix, title} = props;

    const calcMarker = useMemo(() => {
            console.log('-(RERENDER calcMarker ->', marker, step);
            return marker ? Math.ceil(marker / step) * step : (max - min) / 10;
        }, [marker, max, min, step]
    );

    const parts = useMemo(() => {
        console.log('-(RERENDER part ->', min, step, calcMarker);
        const median = Math.floor((calcMarker - min) / 2);
        const parts = {};
        const minPoint = 4;
        const maxPoint = 12;
        for (let point = min; point < calcMarker; point = point + step) {
            const heightPercent = point <= median ? (calcMarker - point * 2) / calcMarker : (point - median) * 2 / calcMarker;
            const height = (maxPoint - minPoint) * heightPercent + minPoint;
            console.log(`!!!!!!!!!!!1-point-(${ point })-heightPercent->`, heightPercent, 'height=>', height);
            parts[point] = height
        }
        return parts
    }, [min, step, calcMarker]);

    const scalePointJSX = useMemo(() => {
            console.log('-(RERENDER useMemo scalePointJSX)-min, max, step, calcMarker, value->', min, max, step, calcMarker, value);
            let part = 0;
            const scalePointJSX = [];
            for (let sc = min; sc <= max; sc = sc + step) {
                let indexInPart = sc - part;
                if (indexInPart >= calcMarker) {
                    part = part + calcMarker;
                    indexInPart = 0;
                }
                const itemStyle = {
                    'height': `${ parts[indexInPart] }px`,
                    backgroundColor: sc <= value ? '#51B5F3' : '#DDDDDD'
                };
                scalePointJSX.push(<div className={ styles.scalePointItem } key={ sc } style={ itemStyle }/>)
            }
            return scalePointJSX
        }, [min, max, step, calcMarker, value, parts]
    );

    const customStyle = useMemo(() => {
            const position = (value - min) / (max - min);
            console.log('-(RERENDER useMemo customStyle)-min, max, value, position ->', min, max, value, position);
            return {'--rangePosition': position};
        },
        [min, max, value]
    );

    const scaleValuesJSX = useMemo(() => {
            console.log('-(RERENDER useMemo scaleValuesJSX)-min, max, calcMarker->', min, max, calcMarker);
            const scaleValuesTMPJSX = [];
            for (let sc = min; sc <= max; sc = sc + calcMarker) {
                const showVal = `${ prefix ? prefix : '' }${ sc }${ suffix ? suffix : '' }`;
                scaleValuesTMPJSX.push(<div className={ styles.scaleValuesItem } key={ sc }>{ showVal }</div>)
            }

            return scaleValuesTMPJSX
        },
        [min, max, calcMarker, prefix, suffix]
    );

    const change = (event) => {
        !!onChange && onChange(event.target.value)
    };
    return (
        <div className={ styles.range }>
            { title ?
                (<div className={ styles.title }>
                    { title } <span>{ `${ prefix ? prefix : '' }${ value }${ suffix ? suffix : '' }` }</span>
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

