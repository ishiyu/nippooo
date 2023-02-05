import { createApp, ComponentPublicInstance } from 'vue';
import 'assets/styles/tailwind.scss';
import 'assets/styles/main.scss';
import { onAuthStateChanged } from 'firebase/auth';
import { router } from '~/config/router';
import { auth } from '~/config/firebase';
import App from './containers/App/App.vue';

// router の navigation guard では `auth.currentUser` では判定できないが、
// 初期化前だとこれが null になるため、初期化処理が終わって動く onAuthStateChanged を
// createApp 前に噛んでおく。
let app: ComponentPublicInstance | null = null;
onAuthStateChanged(auth, () => {
  if (!app) app = createApp(App).use(router).mount('#app');
});
