import { environment } from '@env';
export const COLLECTION: Record<string, string> = {
    users: 'users',
    posts: 'posts',
    comments: 'comments',
};
export const baseUrl = environment.apiUrl;

export const API_URL = (key: string) => `${baseUrl}/${COLLECTION[key]}`;
