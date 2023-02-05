<script setup lang="ts">
import UiLoginForm from '~/main/components/layouts/UiLoginForm.vue';

withDefaults(defineProps<{
  email?: string,
  password?: string,
  onLogin:(email: string, password: string) => void,
}>(), {
  email: '',
  password: '',
});
</script>

<template>
  <div class="hero bg-base-100 min-h-screen">
    <div class="hero-content w-96 flex-col">
      <div class="mb-5 text-center text-5xl font-bold">
        &lt;LOGO&gt;
      </div>
      <ui-login-form :email="$props.email"
                     :password="$props.password"
                     :on-login="$props.onLogin" />
    </div>
  </div>
</template>
