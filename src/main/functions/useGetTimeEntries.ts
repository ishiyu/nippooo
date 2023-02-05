import { ref } from 'vue';
import { useTimeEntryResource } from '~/main/resources/useTimeEntryResource';

export function useGetTimeEntries() {
  const data = ref();
  const isLoading = ref(false);

  const resource = useTimeEntryResource();

  isLoading.value = true;

  resource.get().then((snapshot) => {
    if (typeof snapshot === 'undefined') return;
    data.value = snapshot.docs.map((doc) => doc.data());
  }).finally(() => {
    isLoading.value = false;
  });
  return { data, isLoading };
}
