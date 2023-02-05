<script setup lang="ts">
withDefaults(defineProps<{
  message?: string,
}>(), {
  message: '保存中',
});
</script>

<template>
  <div class="
    bg-neutral/80 align-center fixed z-50 flex h-full w-full flex-col items-center justify-center
  ">
    <div class="mb-8 text-3xl">
      {{ $props.message }}
    </div>
    <progress class="progress progress-primary w-96" />
  </div>
</template>
