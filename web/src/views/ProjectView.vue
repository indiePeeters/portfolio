<template>
  <div class="content">
    <template v-if="projectName === 'partou'">
      
      <PartouProject/>
    </template>
    <template v-if="projectName === 'skal'">
      <SkalProject/>
    </template>
    <template v-if="projectName === 'lord of the rings audiobook'">
      <LotrAudiobook/>
    </template>
    <template v-if="projectName === 'augmented reality'">
      Under development!
    </template>
    <template>
      {{ projectName }}
      Under development!
    </template>
  </div>
</template>

<script lang="ts">
import LotrAudiobook from '@/features/Projects/LotrAudiobook.vue'
import PartouProject from '@/features/Projects/PartouProject.vue'
import SkalProject from '@/features/Projects/SkalProject.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  components:{
    LotrAudiobook,
    PartouProject,
    SkalProject
  },
  props: {
    projectName: String
  },
  methods: {
  }
}) 
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
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  max-width: 700px;
  width: 100%;
}
</style>