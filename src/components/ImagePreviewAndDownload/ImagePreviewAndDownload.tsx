import React from 'react';
import { downloadImage } from '../../lib/utils';
import styles from './ImagePreviewAndDownload.module.scss';

interface Props {
    image: string;
    phrases: string[];
    width: number;
    height: number;
}

const ImagePreviewAndDownload: React.FC<Props> = ({
    phrases,
    image,
    width,
    height,
}) => {


    return (
        <article>
            <div className={`preview ${styles.preview}`}>
                <img
                    src={image}
                    alt="Imagen a editar"
                    className={`image ${styles.image}`}
                />
                {phrases.map((phrase, index) => (
                    <p key={index} className={styles.text}>
                        {phrase}
                    </p>
                ))}
            </div>
            <button
                onClick={() =>
                    downloadImage(
                        '.preview',
                        '.image',
                        width,
                        height,
                        'michifrase'
                    )
                }
            >
                Descargar imagen
            </button>
        </article>
    );
};

export default ImagePreviewAndDownload;
