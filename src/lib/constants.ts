/* api */
export const PROXY_SERVER = 'https://web-production-8b36.up.railway.app/';
export const API_KEY = process.env.REACT_APP_API_KEY;
export const API_URL = 'https://api.thecatapi.com/v1';
export const API_URL_CATEGORIES = API_URL + '/categories'
export const API_URL_IMAGES = API_URL + '/images/search?limit=21&mime_types=jpg,png';
export const API_URL_IMAGES_BY_CATEGORY = API_URL_IMAGES + '&category_ids=';


/* text styles */
export const FONTS = [
    { id: 'Consolas', name: 'Consolas' },
    { id: 'Arial', name: 'Arial' },
    { id: 'Impact', name: 'Impact' },
    { id: 'Times New Roman', name: 'Times New Roman' },
];

export const SIZES = [
    { id: '3em', name: 'Pequeño' },
    { id: '4em', name: 'Mediano' },
    { id: '5em', name: 'Grande' },
    { id: '6em', name: 'Más Grande' },
];