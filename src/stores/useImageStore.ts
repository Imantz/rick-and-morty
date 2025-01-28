import { defineStore } from 'pinia';

export const useImageStore = defineStore('imageCache', {
  state: () => ({
    cachedImages: {} as Record<string, string>, // Stores { imageUrl: base64Url }
  }),

  actions: {
    async cacheImage(url: string): Promise<string> {
      // If image is already cached, return it
      if (this.cachedImages[url]) return this.cachedImages[url];

      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);

        // Store in cache
        this.cachedImages[url] = objectURL;
        return objectURL;
      } catch (error) {
        console.error("Failed to cache image:", error);
        return url;
      }
    },
  },
});
