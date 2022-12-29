import React, {useState } from 'react';
import { drawImage } from '../../lib/utils';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { ITextStyles } from '../../types/models';
import Button from '../Button/Button';
import styles from './ImagePreviewAndDownload.module.scss';

interface Props {
    image: string;
    phrases: string[];
    textStyles: ITextStyles;
}

const ImagePreviewAndDownload: React.FC<Props> = ({
    phrases,
    image,
    textStyles,
}) => {
    const { font, size, color } = textStyles;

    const [downloading, setDownloading] = useState<boolean>(false);

    const downloadImage = async (
        containerEl: string,
        imageEl: string,
        name: string,
        phrases: string[],
        textStyles: ITextStyles
    ) => {
        setDownloading(true);
        const preview = document.querySelector<HTMLElement>(containerEl);
        if (!preview) return;
    
        const canvas = await html2canvas(preview);
        const ctx = canvas.getContext('2d');
        const img = document.querySelector<HTMLImageElement>(imageEl);
    
        if (ctx && img) {
            drawImage(ctx, img, phrases, textStyles).then(() => {
                const dataURL = canvas.toDataURL('image/png');
                downloadjs(dataURL, `${name}.png`, 'image/png');
                setDownloading(false);
            }).catch(e => console.log(e));
        }
    };

    return (
        <article>
            <div className={`preview white-window ${styles.preview}`}>
                <img
                    src={image}
                    alt="Imagen a editar"
                    className={`image ${styles.image}`}
                />
                {phrases.map((phrase, index) => (
                    <p
                        key={index}
                        className={styles.text}
                        style={{
                            fontFamily: font,
                            fontSize: size,
                            color: color,
                        }}
                    >
                        {phrase ?? ''}
                    </p>
                ))}
            </div>
            <Button
                disabled={downloading}
                handleClick={() =>
                    downloadImage(
                        '.preview',
                        '.image',
                        'michifrase',
                        phrases,
                        textStyles
                    )
                }
            >
                Descargar imagen
            </Button> 
            {downloading && <span>Descargando...</span>}
        </article>
    );
};

export default ImagePreviewAndDownload;
