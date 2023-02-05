import { useRoute, useRouter } from 'vue-router';
import { watch } from 'vue';
import { AuthStoreType } from '~/main/stores/AuthStore/AuthStore';

export function _watchUserForForceLogout(authStore: AuthStoreType) {
  const router = useRouter();
  const route = useRoute();

  watch(() => route.name, (routeName) => {
    if (!routeName) return;
    const inNoAuthPage = ['Login', 'Signup'].includes(routeName.toString());

    // Login しているのに、Login不要のページにいたら => Main ページへ
    if (authStore.state.me && inNoAuthPage) router.push({ name: 'Day' });
    // Login してないのに、Login必要なページにいたら => Login ページへ
    if (!authStore.state.me && !inNoAuthPage) router.push({ name: 'Login' });
  });

  watch(() => authStore.state.me, (me) => {
    if (!me) router.push({ name: 'Login' });
  });
}
