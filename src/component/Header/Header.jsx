import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { ROUTES } from '../../utils/routes'

import style from './Header.module.css'
import SearchBooks from '../SearchBooks/SearchBooks'
import { changeCategory, changeSort, cleanBooks, getBooks, searchText } from '../store/booksReducer'


const Header = () => {
    const [book, setBook] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { searchTexts, sorted, category } = useSelector((state) => state.books)
    const handleAction = (e) => {
        e.preventDefault()
        if (book.trim().length) {
            dispatch(cleanBooks([]))
            dispatch(getBooks([book, category, sorted, 0]))
            dispatch(searchText(book))
            setBook('');
            navigate(ROUTES.BOOKS)
        }
    }
    const handleSort = (e) => {
        dispatch(changeSort(e.target.value))
        if (searchTexts) {
            dispatch(cleanBooks([]))
            
            dispatch(getBooks([searchTexts, category, e.target.value, 0]))
        }
    }
    const categorySort = (e) => {
        dispatch(changeCategory(e.target.value))
        if (searchTexts) {
            dispatch(cleanBooks([]))
            dispatch(getBooks([searchTexts, e.target.value, sorted, 0]))
        }
    }
    return (
        <header>
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
