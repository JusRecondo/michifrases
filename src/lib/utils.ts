import {
    API_KEY,
    API_URL_CATEGORIES,
    API_URL_IMAGES,
    API_URL_IMAGES_BY_CATEGORY,
    PROXY_SERVER,
} from './constants';
import { ITextStyles } from '../types/models';

const headers: any = { headers: { 'x-api-key': API_KEY } };

export const fetchAll = async () => {
    const response = await fetch(API_URL_IMAGES, headers);
    const body = await response.json();

    if (response.status >= 300) throw Error(body.message);

    return body;
};

export const fetchCategories = async () => {
    const response = await fetch(API_URL_CATEGORIES);
    const body = await response.json();

    if (response.status >= 300) throw Error(body.message);

    return body;
};

export const fetchCategory = async (id: string) => {
    const response = await fetch(`${API_URL_IMAGES_BY_CATEGORY}${id}`, headers);
    const body = await response.json();

    if (response.status >= 300) throw Error(body.message);

    return body;
};


/* Image preview and download */
export const drawImage = (
    ctx: CanvasRenderingContext2D,
    imageObj: HTMLImageElement,
    phrases: string[],
    textStyles: ITextStyles
) => {
    return new Promise(resolve => {
        const canvas = ctx.canvas;
        const canvasImg = new Image();

        var imgWidth = imageObj.naturalWidth;
        var screenWidth = canvas.width;
        var scaleX = 1;
        if (imgWidth > screenWidth) scaleX = screenWidth / imgWidth;
        var imgHeight = imageObj.naturalHeight;
        var screenHeight = canvas.height;
        var scaleY = 1;
        if (imgHeight > screenHeight) scaleY = screenHeight / imgHeight;
        var scale = scaleY;
        if (scaleX < scaleY) scale = scaleX;
        if (scale < 1) {
            imgHeight = imgHeight * scale;
            imgWidth = imgWidth * scale;
        }

        canvas.height = imgHeight;
        canvas.width = imgWidth;

        canvasImg.onload = () => {
            ctx.drawImage(
                canvasImg,
                0,
                0,
                imageObj.naturalWidth,
                imageObj.naturalHeight,
                0,
                30,
                imgWidth,
                imgHeight
            );
            drawText(ctx, phrases[0], textStyles, 'top', imgWidth, imgHeight);
            phrases[1] && drawText(ctx, phrases[1], textStyles, 'bottom', imgWidth, imgHeight);
            resolve(true);
        };
        canvasImg.crossOrigin = 'anonymous';
        canvasImg.src = PROXY_SERVER + imageObj.src + "?=not-cache";
    });
};


function drawText(
    ctx: CanvasRenderingContext2D,
    text: string,
    styles: ITextStyles,
    position: 'top' | 'bottom',
    imgWidth: number,
    imgHeight: number
) {
    const { font, size, color } = styles;
    ctx.fillStyle = color;
    ctx.textBaseline = 'middle';
    ctx.font = `600 ${size} ${font}`;
    ctx.textAlign = 'center';
    position === 'top' && ctx.fillText(text, imgWidth / 2, 80, 600);
    position === 'bottom' && ctx.fillText(text, imgWidth / 2, imgHeight - 50, 600);
}
