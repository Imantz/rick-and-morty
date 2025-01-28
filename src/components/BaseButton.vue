<template>
  <button
    class="button"
    :class="{
      'button--link': isLink,
      'button--hoverable': hoverable,
    }"
    :role="isLink ? 'link' : 'button'"
    :style="{ color }"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  isLink: {
    type: Boolean,
    default: false,
  },
  hoverable: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
  },
  marginTop: {
    type: String,
    default: '0',
  },
});

const emit = defineEmits(['click']);

const handleClick = (event: Event) => {
  emit('click', event);
};
</script>

<style scoped lang="scss">
.button {
  text-underline-offset: 2px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  margin: 0;

  &--link {
    text-decoration: underline;
  }

  &--hoverable:hover {
    opacity: 0.8;
  }
}
</style>
