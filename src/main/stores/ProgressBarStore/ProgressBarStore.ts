import { inject, InjectionKey, onUnmounted, provide, reactive, readonly } from 'vue';

export type ProgressBarStoreType = ReturnType<typeof progressBarStore>;
export const PROGRESS_BAR_STORE_KEY: InjectionKey<ProgressBarStoreType> = Symbol('ProgressBarStoreKey');

export function provideProgressBarStore() {
  const store = progressBarStore();
  provide(PROGRESS_BAR_STORE_KEY, store);

  onUnmounted(() => {
    provide(PROGRESS_BAR_STORE_KEY, undefined);
  });
  return store;
}

export function useProgressBarStore() {
  return inject(PROGRESS_BAR_STORE_KEY)!;
}

function progressBarStore() {
  const state = reactive({
    isShown: false,
    message: "",
  });

  return {
    state: readonly(state),
    show(message: string) {
      state.isShown = true;
      state.message = message;
    },
    hide() {
      state.isShown = false;
      state.message = "";
    },
  }
}
