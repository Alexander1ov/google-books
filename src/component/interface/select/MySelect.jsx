import React from 'react';

import style from './MySelect.module.css';

const MySelect = ({ defaultValue, onChange, options }) => {
    
    return (
        <select className={style.select}
            onChange={onChange}
        >
            <option defaultValue="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>)}
        </select>
    )
}

export default MySelect
