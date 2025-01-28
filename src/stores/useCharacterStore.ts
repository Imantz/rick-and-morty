import { defineStore } from 'pinia';
import { RickAndMortyService } from '../api/rickAndMortyService';
import type { Character } from '../types/types';

export const useCharacterStore = defineStore('character', {
  state: () => ({
    characters: [] as Character[],
    character: null as Character | null,
    loading: false,
    error: null as string | null,
    page: 1,
    perPage: 20,
    nextPage: true,
  }),
  actions: {
    async fetchCharacters() {
      if (this.loading || !this.nextPage) return;

      try {
        this.loading = true;
        this.error = null;
        const data = await RickAndMortyService.fetchCharacters(this.page);

        if (this.perPage === 0) {
          this.perPage = data.results.length;
        }

        if (!data.info.next) {
          this.nextPage = false;
        }

        this.characters = [...this.characters, ...data.results];
        this.page++;
      } catch (error: unknown) {
        this.error = error instanceof Error ? error.message : 'Failed to load characters.';
      } finally {
        // Just to see that there is a loading state
        await new Promise((resolve) => setTimeout(resolve, 1500));
        this.loading = false;
      }
    },

    async fetchCharacterById(id: number) {
      // Check if the character is already loaded in the list
      const existingCharacter = this.characters.find((char) => char.id === id);
      if (existingCharacter) {
        this.character = existingCharacter;
        return;
      }

      // If not found, fetch from the API
      try {
        this.loading = true;
        this.error = null;
        this.character = await RickAndMortyService.fetchCharacterById(id);
      } catch (error: unknown) {
        this.error = error instanceof Error ? error.message : 'Failed to load character.';
      } finally {
        this.loading = false;
      }
    },

    clearCharacter() {
      this.character = null;
      this.error = null;
    },

    resetCharacters() {
      this.characters = [];
      this.page = 1;
      this.error = null;
    },
  },
});
