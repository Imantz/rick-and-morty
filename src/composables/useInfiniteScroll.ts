import { onMounted, onBeforeUnmount, ref } from 'vue';

export function useInfiniteScroll(fetchItems: () => Promise<void>, loadMore: boolean) {
  const isFetching = ref(false);

  const handleScroll = (): void => {
    if (!loadMore) return;

    const scrollPosition = window.innerHeight + window.scrollY;
    const offsetThreshold = document.body.offsetHeight - 100;

    if (scrollPosition >= offsetThreshold && !isFetching.value) {
      isFetching.value = true;
      fetchItems().finally(() => {
        isFetching.value = false;
      });
    }
  };

  // Debounce function to limit scroll event calls
  const debounce = <T extends (...args: unknown[]) => void>(
    func: T,
    delay: number
  ): T => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    return ((...args: Parameters<T>) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    }) as T;
  };

  const debouncedScrollHandler = debounce(handleScroll, 200);

  onMounted(() => {
    fetchItems(); // Initial fetch
    window.addEventListener('scroll', debouncedScrollHandler);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', debouncedScrollHandler);
  });
}
