<template>
  <div class="content">
    <template v-if="projectName === 'partou'">
      <PartouProject/>
    </template>
    <template v-if="projectName === 'skal'">
      kaas
    </template>
    <template v-if="projectName === 'esac'">
      kaas
    </template>
    <template v-if="projectName === 'campervan'">
      kaas
    </template>
  </div>
</template>

<script lang="ts">
import PartouProject from '@/features/Projects/PartouProject.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components:{
    PartouProject
  },
  props: {
    projectName: String
  },
  methods: {
  }
}) 
</script>

<style lang="scss">
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
</style>