<template>
  <main>
    <div class="content">
      <HomeHeader/>
      <MySkills/>
      <AboutMe/>
      <MyExperience/>
      <MyProjects/>
    </div>
  </main>
</template>

<script setup lang="ts">
import MySkills from '@/features/MySkills/MySkills.vue'
import AboutMe from '@/features/AboutMe/AboutMe.vue'
import MyExperience from '@/features/MyExperience/MyExperience.vue'
import HomeHeader from '@/features/HomeHeader/HomeHeader.vue'
import MyProjects from '@/features/Projects/MyProjects.vue';
</script>

<style lang="scss">
@media only screen and (max-width: 600px) {
  .content {
    padding-left: 8px;
    padding-right: 8px;
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
</style>


