<script setup lang="ts">
import { AuthStoreType } from '~/main/stores/AuthStore/AuthStore';

const props = withDefaults(defineProps<{
  authState: AuthStoreType['state'],
  onLogout:() => void,
}>(), {
});
</script>

<template>
  <div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle">

    <div class="drawer-content">
      <slot />
    </div>

    <div class="drawer-side bg-base-200 w-80">
      <label for="my-drawer-2" class="drawer-overlay" />

      <div class="flex flex-col justify-between">
        <ul class="menu menu-compact text-base-content p-4">
          <li class="menu-title">
            <span>入力</span>
          </li>
          <li>
            <router-link to="/" active-class="bg-primary text-primary-content">
              今日
            </router-link>
          </li>
          <li>
            <router-link to="/week" active-class="bg-primary text-primary-content">
              今週
            </router-link>
          </li>

          <li class="menu-title">
            <span>分析</span>
          </li>
          <li><a>チーム内</a></li>

          <li class="menu-title">
            <span>管理</span>
          </li>
          <li>
            <router-link to="/categories" active-class="bg-primary text-primary-content">
              カテゴリ
            </router-link>
          </li>
          <li>
            <router-link to="/teams" active-class="bg-primary text-primary-content">
              チーム
            </router-link>
          </li>
        </ul>

        <!-- 下に付ける分のメニュー -->
        <ul class="menu menu-compact text-base-content flex flex-col p-4">
          <li class="bg-neutral text-neutral-content rounded p-4 text-sm">
            ログイン名：{{ $props.authState.me.displayName }}
            <br>
            <br>
            現在のログイン(アドレス)：{{ $props.authState.me.email }}
          </li>
          <li class="mt-4">
            <a href="#" @click="$props.onLogout">
              ログアウト
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
