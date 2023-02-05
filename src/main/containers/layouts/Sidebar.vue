<script setup lang="ts">
import { useAuthStore } from '~/main/stores/AuthStore/AuthStore';
import { useAuthModule } from '~/main/modules/useAuthModule';
import UiSidebar from '~/main/components/layouts/UiSidebar.vue';

const { state } = useAuthStore();
const { logout } = useAuthModule();
</script>

<template>
  <ui-sidebar :auth-state="state" :on-logout="logout">
    <slot />
  </ui-sidebar>
</template>
