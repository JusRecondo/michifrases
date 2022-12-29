import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ImagePreviewAndDownload from '../../components/ImagePreviewAndDownload/ImagePreviewAndDownload';
import Input from '../../components/TextInput/TetxInput';
import Select from '../../components/Select/Select';
import { FONTS, SIZES } from '../../lib/constants';
import { ITextStyles } from '../../types/models';
import styles from './EditPage.module.scss';
import Button from '../../components/Button/Button';

interface ILocationState {
    cat: {
        url: string;
    };
}

const EditPage = () => {
    const [phrasesList, setPhrasesList] = useState<string[]>(['']);

    const [textStyles, setTextStyles] = useState<ITextStyles>({
        font: 'Consolas',
        size: '5em',
        color: '#000000',
    });

    const navigate = useNavigate();

    const location = useLocation();
    const { cat } = location.state as ILocationState;
    const { url } = cat;

    const handleInput = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const newText = e.target.value;
        const phrases = [...phrasesList];
        phrases[index] = newText;
        setPhrasesList(phrases);
    };

    const addInput = () => {
        setPhrasesList([...phrasesList, '']);
    };

    const changeFont = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const chosenFont = e.target.value;
        if (chosenFont) {
            setTextStyles({
                ...textStyles,
                font: chosenFont,
            });
        }
    };

    const changeSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const chosenSize = e.target.value;
        if (chosenSize) {
            setTextStyles({
                ...textStyles,
                size: chosenSize,
            });
        }
    };

    const changeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        const chosenColor = e.target.value;
        setTextStyles({
            ...textStyles,
            color: chosenColor,
        });
    };

    return (
        <section className="window">
            <div className="title-bar">
                <div className="title-bar-text">
                    <p>Agrega las frases</p>
                </div>
                <div className="title-bar-controls">
                    <button aria-label="Close" onClick={() => navigate(-1)}></button>
                </div>
            </div>
            <div className="window-body">
                <Button handleClick={() => navigate(-1)}>Volver</Button>

                <section className={styles.editSection}>
                    <ImagePreviewAndDownload
                        image={url}
                        phrases={phrasesList}
                        textStyles={textStyles}
                    />
                    <fieldset className={styles.inputsSection}>
                        {phrasesList.map((phrase, index) => (
                            <Input
                                maxLength={40}
                                key={index}
                                label={'Escribe una frase'}
                                value={phrase}
                                onInput={e => handleInput(e, index)}
                            />
                        ))}

                        {phrasesList.length < 2 ? (
                            <Button handleClick={addInput}>
                                Agregar otra frase
                            </Button>
                        ) : (
                            ''
                        )}

                        <div className={styles.textStyles}>
                            <div className="field-row-stacked">
                                <Select
                                    label="Tipografía:"
                                    options={FONTS}
                                    onChange={changeFont}
                                    value={textStyles.font}
                                />
                            </div>
                            <div className="field-row-stacked">
                                <Select
                                    label="Tamaño:"
                                    options={SIZES}
                                    onChange={changeSize}
                                    value={textStyles.size}
                                />
                            </div>
                            <div className="field-row-stacked">
                                <label className="label">
                                    Color:
                                    <input
                                        type="color"
                                        value={textStyles.color}
                                        onChange={changeColor}
                                    />
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </section>
            </div>
        </section>
    );
};

export default EditPage;
