<template>
  <InfiniteScrollView 
  :fetchItems="characterStore.fetchCharacters"
  :items="characterStore.characters"
  :loading="characterStore.loading"
  :error="characterStore.error"
  :loadMore="characterStore.nextPage"
  >
    <template #default="{ item: character }">
      <CharacterCard
        :character="character"
        :cardLayout="CardLayout.LIST_LAYOUT"
      />
    </template>
  </InfiniteScrollView>
</template>

<script setup lang="ts">
import InfiniteScrollView from '@/components/InfiniteScrollView.vue';
import { useCharacterStore } from '../stores/useCharacterStore';
import CharacterCard from '../components/character/CharacterCard.vue';
import { CardLayout } from '../types/types';

const characterStore = useCharacterStore();
</script>