<template>
  <div class="character-description">
    <!-- Display name depending on mode -->
    <component
      :is="isListLayout ? 'h5' : 'h2'"
      class="character-description__name"
    >
      {{ character.name }}
    </component>

      <!-- List description -->
      <div v-if="isListLayout" class="character-description__list character-description__list--small">
        <p>Status: {{ character.status }}</p>
        <p>Species: {{ character.species }}</p>
        <p>Gender: {{ character.gender }}</p>
      </div>

      <!-- Single item description -->
     <div v-else class="character-description__list character-description__list--large">
        <p>Character Id: <span>{{ character.id }}</span></p>
        <p>Species: <span>{{ character.species }}</span></p>
        <p>Status: <span>{{ character.status }}</span></p>
        <p>Gender: <span>{{ character.gender }}</span></p>
        <p>Origin: <span>{{ character.origin.name || 'Unknown' }}</span></p>
        <p>Location: <span>{{ character.location.name }}</span></p>
        <p>
          Created Date:
          <span>
            {{ formatDateToYYYYDDMM(character.created)}}
          </span>
        </p>
     </div>

  </div>
</template>

<script setup lang="ts">
import type { Character } from '../../types/types';
import { formatDateToYYYYDDMM } from '../../utils/date';

defineProps({
  character: {
    type: Object as () => Character,
    required: true,
  },
  isListLayout: Boolean,
});
</script>

<style lang="scss" scoped>
@use "@/styles/_variables.scss" as *;

.character-description {
  &__name {
    margin-bottom: 8px;
  }

  h5 {
    margin-top: 8px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    min-width: 200px;

    &--small {
      gap: 4px;
    }

    &--large {
      gap: 8px;
    }
    
    p {
      span {
        color: $color-dark;
      }
    }
  }
}
</style>
