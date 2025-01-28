import { API_BASE_URLS } from './apiConfig';
import { fetchJson } from './apiUtils';
import type { Character } from '../types/types';

interface ApiResponse<T> {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: T[];
}

export const RickAndMortyService = {
    baseUrl: API_BASE_URLS.rickAndMorty,

    constructUrl(endpoint: string): string {
        return `${this.baseUrl}${endpoint}`;
    },

    async fetchCharacters(page: number): Promise<ApiResponse<Character>> {
        const url = this.constructUrl(`/character?page=${page}`);
        return await fetchJson(url);
    },

    async fetchCharacterById(id: number): Promise<Character> {
        const url = this.constructUrl(`/character/${id}`);
        return await fetchJson(url);
    },
};
