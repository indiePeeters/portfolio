<template>
  <div>
    <div class="content">
      <HomeHeader/>
      <MySkills/>
      <AboutMe/>
      <MyExperience/>
      <MyProjects/>
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import MySkills from '@/features/MySkills/MySkills.vue'
import AboutMe from '@/features/AboutMe/AboutMe.vue'
import MyExperience from '@/features/MyExperience/MyExperience.vue'
import HomeHeader from '@/features/HomeHeader/HomeHeader.vue'
import MyProjects from '@/features/MyProjects/MyProjects.vue';
</script>

<style lang="scss">
@import '@/styles/index.scss';

body {
  background-color: #2F2C4E;
}
</style>

<style lang="scss" scoped>

@media only screen and (max-width: 600px) {
  .content {
    padding-left: 16px;
    padding-right: 16px;
    width: calc(100% - 32px) !important
  }
}

.content {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  max-width: 700px;
  width: 100%;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>