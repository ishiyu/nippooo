import { useRouter } from 'vue-router';
import useAuthModule from '~/main/modules/useAuthModule';
import { useAuthStore } from '~/main/stores/AuthStore/AuthStore';

export function _useOnSignup() {
  const router = useRouter();
  const authStore = useAuthStore();
  const { signup } = useAuthModule();

  return async function onLogin(email: string, password: string, displayName: string) {
    await signup(email, password, displayName);
    if (!authStore.state.error) {
      await router.push({ name: 'Chatroom' });
    }
  }
}
