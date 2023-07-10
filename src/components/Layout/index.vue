<script setup lang="ts">
import TheHeader from "./header/index.vue";
import TheSidbar from "./sidebar/index.vue";
</script>

<template>
  <div class="container-fluid p-0">
    <header class="header">
      <the-header />
    </header>
    <div class="content">
      <aside class="sidebar">
        <the-sidbar />
      </aside>
      <main class="main">
        <RouterView />
      </main>
    </div>
  </div>
</template>
<style scoped>
@import '@/assets/css/layout/layout.css';
</style>
