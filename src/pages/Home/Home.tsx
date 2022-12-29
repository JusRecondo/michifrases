import React, { useEffect, useState } from 'react';
import SelectCategory from '../../components/SelectCategory/SelectCategory';
import { fetchAll, fetchCategory } from '../../lib/utils';
import { ICat } from '../../types/models';
import { Link } from 'react-router-dom';
import style from './Home.module.scss';

const Home = () => {
    const [catPictures, setCatPictures] = useState<ICat[]>([]);

    useEffect(() => {
        fetchAll()
            .then(data => {
                setCatPictures(data);
            })
            .catch(e => console.log(e));
    }, []);

    const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const categoryId = e.target.value;
        fetchCategory(categoryId)
            .then(data => {
                setCatPictures(data);
            })
            .catch(e => console.log(e));
    };

    return (
        <section className="window">
            <div className="title-bar">
                <div className="title-bar-text">
                    <p>Selecciona una foto</p>
                </div>
            </div>
            <div className="window-body">
                <SelectCategory onChange={handleSelectCategory} />
                {catPictures.length ? (
                    <ul className={style.list}>
                        {catPictures.map(cat => (
                            <li className={style.listItem} key={cat.id}>
                                <Link
                                    to={`/michifrases/edit-cat/${cat.id}`}
                                    state={{ cat }}
                                >
                                    <img src={cat.url} alt="Funny Cat" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </section>
    );
};

export default Home;
