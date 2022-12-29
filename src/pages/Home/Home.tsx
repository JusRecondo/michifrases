import React, { useEffect, useState } from 'react';
import SelectCategory from '../../components/SelectCategory/SelectCategory';
import { fetchAll, fetchCategory } from '../../lib/utils';
import { ICat } from '../../types/models';
import { Link } from "react-router-dom";

const Home = () => {

    const [catPictures, setCatPictures] = useState<ICat[]>([]);

    useEffect(() => {
        fetchAll().then(data => {
            setCatPictures(data);
        }).catch(e => console.log(e))
    }, []);

    const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const categoryId = e.target.value;
        fetchCategory(categoryId).then(data => {
            setCatPictures(data);
        }).catch(e => console.log(e))
    }

    return (
        <>
            <section>
                <h2>Selecciona una foto</h2>
                <SelectCategory onChange={handleSelectCategory}/>
                    {catPictures.length ? 
                        <ul>{catPictures.map( cat => (
                            <li key={cat.id}>
                                <Link
                                    to={`/edit-cat/${cat.id}`}
                                    state={{ cat }}
                                >
                                    <img src={cat.url} alt="Funny Cat" />
                                </Link>
                            </li>
                        ))}

                        </ul>
                    : <p>Loading...</p>}
                
            </section>
        </>
    );
};

export default Home;
