<script setup lang="ts">
import { useGetTimeEntries } from '~/main/functions/useGetTimeEntries';
import UiSidebar from '~/main/components/layouts/UiSidebar.vue';

const { data, isLoading } = useGetTimeEntries();
</script>

<template>
  <div>
    <ui-sidebar>
      <h1>Day Page</h1>
      <div>
        isLoading: {{ isLoading }}
      </div>
      <div>
        data:
        <div v-for="item in data" :key="item.id">
          item.duration: {{ item.duration }}
          <br>
          item.started_at: {{ item.started_at.toDate() }}
          <br>
          item.ended_at: {{ item.stoped_at.toDate() }}
        </div>
      </div>
    </ui-sidebar>
  </div>
</template>
