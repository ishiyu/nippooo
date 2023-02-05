import { collection, getDocs } from 'firebase/firestore';
import { db } from '~/config/firebase';
import { useAlertStore } from '~/main/stores/AlertStore/AlertStore';

export function useTimeEntryResource() {
  const alertStore = useAlertStore();
  const timeEntriesCollection = collection(db, 'time_entries');

  return {
    async get() {
      return getDocs(timeEntriesCollection).catch((e) => {
        if (e instanceof Error) alertStore.show(e.message);
      });
    },
  };
}
