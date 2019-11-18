import React from 'react';
import styles from './styles.module.scss'
import './styles.scss'

function Range(props) {
    const {value, min, max, step, marker, onChange, suffix, prefix} = props;

    const localMarker = marker ? Math.ceil(marker/step)*step : (max - min) / 10;
    console.log('-(Range)-localMarker->', localMarker, '-------------------------------------------------')

    const median = Math.floor((localMarker - min) / 2)
    console.log('-(Range)-median->', median);
    let part = 0;
    const parts = {};
    const minPoint = 4;
    const maxPoint = 12;
    for (let point = min; point < localMarker; point = point + step) {
        const heightPercent = point <= median ? (localMarker - point * 2) / localMarker : (point - median) * 2 / localMarker;
        const height =  (maxPoint-minPoint)*heightPercent +minPoint
        console.log(`-point-(${ point })-heightPercent->`, heightPercent, 'height=>', height)
        parts[point] = height
    }
    console.log('-(Range)-parts->', parts);

    const change = (event) => {
        !!onChange && onChange(event.target.value)
    };
    const scalePointJSX = [];
    for (let sc = min; sc <= max; sc = sc + step) {
        let indexInPart = sc - part
        if (indexInPart >= localMarker) {
            part = part + localMarker;
            indexInPart = 0
            console.log('-(----)-part->', part)
        }

        console.log('sc=>', sc, 'indexInPart->', indexInPart, 'height==>', parts[indexInPart])
        const itemStyle = {
            'height': `${parts[indexInPart]}px`,
            backgroundColor: sc<=value ? '#51B5F3': '#DDDDDD'
        };

        scalePointJSX.push(<div className={ styles.scaleItem } key={ sc } style={itemStyle} />)
    }
    const position = (value - min) / (max - min);
    const customStyle = {
        '--rangePosition': position
    };
    return (
        <div className={ styles.range }>
            <div className={ styles.scale }>
                { scalePointJSX }
            </div>
            <input
                value={ value }
                type="range"
                onChange={ change }
                min={ min }
                max={ max }
                step={ step }
                list="tickmarks"
                className={ styles.input }
                style={ customStyle }
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
    suffix: '',
    prefix: ''
};

