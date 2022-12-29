import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ImagePreviewAndDownload from '../../components/ImagePreviewAndDownload/ImagePreviewAndDownload';
import Input from '../../components/Input/Input';

interface LocationState {
    cat: {
        url: string;
        width: number;
        height: number;
    }
}

const EditPage = () => {
    const [phrasesList, setPhrasesList] = useState<string[]>(['']);

    const navigate = useNavigate();

    const location = useLocation();
    const { cat } = location.state as LocationState;
    const { url, width, height } = cat;

    const handleInput = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const newText = e.target.value;
        const phrases = [...phrasesList];
        phrases[index] = newText;
        setPhrasesList(phrases);
    };

    //TODO resolver que los prrafos se puedan mover
    const addInput = () => {
        setPhrasesList([...phrasesList, '']);
    };

    //TODO agregar inputs para editar estilos del texto: color, tamaño, alineación, font

    return (
        <>
            <section>
                <h2>Agrega las frases</h2>
                <button onClick={() => navigate(-1)}>Volver</button>
            </section>
            <section>
                <ImagePreviewAndDownload
                    image={url}
                    width={width}
                    height={height}
                    phrases={phrasesList}
                />
                <article>
                    {phrasesList.map((phrase, index) => (
                        <Input
                            key={index}
                            label={'Escribe una frase'}
                            value={phrase}
                            onInput={e => handleInput(e, index)}
                        />
                    ))}

                    {phrasesList.length < 2 ? (
                        <button onClick={addInput}>Agregar otra frase</button>
                    ) : (
                        ''
                    )}
                </article>
            </section>
        </>
    );
};

export default EditPage;
