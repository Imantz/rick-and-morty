<template>
    <img
      v-if="imageSrc"
      :src="imageSrc"
      :alt="alt"
      :class="customClass"
      loading="lazy"
      :width="width"
      :height="height"
    />
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useImageStore } from '../stores/useImageStore';
  
  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
  });
  
  const imageStore = useImageStore();
  const imageSrc = ref(props.src);
  
  onMounted(async () => {
    const cachedImage = await imageStore.cacheImage(props.src);
    if (cachedImage) {
      imageSrc.value = cachedImage;
    }
  });
  </script>
  