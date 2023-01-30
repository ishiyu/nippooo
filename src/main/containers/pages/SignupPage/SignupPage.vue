<script setup lang="ts">
import { reactive } from 'vue';
import UiSignupPage from '~/main/components/pages/UiSignupPage.vue';
import { _useOnSignup } from '~/main/containers/pages/SignupPage/_useOnSignup';

const state = reactive({
  displayName: "",
  email: "",
  password: "",
})
const onSignup = _useOnSignup();
</script>

<template>
  <ui-signup-page :display-name="state.displayName"
                  :email="state.email"
                  :password="state.password"
                  :on-signup="onSignup" />
</template>
