import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import style from './DetailsBook.module.css'
const DetailsBook = () => {
    const { id } = useParams()
    const { books } = useSelector((state) => state.books)
    const data = books[id]?.volumeInfo;
    const navigate = useNavigate();

    useEffect(() => {
        if (books?.length === 0) {
            navigate(ROUTES.HOME);
        }
    }, [books]);

    const handleBack = () => {
        navigate(ROUTES.BOOKS);
    };
    return (
        <section className={style.section}>
            <div className={style.container}>
                <div>
                    <img className={style.img} src={data?.imageLinks?.thumbnail} alt="" />
                </div>
                <div className={style.info}>
                    <p>{data?.categories}</p>
                    <h2 className={style.h2}>{data?.title}</h2>
                    <h3 className={style.h3}>{" " + data?.authors}</h3>
                    <div className={style.description}>
                        {data?.description}
                    </div>
                    <p>{data?.publishedDate}</p>
                </div>
            </div>
            <div className={style.button}>
                <button onClick={handleBack}>Back</button>
            </div>
        </section>
    )
}
export default DetailsBook
