<script setup lang="ts">
import UiProgressBar from '~/main/components/layouts/UiProgressBar.vue';
import { useProgressBarStore } from '~/main/stores/ProgressBarStore/ProgressBarStore';

const { state } = useProgressBarStore();
</script>

<template>
  <ui-progress-bar v-show="state.isShown"
                   :message="state.message" />
</template>
