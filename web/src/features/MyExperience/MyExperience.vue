<template>
  <div class="my-experience-container">
    <div class="my-experience-title-container">
      <div class="my-experience-title"><a id="my-experience">My experience</a></div>
      <div class="line"/>
    </div>

    <div class="experience-list">
      <ExperienceItem
        v-for="experience in experiences"
        v-show="experience.id === selectedExperience.id"
        :class="{'visible': experience.id === selectedExperience.id}"
        :key="experience.id"
        :experienceIndex="experience.id"
        :roleTitle="selectedExperience.roleTitle"
        :roleDescription="selectedExperience.roleDescription"
        :company="selectedExperience.company"
        :companyLogo="selectedExperience.companyLogo"
        :startYear="selectedExperience.startYear"
        :endYear="selectedExperience.endYear"
      />
    </div>
    <ExperienceTimeline @onCurrentExperienceIndexChanged="setCurrentItemIndex"/>
  </div>
</template>

<script lang="ts">
import ExperienceItem from '@/features/MyExperience/ExperienceItem.vue'
import ExperienceTimeline from '@/features/MyExperience/ExperienceTimeline.vue'
import { globalTranslations } from '@/locales/i18n'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    ExperienceItem,
    ExperienceTimeline
  },
  setup() {
    const show = ref(false);
    const currentExperienceIndex = ref(0)
    const experiences = [
      { 
        id:0, 
        companyLogo: 'mapcreator.png',
        roleTitle: globalTranslations.value.experience.titles.mapcreatorTitle,
        company: globalTranslations.value.experience.companies.mapcreator,
        roleDescription: globalTranslations.value.experience.descriptions.mapcreatorDescription,
        startYear: 2019,
        endYear: NaN
      },
      { 
        id:1,
        companyLogo: 'opencirclesolutions.png',
        roleTitle: globalTranslations.value.experience.titles.openCircleTitle,
        company: globalTranslations.value.experience.companies.opencircle,
        roleDescription: globalTranslations.value.experience.descriptions.openCircleDescription,
        startYear: 2019,
        endYear: NaN
      },
      { 
        id:2,
        companyLogo: 'whyellow.png',
        roleTitle: globalTranslations.value.experience.titles.whyellowTitle,
        company: globalTranslations.value.experience.companies.whyellow,
        roleDescription: globalTranslations.value.experience.descriptions.whyellowDescription,
        startYear: 2015,
        endYear: NaN
      },
    ]

    return {
      experiences,
      currentExperienceIndex,
      show
    }
  },
  computed: {
    globalTranslations() {
      return globalTranslations
    },
    selectedExperience() {
      return this.experiences[this.currentExperienceIndex]
    }
  },
  methods: {
    setCurrentItemIndex(currentItemIndex: number) {
      this.currentExperienceIndex = currentItemIndex
    }
  }
})
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 600px) {
  .company-icon {
    display: none !important;
  }

  .company-icon-mobile {
    display: inline  !important;
  }

  .experience-header-container {
    overflow: hidden;
    width: 100% !important;
    display: flex;
    gap: 16px;
  }

  .experience-list {
    width: 100%;
  }
}



.line {
  flex: 1 1 0; height: 0px; border: 1px #00A396 solid;
}

.my-experience-container {
  width: 100%; 
  height: 100%; 
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: flex-start; 
  gap: 8px; 
  display: inline-flex
}

.my-experience-title-container {
  align-self: stretch; 
  padding-bottom: 24px; 
  justify-content: flex-start; 
  align-items: center;
  gap: 10px; 
  display: inline-flex
}

.my-experience-title {
  width: 178px;
  color: #FFFCF9;
  font-size: 26px;
  font-family: Roboto;
  font-weight: 500;
  word-wrap: break-word;
}


.experience-list {
  display: flex;
  flex-direction: column;
  transition: 0.6s all ease;
}

.experience-list .visible {
  opacity: 1;
  transition: opacity 1s;
}

.experience-list .visible + .visible {
  transition-delay: 1s;
}

</style>