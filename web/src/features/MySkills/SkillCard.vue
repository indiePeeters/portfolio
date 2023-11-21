<template>
    <div class="card">
      <div class="center">
        <img class="skill-logo" :src="imageSrc" />
      </div>
      <div class="skill-title">{{title}}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: String,
    imageName: String
  }, 
  computed: {
    imageSrc() {
      const path = new URL(`/assets/skills`, import.meta.url)
      return `${path}/${this.imageName}`;
    }
  },
  methods: {

  }
}) 
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 600px) {
  .card {
    aspect-ratio: 1 / 1 !important;
    width: 100% !important;
    height: auto  !important;
  }

  .skill-logo {
    max-width: calc(100% /2) !important;
    max-height: calc(100% /2) !important;
  }

  .skill-title {
    margin-top: -30px !important;
  }
}

.card {
  width: 184px;
  height: 184px;
  background: #3F3B68;
  box-shadow: 2px 3px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  gap: 16px;
  font-size: 22px;
}

.center {
  width:100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.skill-logo {
  max-width: 100px;
  max-height: 100px;
}

.skill-title {
  margin-top: -32px;
  height: 40px;
  bottom: 0px;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>