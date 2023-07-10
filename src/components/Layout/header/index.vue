<script></script>
<template>
  <div class="header-top">
    <nav class="header-top-nav-left">
      <ul class="header-top-nav-menu">
        <li class="header-top-nav-item">
          <i class="fa-solid fa-bars header-top-nav-icon"></i>
        </li>
        <li class="header-top-nav-item">
          <router-link to="/">
            <img
              src="@/assets/logo//LogoLTSEdu01.png"
              class="header-top-nav-logo"
              alt=""
            />
          </router-link>
        </li>
      </ul>
    </nav>
    <nav class="header-top-nav-right">
      <ul class="header-top-nav-chill">
        <li class="header-top-nav-sub">User</li>
        <li class="header-top-nav-sub">
          <i class="fa-solid fa-display header-top-nav-sub-icon-box"></i>
        </li>
        <li class="header-top-nav-sub">
          <i class="bx bxs-comment header-top-nav-sub-icon-box"></i>
        </li>
        <li class="header-top-nav-sub">
          <i class="bx bx-chevron-down header-top-nav-sub-icon-box down"></i>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
@import "@/assets/css/layout/header/header.css";
</style>
