<template>
  <div>
    <!-- Error Message -->
    <div v-if="characterStore.error">
      {{ characterStore.error }}
    </div>

    <!-- Character Details -->
    <CharacterCard
      v-if="!characterStore.error && characterStore.character"
      :character="characterStore.character"
      :cardLayout=CardLayout.SINGLE_CARD_LAYOUT
    />

    <!-- No Character Fallback -->
    <div v-else-if="!characterStore.loading && !characterStore.character">
      <p>Character details could not be loaded.</p>
    </div>

    <!-- Back Button -->
    <BaseButton class="button-back" isLink @click="navigateBack">Back</BaseButton>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { useCharacterStore } from '../stores/useCharacterStore';
import BaseButton from './../components/BaseButton.vue';
import CharacterCard from './../components/character/CharacterCard.vue';
import { useRouter, useRoute } from 'vue-router';
import { CardLayout } from './../types/types';

const characterStore = useCharacterStore();
const route = useRoute();
const router = useRouter();

onMounted(() => {
  const characterId = Number(route.params.id);
  
  if (!isNaN(characterId)) {
    characterStore.fetchCharacterById(characterId);
  }
});

onBeforeUnmount(() => {
  characterStore.clearCharacter();
});

const navigateBack = () => {
  router.back();
};
</script>

<style lang="scss" scoped>
@use "@/styles/_variables.scss" as *;

.button-back {
  margin-top: $spacing-medium;
}
</style>
