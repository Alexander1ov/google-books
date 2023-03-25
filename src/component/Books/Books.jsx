import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBooks } from '../../store/booksReducer';
import BookCard from '../BookCard/BookCard';

import style from './Book.module.css';

const Books = () => {
  const dispatch = useDispatch()
  const { searchTexts, startIndex, category, books, sorted, status, error, total } = useSelector((state) => state.books)
  const addBooks = () => {
    dispatch(getBooks([searchTexts, category, sorted, startIndex]))
  }

  return (
    <section className="list">
      {status === 'loading' && <h2 className={style.h2}>Loading...</h2>}
      {error && <h2 className={style.h2}>error occurred: {error}</h2>}
      {!books.length && status === 'resolved' && < h2 className={style.h2}> Books not found</h2>}
      {total && books.length > 0 && <h2 className={style.h2}>Found {total} {total > 1 ? "matches" : "match"} </h2>}

      <div className={style.list}>
        {books && books.map((book, i) => {

          return (
            <BookCard
              key={i}
              id={i}
              image={book.volumeInfo.imageLinks?.thumbnail}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              published={book.volumeInfo.publishedDate}
              category={book.volumeInfo.categories}
            />
          )
        })
        }
      </div>

      {books.length > 0 && books.length < total &&
        < div className={style.load}>
          <button className={style.button} onClick={addBooks}>
            Load more...
          </button>
        </div>
      }

    </section >
  )
}

export default Books

