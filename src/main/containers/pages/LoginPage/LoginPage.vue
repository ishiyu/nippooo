<script setup lang="ts">
import { reactive } from 'vue';
import UiLoginPage from '~/main/components/pages/UiLoginPage.vue';
import { _useOnLogin } from '~/main/containers/pages/LoginPage/_useOnLogin';

const state = reactive({
  email: '',
  password: '',
});
const onLogin = _useOnLogin();
</script>

<template>
  <div>
    <ui-login-page :email="state.email" :password="state.password" :on-login="onLogin" />
  </div>
</template>
