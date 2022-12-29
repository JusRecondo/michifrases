import {
    API_KEY,
    API_URL_CATEGORIES,
    API_URL_IMAGES,
    API_URL_IMAGES_BY_CATEGORY,
} from './constants';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

/* Fetch data */

const params: RequestInit = {
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
    },
};

export const fetchAll = async () => {
    const response = await fetch(API_URL_IMAGES, params);
    const body = await response.json();

    if (response.status >= 300) throw Error(body.message);

    return body;
};

export const fetchCategories = async () => {
    const response = await fetch(`${API_URL_CATEGORIES}`, params);
    const body = await response.json();

    if (response.status >= 300) throw Error(body.message);

    return body;
};

export const fetchCategory = async (id: string) => {
    const response = await fetch(`${API_URL_IMAGES_BY_CATEGORY}${id}`, params);
    const body = await response.json();

    if (response.status >= 300) throw Error(body.message);

    return body;
};

/* Image preview and download */
export const downloadImage = async (
    containerEl: string,
    imageEl: string,
    width: number,
    height: number,
    name: string
) => {
    const preview = document.querySelector<HTMLElement>(containerEl);
    if (!preview) return;

    const canvas = await html2canvas(preview);
    const ctx = canvas.getContext('2d');
    const img = document.querySelector<HTMLImageElement>(imageEl);

    if (ctx && img) {
        drawImage(ctx, img, width, height).then(() => {
            const dataURL = canvas.toDataURL('image/png');
            downloadjs(dataURL, `${name}.png`, 'image/png');
        });
    }
};

const drawImage = (
    ctx: CanvasRenderingContext2D,
    image: HTMLImageElement,
    imageWidth: number,
    imageHeight: number
) => {
    return new Promise(resolve => {
        const { x, y, width, height } = image.getBoundingClientRect();
        console.log(
            'dx: '+ 0,
            'dy: ' + 0,
            'dW: ' + imageWidth,
            'dH: ' + imageHeight,
            'sx: ' + x,
            'sy: ' + y,
            width,
            height)
        const canvasImg = new Image();

        canvasImg.onload = () => {
            ctx.drawImage(
                canvasImg,
                0,
                0,
                imageWidth,
                imageHeight,
            );
            resolve(true);
        };
        canvasImg.crossOrigin = 'anonymous';
        canvasImg.src = 'https://cors-anywhere.herokuapp.com/' + image.src;
    });
};
