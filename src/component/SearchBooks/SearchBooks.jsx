import React from 'react';

import MyInput from '../interface/input/MyInputHeader';
import MySelect from '../interface/select/MySelect';

import style from './SearchBooks.module.css';

const SearchBooks = ({ value, updateValue, handleAction, handleSort, categorySort }) => {
    const search = (e) => updateValue(e.target.value)

    return (
        <div className={style.search}>
            <form className={style.form} action="">
                <MyInput value={value} onChange={search} handleAction={handleAction} />
                <div className={style.sorting}>
                    <MySelect
                        defaultValue="Categories"
                        onChange={categorySort}
                        options={[
                            { value: '', name: 'All' },
                            { value: 'art', name: 'Art' },
                            { value: 'biography', name: 'Biography' },
                            { value: 'computers', name: 'Computers' },
                            { value: 'history', name: 'History' },
                            { value: 'medical', name: 'Medical' },
                            { value: 'poetry', name: 'Poetry' }
                        ]}
                    />
                    <MySelect
                        defaultValue="Sort"
                        onChange={handleSort}
                        options={[
                            { value: 'relevance', name: 'Relevance' },
                            { value: 'newest', name: 'Newest' }

                        ]}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBooks
