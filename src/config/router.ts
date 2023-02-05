import {
  createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized,
} from 'vue-router';
import { auth } from '~/config/firebase';
import LoginPage from '~/main/containers/pages/LoginPage/LoginPage.vue';
import SignupPage from '~/main/containers/pages/SignupPage/SignupPage.vue';
import UiDayPage from '~/main/components/pages/UiDayPage.vue';
import UiWeekPage from '~/main/components/pages/UiWeekPage.vue';
import UiCategoryPage from '~/main/components/pages/UiCategoryPage.vue';
import UiTeamPage from '~/main/components/pages/UiTeamPage.vue';

// auth guard
const requireAuth = (
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const user = auth.currentUser;

  // userが認証されていないときはLogin画面に飛ばす
  // ただし、firebase初期処理前は null になるので createApp を onAuthStateChanged で囲む
  if (!user) return next({ name: 'Login' });
  // userが認証されているとき、飛び先に送る
  return next();
};

// No auth guard
// こちらは認証されているユーザーが、ログイン画面にアクセスできないようにしたい
const requireNoAuth = (
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const user = auth.currentUser;

  // userが認証されているときはメイン画面へ
  if (user) return next({ name: 'Day' });
  // userが認証されていないとき、飛び先に送る
  return next();
};

const routes = [{
  path: '/login',
  name: 'Login',
  component: LoginPage,
  beforeEnter: requireNoAuth, // 認証をしているユーザーがみれないようにする
}, {
  path: '/signup',
  name: 'Signup',
  component: SignupPage,
  beforeEnter: requireNoAuth, // 認証をしているユーザーがみれないようにする
}, {
  path: '/',
  name: 'Day',
  component: UiDayPage,
  beforeEnter: requireAuth, // 認証をしているユーザーのみがみれるようにする
}, {
  path: '/week',
  name: 'Week',
  component: UiWeekPage,
  beforeEnter: requireAuth, // 認証をしているユーザーのみがみれるようにする
}, {
  path: '/categories',
  name: 'Category',
  component: UiCategoryPage,
  beforeEnter: requireAuth, // 認証をしているユーザーのみがみれるようにする
}, {
  path: '/teams',
  name: 'Team',
  component: UiTeamPage,
  beforeEnter: requireAuth, // 認証をしているユーザーのみがみれるようにする
}];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
