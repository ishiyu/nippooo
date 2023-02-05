<script setup lang="ts">
import Navbar from '~/main/components/layouts/Navbar.vue';
import { useGetTimeEntries } from '~/main/functions/useGetTimeEntries';

const { data, isLoading } = useGetTimeEntries();
</script>

<template>
  <div>
    <navbar />
    <h1>Chatroom</h1>
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
  </div>
</template>
