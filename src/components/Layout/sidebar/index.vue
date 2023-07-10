<template>
  <ul class="nav flex-column">
    <li class="nav-item" >
      <router-link class="nav-link text-dark" to="/" :class="{ active: isActive('home') }" @click="setActive('home')">
        <i :class="getIconClass('home')"></i> Bản tin
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link text-dark" :class="{ active: isActive('profile') }" to="#" @click="setActive('profile')">
        <i :class="getIconClass('profile')"></i> Thông tin cá nhân
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link text-dark" :class="{ active: isActive('students') }" to="#" @click="setActive('students')">
        <i :class="getIconClass('students')"></i> Học viên <i class="fa-solid fa-chevron-down"></i>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link text-dark" :class="{ active: isActive('assistant') }" to="#" @click="setActive('assistant')">
        <i :class="getIconClass('assistant')"></i> Trợ giảng <i class="fa-solid fa-chevron-down"></i>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link text-dark" :class="{ active: isActive('test') }" to="#" @click="setActive('test')">
        <i :class="getIconClass('test')"></i> Test Online <i class="fa-solid fa-chevron-down"></i>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link text-dark" :class="{ active: isActive('jobs') }" to="#" @click="setActive('jobs')">
        <i :class="getIconClass('jobs')"></i> Công việc <i class="fa-solid fa-chevron-down"></i>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';

const activeItem = ref('');

const isActive = (item: string) => {
  return activeItem.value === item;
};

const setActive = (item: string) => {
  activeItem.value = item;
};

const getIconClass = (item: string) => {
  return {
    'fa-sharp fa-solid fa-house-chimney nav-icon': item === 'home',
    'bx bxs-user-circle nav-icon': item === 'profile',
    'bx bxs-user nav-icon': item === 'students',
    'fa-solid fa-user-tie nav-icon': item === 'assistant',
    'fa-solid fa-list nav-icon': item === 'test',
    'fa-regular fa-calendar-check nav-icon': item === 'jobs',
  };
};

const activeClass = computed(() => {
  return {
    active: isActive('home')
  };
});

onMounted(() => {
  setActive('home');
});
</script>
<style scoped>
@import "bootstrap";
@import "@/assets/css/layout/sidebar/sidebar.css";
</style>
