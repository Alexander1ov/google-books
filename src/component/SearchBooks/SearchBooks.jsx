import React from 'react'

import style from './SearchBooks.module.css'

const SearchBooks = ({ value, updateValue, handleAction, handleSort, categorySort }) => {
    const search = (e) => updateValue(e.target.value)
    return (
        <div className={style.search}>
            <form className={style.form} action="">
                <div className={style['search-input']}>
                    <div className={style.icon}>
                        <svg>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
                        </svg>
                    </div>
                    <div className={style.input}>
                        <input
                            type="search"
                            name="search"
                            placeholder='Search for anything...'
                            autoComplete='off'
                            value={value}
                            onChange={search}
                        />
                    </div>
                    <button type='submit' onClick={handleAction}>Search</button>
                </div>
                <div className={style.sorting}>

                    <select defaultValue="Categories"
                        onChange={categorySort}
                    >
                        <option disabled value="Categories">Categories</option>
                        <option value="">All</option>
                        <option value="art">Art</option>
                        <option value="biography">Biography</option>
                        <option value="computers">Computers</option>
                        <option value="history">History</option>
                        <option value="medical">Medical</option>
                        <option value="poetry">Poetry</option>
                    </select>
                    <select defaultValue="Sort"
                        onChange={handleSort}
                    >
                        <option disabled value="Sort">Sort</option>
                        <option value="relevance">Relevance</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
export default SearchBooks
