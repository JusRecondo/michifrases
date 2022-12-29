export const API_KEY = process.env.API_KEY ?? '';
export const API_URL = 'https://api.thecatapi.com/v1';
export const API_URL_CATEGORIES = API_URL + '/categories'
export const API_URL_IMAGES = API_URL + '/images/search?limit=20&mime_types=jpg,png';
export const API_URL_IMAGES_BY_CATEGORY = API_URL_IMAGES + '&category_ids=';

export const CATEGORIES = ['boxes', 'caturday', 'clothes', 'funny', 'hats', 'kittens', 'sinks', 'space', 'sunglasses', 'ties'];


