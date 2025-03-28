<template>
  <div class="timeline-container">
    <div class="timeline-item">
      <div class="hidden timeline-year">0000</div>
      <div class="timeline-icon" :class="{large: currentExperienceIndex == 0}" @click="onCurrentExperienceIndexChanged(0)">
        <img src="/assets/companies/mapcreator.png" />
      </div>
      <div class="timeline-year" :class="{hidden: currentExperienceIndex !== 0}">2015</div>
    </div>
    <div class="line"></div>

    <div class="timeline-item">
      <div class="hidden timeline-year">0000</div>
      <div class="timeline-icon" :class="{large: currentExperienceIndex == 1}" @click="onCurrentExperienceIndexChanged(1)">
        <img src="/assets/companies/opencirclesolutions.png" />
      </div>
      <div class="timeline-year" :class="{hidden: currentExperienceIndex !== 1}">2019</div>
    </div>
    <div class="line"></div>

    <div class="timeline-item">
      <div class="hidden timeline-year">0000</div>
      <div class="timeline-icon" :class="{large: currentExperienceIndex == 2}" @click="onCurrentExperienceIndexChanged(2)">
        <img src="/assets/companies/beyonder.png" />
      </div>
      <div class="timeline-year" :class="{hidden: currentExperienceIndex !== 2}">2019</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  props: {
    currentExperienceIndex: { type: Number },
  },
  setup(props) {
    const currentExperienceIndex = ref(props.currentExperienceIndex || 0);
    watch(
      () => props.currentExperienceIndex,
      (newValue) => {
        currentExperienceIndex.value = newValue ?? 0;
      },
      { immediate: true }
    );
    return {
      currentExperienceIndex,
      maxExperienceIndex: 2,
      isSlideShowEnabled: true,
      intervalId: 0
    }
  },
  emits: {
    onCurrentExperienceIndexChanged(currentExperienceIndex : number) {
      return currentExperienceIndex
    }
  },
  methods: {
    onCurrentExperienceIndexChanged(currentExperienceIndex : number) {
      this.currentExperienceIndex = currentExperienceIndex
      this.$emit('onCurrentExperienceIndexChanged', currentExperienceIndex)
    }
  }
})

</script>

<style lang="scss" scoped>

@media only screen and (max-width: 600px) {
  .timeline-container {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
}

.timeline-container {
  align-self: stretch;
  width:100%;
  height: 100px;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: inline-flex;
}
.timeline-item {
  align-self: stretch;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
}

.timeline-icon {
  padding: 6px;
  background: white;
  border-radius: 30px;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  display: inline-flex;
  img {
    width: 20px;
    height: 20px;
    transition: 0.6s all ease;
  }
}

.timeline-icon.large {
  padding: 9px;
  gap: 5px;
  img {
    width: 40px;
    height: 40px;
  }
}

.timeline-year {
  width: 58px;
  text-align: center;
  font-size: 15px;
  font-family: Roboto;
  font-weight: 700;
  word-wrap: break-word;
  font-size: 21px !important;
  font-weight: bold !important;
  transition: 0.6s all ease;
}

.company-icon-mobile {
  display: none;
  padding: 6px;
  background: white;
  border-radius: 30px;
  justify-content: flex-start;
  align-items: center;
  padding: 9px;
  gap: 5px;
  img {
    width: 40px;
    height: 40px;
  }}

.line {
  flex: 1 1 0; height: 0px; border: 1px #00A396 solid;
}

.hidden {
  opacity: 0%;
}

</style>