import React from 'react';

import MyButton from '../button/MyButton';

import style from './MyInputHeader.module.css';

const MyInput = ({ value, onChange, handleAction }) => {

    return (
        < div className={style['search-input']} >
            <div className={style.icon}>
                <svg>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
                </svg>
            </div>
            <div className={style.input}>
                <input
                    className={style.input}
                    type="search"
                    name="search"
                    placeholder='Search for anything...'
                    autoComplete='off'
                    value={value}
                    onChange={onChange}
                />
            </div>
            <MyButton type='submit' onClick={handleAction}>Search</MyButton>
        </div >
    )
}

export default MyInput
