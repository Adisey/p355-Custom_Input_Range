import React from 'react';
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const RadioButtons = (props) => {
    const {
        values,
        onSelect,
        profileProp,
    } = props;
    console.log (`--  --> "values" -> `, values);
    console.log (`--  --> "onSelect" -> `, onSelect);
    console.log (`--  --> "profileProp" -> `, profileProp);
    const onChange = (e) => {
        console.log (`--  --> "e" -> `, e);
    };

    return (
        <div className={styles.main}>
            <div className={styles.component}>
                <label htmlFor="tri1">описание11 - </label>
                <input type="radio" checked="checked" name="tri" id="tri1" onChange={onChange}/>
                <input type="radio" name="tri" id="tri2" onChange={onChange}/>
                <label htmlFor="tri2"> - описание21</label>
            </div>
        </div>
    );
};

export default RadioButtons;

RadioButtons.defaultProps = {
    values: [],
    onSelect: () => {
    }
};
RadioButtons.propType = {
    values: PropTypes.arrayOf (
        PropTypes.shape ({
            id: PropTypes.string.isRequired,
            label: PropTypes.string,
        }).isRequired
    ).isRequired,
    onSelect: PropTypes.func.isRequired,
    profileProp: PropTypes.shape ({
        id: PropTypes.number.isRequired,
        fullName: PropTypes.string.isRequired,
        gender: PropTypes.oneOf (['M', 'F']),
        birthDate: PropTypes.instanceOf (Date),
        isAuthor: PropTypes.bool.isRequired,
    })
};

