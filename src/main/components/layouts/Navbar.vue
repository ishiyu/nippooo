<script lang="ts">
import { useAuthModule } from '~/main/modules/useAuthModule';
import { useAuthStore } from '~/main/stores/AuthStore/AuthStore';

// eslint-disable-next-line import/no-default-export
export default {
  setup() {
    const authStore = useAuthStore();
    const { logout } = useAuthModule();

    const handleClick = async () => {
      await logout();
      if (!authStore.state.error) {
        // eslint-disable-next-line no-console
        console.log('user logged out');
      }
    };
    return { handleClick, user: authStore.state.me };
  },
};
</script>

<template>
  <nav v-if="user">
    <div>
      <p>ログイン名：{{ user.displayName }}</p>
      <p class="email">
        現在のログイン(アドレス)：{{ user.email }}
      </p>
    </div>
    <button @click="handleClick">
      Log out
    </button>
  </nav>
</template>
