<template>
  <main>
      <div class="content">
        <HomeHeader/>
        <MySkills/>
        <AboutMe/>
        <MyExperience/>
        <MyProjects/>
        <MyCertificates/>
      </div>
  </main>
</template>

<script setup lang="ts">
import MySkills from '@/features/MySkills/MySkills.vue'
import AboutMe from '@/features/AboutMe/AboutMe.vue'
import MyExperience from '@/features/MyExperience/MyExperience.vue'
import HomeHeader from '@/features/HomeHeader/HomeHeader.vue'
import MyProjects from '@/features/Projects/MyProjects.vue';
import MyCertificates from '@/features/MyCertificates/MyCertificates.vue'
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .content {
    padding-left: 8px;
    padding-right: 8px;
    width: calc(100% - 32px) !important
  }
}

.content {
  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  max-width: 700px;
  width: 100%;
}
</style>


