<script setup lang="ts">
import UiSignupForm from "~/main/components/layouts/UiSignupForm.vue"

withDefaults(defineProps<{
  email?: string,
  password?: string,
  displayName?: string,
  onSignup: (email: string, password: string, displayName: string) => void,
}>(), {
  email: "",
  password: "",
  displayName: "",
});
</script>

<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content w-96 flex-col">
      <div class="mb-5 text-center text-5xl font-bold">
        &lt;LOGO&gt;
      </div>
      <ui-signup-form :email="$props.email"
                      :password="$props.password"
                      :on-signup="$props.onSignup" />
    </div>
  </div>
</template>
