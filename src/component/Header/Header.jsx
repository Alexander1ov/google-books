import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { changeCategory, changeSort, cleanBooks, getBooks, setSearchText } from '../../store/booksReducer';

import { ROUTES } from '../../constants/routes';
import SearchBooks from '../SearchBooks/SearchBooks';

import style from './Header.module.css';

const Header = () => {
    const [book, setBook] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { searchText, sorted, category } = useSelector((state) => state.books)

    const handleAction = (e) => {
        e.preventDefault()
        if (book.trim().length) {
            dispatch(cleanBooks())
            dispatch(getBooks([book, category, sorted, 0]))
            dispatch(setSearchText(book))
            setBook('');
            navigate(ROUTES.BOOKS)
        }
    }

    const handleSort = (e) => {
        dispatch(changeSort(e.target.value))
        if (searchText) {
            dispatch(cleanBooks([]))
            dispatch(getBooks([searchText, category, e.target.value, 0]))
        }
    }

    const categorySort = (e) => {
        dispatch(changeCategory(e.target.value))
        if (searchText) {
            dispatch(cleanBooks([]))
            dispatch(getBooks([searchText, e.target.value, sorted, 0]))
        }
    }

    return (
        <header className={style.header}>
            <Link to={ROUTES.HOME}>
                <h1>Search for books</h1>
            </Link>
            <SearchBooks
                value={book}
                updateValue={setBook}
                handleAction={handleAction}
                handleSort={handleSort}
                categorySort={categorySort}
            />
        </header>
    )
}

export default Header
