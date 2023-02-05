import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '~/config/firebase';
import type { AuthStoreType } from '~/main/stores/AuthStore/AuthStore';

export function _watchUserForUpdate(store: AuthStoreType) {
  onAuthStateChanged(auth, (me) => {
    if (me) {
      store.updateMe(me);
    } else {
      store.clear();
    }
  });
}
