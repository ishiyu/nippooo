import { useRouter } from 'vue-router';
import { useAuthModule } from '~/main/modules/useAuthModule';
import { useAuthStore } from '~/main/stores/AuthStore/AuthStore';
import { useProgressBarStore } from '~/main/stores/ProgressBarStore/ProgressBarStore';
import { useAlertStore } from '~/main/stores/AlertStore/AlertStore';

export function _useOnLogin() {
  const router = useRouter();
  const progressBarStore = useProgressBarStore();
  const alertStore = useAlertStore();
  const authStore = useAuthStore();
  const { login } = useAuthModule();

  return async function onLogin(email: string, password: string) {
    progressBarStore.show('ログイン中');

    await login(email, password);
    progressBarStore.hide();

    if (authStore.state.error) {
      alertStore.show(`${authStore.state.error.name}: ${authStore.state.error.message}`);
    } else {
      await router.push({ name: 'Chatroom' });
    }
  };
}
