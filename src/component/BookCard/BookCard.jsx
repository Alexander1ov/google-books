import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Books/Book.module.css'

const BookCard = ({ id, image, title, author, published, category }) => {
    return (
        <Link to={`/books/${id}`}>
            <div className={style['card-container']}>
                <img src={image} alt="" />
                <div className={style.desc}>
                    {category ?
                        <div> Category: {category}</div>
                        : <div> No category</div>}
                    <h2>{title}</h2>
                    {author ?
                        <h3>Author: {author}</h3>
                        : <h3>Author: unknown</h3>}
                    <p>Published: {published ? published.substring(0, 4) : 'Not available'}</p>
                </div>
            </div>
        </Link>
    )
}

export default BookCard