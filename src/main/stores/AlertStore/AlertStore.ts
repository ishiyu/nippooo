import {
  inject, InjectionKey, onUnmounted, provide, reactive, readonly,
} from 'vue';
import { assertType } from 'type-plus/esm';

export type AlertStoreType = ReturnType<typeof alertStore>;
export const ALERT_STORE_KEY: InjectionKey<AlertStoreType> = Symbol('AlertStoreKey');

function alertStore() {
  const state = reactive({
    isShown: false,
    message: '',
  });

  return {
    state: readonly(state),
    show(message: string) {
      state.isShown = true;
      state.message = message;
    },
    hide() {
      state.isShown = false;
      state.message = '';
    },
  };
}

export function provideAlertStore() {
  const store = alertStore();
  provide(ALERT_STORE_KEY, store);

  onUnmounted(() => {
    provide(ALERT_STORE_KEY, undefined);
  });

  return store;
}

export function useAlertStore() {
  const store = inject(ALERT_STORE_KEY);
  assertType.as<AlertStoreType>(store);
  return store;
}
