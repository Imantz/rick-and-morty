<template>
  <component
    :is="componentTag"
    :to="isListLayout ? `/character/${character.id}` : undefined"
    class="character-card"
    :class="`character-card--${cardLayout}`"
    tabindex="0"
  >
    <div :class="['character-card__container', isListLayout ? '' : 'character-card__row']">
      <CharacterCardImage :image="character.image" :altText="character.name" :isListLayout="isListLayout" />
      <CharacterCardDescription :character="character" :isListLayout="isListLayout" />
    </div>
  </component>
</template>

<script setup lang="ts">
import CharacterCardDescription from './CharacterDescription.vue';
import CharacterCardImage from './CharacterImage.vue';
import type { Character } from '../../types/types';
import { CardLayout } from '../../types/types';
import { computed } from 'vue';

const props = defineProps({
  character: {
    type: Object as () => Character,
    required: true,
  },
  cardLayout: {
    type: String as () => CardLayout,
    required: true,
  },
});

const { cardLayout } = props;

const isListLayout = computed(() => cardLayout === CardLayout.LIST_LAYOUT);
const componentTag = computed(() => (isListLayout.value ? 'router-link' : 'div'));
</script>

<style lang="scss" scoped>
@use "@/styles/_variables.scss" as *;

.character-card__row {
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: 690px) {
    flex-direction: column;
    justify-self: center;
  }
}
</style>
