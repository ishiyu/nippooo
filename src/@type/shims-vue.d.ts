declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent;
  // eslint-disable-next-line import/no-default-export
  export default component;
}
