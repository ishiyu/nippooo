<script setup lang="ts">
import { provideAuthStore } from '~/main/stores/AuthStore/AuthStore';
import { _watchUserForForceLogout } from '~/main/containers/App/_watchUserForForceLogout';
import { provideAlertStore } from '~/main/stores/AlertStore/AlertStore';
import { provideProgressBarStore } from '~/main/stores/ProgressBarStore/ProgressBarStore';
import ProgressBar from '~/main/containers/layouts/ProgressBar.vue';
import Alert from '~/main/containers/layouts/Alert.vue';

provideAlertStore();
provideProgressBarStore();

// user が取れなくなったら強制的にログイン画面へ
const authStore = provideAuthStore();
_watchUserForForceLogout(authStore);
</script>

<template>
  <div>
    <progress-bar />
    <alert />

    <router-view />
  </div>
</template>
