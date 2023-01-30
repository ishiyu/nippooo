import { auth } from '~/config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useAuthStore } from '~/main/stores/AuthStore/AuthStore';

export default function useAuthModule() {
  const store = useAuthStore();

  return {
    /**
     * login 処理
     * @param email
     * @param password
     */
    async login(email:string , password:string) {
      store.clear();

      try {
        const credential = await signInWithEmailAndPassword(auth, email,password);
        store.updateMe(credential.user);
      } catch(err) {
        if (err instanceof Error) {
          store.updateError(err);
        } else {
          store.updateError(new Error('Incorrect login credentials'));
        }
      }
    },

    /**
     * Logout 処理
     */
    async logout() {
      try {
        await auth.signOut();
        store.clear();
      } catch (err) {
        if (err instanceof Error) {
          store.updateError(err);
        } else {
          store.updateError(new Error('fail logout'));
        }
      }
    },

    /**
     * Signup 処理
     */
    async signup(email: string, password: string, displayName: string) {
      store.clear();

      try {
        const credential = await createUserWithEmailAndPassword(auth, email, password)
        if (!credential) {
          return store.updateError(new Error('Could not complete the signup'));
        }
        store.updateMe(credential.user);

        // updateProfile() はdisplayNameに入力した名前を表示するために必要
        await updateProfile(credential.user, { displayName });
        store.updateMe(credential.user);
      } catch (err) {
        if (err instanceof Error) {
          store.updateError(err);
        } else {
          return store.updateError(new Error('Could not complete the signup'));
        }
      }
    }
  };
}
