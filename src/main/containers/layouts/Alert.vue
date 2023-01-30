<script setup lang="ts">
import UiAlert from '~/main/components/layouts/UiAlert.vue';
import { useAlertStore } from '~/main/stores/AlertStore/AlertStore';

const store = useAlertStore();
</script>

<template>
  <ui-alert v-show="store.state.isShown"
            :message="store.state.message"
            :on-close="store.hide" />
</template>
