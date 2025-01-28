<template>
  <div class="character-card__image-container">
    <CachedImage
      :src="image"
      :alt="`Image of ${altText}`"
      class="character-card__image"
      :class="{ 'character-card__image--rounded': isListLayout }"
      loading="lazy"
      :width="isListLayout ? 220 : 500"
      :height="isListLayout ? 220 : 500"
    />
  </div>
</template>

<script setup lang="ts">
import CachedImage from '@/components/CachedImage.vue';

defineProps({
  image: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
  isListLayout: Boolean,
});
</script>

<style lang="scss" scoped>
.character-card__image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.character-card__image {
  height: 500px;
  max-width: 500px;
  width: 100%;
  
  border-radius: 8px;

  @media (max-width: 960px) {
    height: auto;
  }

  &--rounded {
    border-radius: 8px 8px 0 0; /** List view only has top border radius */
    width: 100%;
    height: auto;
  }
}
</style>
