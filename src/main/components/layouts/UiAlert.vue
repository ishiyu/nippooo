<script setup lang="ts">
import { ExclamationCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline';

withDefaults(defineProps<{
  message?: string,
  onClose:() => void,
}>(), {
  message: '',
});
</script>

<template>
  <div class="fixed z-10 mt-6 flex w-full flex-col items-center justify-center">
    <div class="alert alert-error max-w-lg shadow-lg">
      <div>
        <exclamation-circle-icon class="h-6 w-6" />
        <span>{{ $props.message }}</span>
      </div>
      <div class="flex-none">
        <button class="btn btn-link btn-xs" @click="$props.onClose">
          <x-mark-icon class="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
</template>
