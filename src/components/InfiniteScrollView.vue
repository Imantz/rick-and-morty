<template>
  <div>
    <!-- Error Message -->
    <div v-if="error">
      {{ error }}
    </div>

    <!-- No Items Fallback -->
    <div v-else-if="!loading && items.length === 0">
      <p>No items available to display.</p>
    </div>

    <!-- Items List -->
    <div v-else class="infinite-scroll-list" role="list">
      <div
        class="infinite-scroll-list__item"
        v-for="(item, index) in items"
        :key="item.id || index"
        role="listitem"
      >
        <slot :item="item" />
      </div>
    </div>

    <!-- Loading Spinner -->
    <LoadingSpinner v-if="loading" class="infinite-scroll-list__spinner" />
  </div>
</template>

<script setup lang="ts">
import { useInfiniteScroll } from '../composables/useInfiniteScroll';
import LoadingSpinner from '../components/LoadingSpinner.vue';

type Item = { id: number } & Record<string, unknown>;

// Define props
interface InfiniteScrollProps<T = Item> {
  loading: boolean;
  error: string | null;
  items: T[];
  fetchItems: () => Promise<void>;
  loadMore: boolean;
}

const props = defineProps<InfiniteScrollProps>();

useInfiniteScroll(props.fetchItems, props.loadMore);
</script>

<style scoped lang="scss">
.infinite-scroll-list {
  display: grid;
  gap: 24px;
  grid-row-gap: 32px;

  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }

  &__item {
    width: 100%;
    min-height: 324px;
  }

  &__spinner {
    margin-top: 24px;
  }
}
</style>
