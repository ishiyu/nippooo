<script setup lang="ts">
import { reactive } from 'vue';

const props = withDefaults(defineProps<{
  email?: string,
  password?: string,
  onLogin:(email: string, password: string) => void,
}>(), {
  email: '',
  password: '',
});

// Form 故にパラメータだけ状態を持つことにした
const state = reactive({
  email: props.email,
  password: props.password,
});
</script>

<template>
  <div class="card bg-base-200 w-full shrink-0 shadow-2xl">
    <div class="card-body">
      <h1 class="text-center text-3xl font-bold">
        Login
      </h1>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input v-model="state.email"
               type="email"
               required
               placeholder="email"
               class="input input-bordered">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input v-model="state.password"
               type="password"
               required
               placeholder="password"
               class="input input-bordered">
        <label class="label">
          <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      <div class="form-control mt-6">
        <button class="btn btn-primary"
                @click="$props.onLogin(state.email, state.password)">
          Login
        </button>
      </div>
    </div>
  </div>
</template>
