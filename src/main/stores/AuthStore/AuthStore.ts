import {
  inject, InjectionKey, onUnmounted, provide, reactive, readonly,
} from 'vue';
import { assertType } from 'type-plus';
import { User } from 'firebase/auth';
import { _watchUserForUpdate } from '~/main/stores/AuthStore/_watchUserForUpdate';

export type AuthStoreType = ReturnType<typeof authStore>;
export const AUTH_STORE_KEY: InjectionKey<AuthStoreType> = Symbol('AuthStoreKey');

function authStore() {
  const state = reactive({
    me: null as User | null,
    error: null as Error | null,
  });

  return {
    state: readonly(state),
    updateMe(me: User) {
      state.me = me;
      state.error = null;
    },
    updateError(error: Error) {
      state.me = null;
      state.error = error;
    },
    clear() {
      state.me = state.error = null;
    },
  };
}

export function provideAuthStore() {
  const store = authStore();
  provide(AUTH_STORE_KEY, store);

  // login 後は常に監視しておく
  _watchUserForUpdate(store);

  onUnmounted(() => {
    provide(AUTH_STORE_KEY, undefined);
  });

  return store;
}

export function useAuthStore() {
  const store = inject(AUTH_STORE_KEY);
  assertType.as<AuthStoreType>(store);
  return store;
}
