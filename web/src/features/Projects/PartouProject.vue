<template>
  <div class="partou-content">
    <img class="header-image" src="/assets/projects/partou/partou.png"/>
    <div class="project-title-container">
      <div class="project-title">Planning system for Partou</div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {

  }
}) 
</script>
<style lang="scss">
.project-title {
  color: #FFFCF9;
  font-size: 34px;
  font-family: Roboto;
  font-weight: 500;
   word-wrap: break-word;
}

.header-image {
  width: 100%;
}

.partou-content {
  display: flex;
  flex-direction: column;
  gap: 32px;  
}

.line {
  flex: 1 1 0;
  height: 0px;
  border: 1px #00A396 solid
}
</style>