<template>
  <div class="projects-container">
    <div class="projects-title-container">
        <div class="projects-title"><span id="my-projects">My projects</span></div>
        <div class="line"/>
    </div>
    <p>My journey in web development has been shaped by a variety of projects, each presenting unique challenges and opportunities. From developing intuitive frontends to creating robust backend systems </p>
    <div class="projects">
      <img src="/assets/projects/partou/partou.png" @click="onProjectClicked('partou')"/>
      <img src="/assets/projects/skal/skal.png" @click="onProjectClicked('skal')"/>
    </div>
  </div>
</template>

<script lang="ts">
import { ROUTES } from '@/router';
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    onProjectClicked(projectName : string) : void {
      this.$router.push({ name: ROUTES.project, params: { projectName } })
    }
  }
}) 
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .projects {
    img {
      width: calc(100vw - 48px) !important; 
    }
  }
}

.projects {
  display: flex;
  flex-direction: row;
  flex-basis: calc(50% - 48px);
  gap: 48px;
  flex-wrap: wrap;
  img {
    width: 326px;
  }
}

.projects-container {
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  display: inline-flex;
}

.projects-title-container {
  align-self: stretch;
  justify-content: center;
  align-items: center;
  gap: 32px;
  display: inline-flex;
}

.projects-title {
  width: 140px;
  color: #FFFCF9;
  font-size: 26px;
  font-family: Roboto;
  font-weight: 500;
   word-wrap: break-word;
}

.line {
  flex: 1 1 0;
  height: 0px;
  border: 1px #00A396 solid
}
</style>