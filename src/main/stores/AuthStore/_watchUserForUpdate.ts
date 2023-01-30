import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '~/config/firebase';
import { AuthStoreType } from '~/main/stores/AuthStore/AuthStore';

export function _watchUserForUpdate(store: AuthStoreType) {
  onAuthStateChanged(auth, me => {
    console.log('user state changed. Current user is:', me);
    if (me) {
      store.updateMe(me);
    } else {
      store.clear();
    }
  });
}
