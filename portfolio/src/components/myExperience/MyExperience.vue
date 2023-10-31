<template>
  <div class="my-experience-container">
    <div class="my-experience-title-container">
      <div class="my-experience-title">My experience</div>
      <div class="line"/>
    </div>
    
    <div class="experience-list">
      <ExperienceItem
        v-for="experience in experiences"
        v-show="experience.id === selectedExperience.id"
        :class="{'visible': experience.id === selectedExperience.id}"
        :key="experience.id"
        :roleTitle="selectedExperience.roleTitle"
        :roleDescription="selectedExperience.roleDescription"
        :company="selectedExperience.company"
        :companyLogo="selectedExperience.companyLogo"
        :startYear="selectedExperience.startYear"
        :endYear="selectedExperience.endYear"
      />
    </div>
    {{ t.experience.whyellowDescription }}

    <div class="timeline-container">
      <div class="timeline-item">
        <div class="hidden timeline-year">2019</div>
        <div class="timeline-icon" @click="setCurrentItemIndex(0)">
          <img style="width: 20px; height: 20px" src="@/assets/mapcreator.png"  />
        </div>
        <div class="hidden timeline-year"> 2019</div>
      </div>
      <div class="line"></div>

      <div class="timeline-item">
        <div class="hidden timeline-year">2019</div>
        <div class="timeline-icon" @click="setCurrentItemIndex(1)">
          <img style="width: 20px; height: 20px" src="@/assets/opencirclesolutions.png"  />
        </div>
        <div class="hidden timeline-year"> 2019</div>
      </div>
      <div class="line"></div>

      <div class="timeline-item">
        <div class="timeline-year timeline-year-big">2019</div>
        <div class="company-icon" @click="setCurrentItemIndex(2)">
          <img style="width: 40px; height: 40px" src="@/assets/whyellow.png" />
        </div>
        <div class="company-icon-mobile">
          <img style="width: 40px; height: 40px" src="@/assets/whyellow.png" />
        </div>
        <div class="hidden timeline-year timeline-year-big"> 2019</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ExperienceItem from '@/components/MyExperience/ExperienceItem.vue'
import { defineComponent, ref } from 'vue'
import { t } from '@/locales/i18n'
import type Translations from '@/locales/Translations';

export default defineComponent({
  components: {
    ExperienceItem
  },
  setup() {
    const show = ref(false);
    const currentExperienceIndex = ref(0)
    const experiences = [
      { id:0, companyLogo: 'mapcreator.png', roleTitle: 'Support & development', company: 'Mapcreator, Eindhoven', roleDescription: 'During my time at Whyellow, I worked with a dedicated team on two big projects. I was one of the few team members who loved frontend development, so I ended up handling the frontend work for both projects.<br /><br />One of these projects was a web system for Partou, which I\'ll talk about more here. During this project, I took on some major tasks and gradually became one of the more experienced team members. As the project continued, I also took over the responsibility of making the user experience and design better. <br /><br /> On top of all that, I had the chance to help out junior software developers and show them the ropes in frontend development.', startYear: 2019, endYear: NaN},
      { id:1, companyLogo: 'opencircleSolutions.png', roleTitle: 'Intership Augmented Reality', company: 'Open circle solutions, Eindhoven', roleDescription: 'During my graduation internship at Open Circle Solutions, I examined the potential of integrating augmented reality into cross-platform applications. Beyond acquainting myself with the rudiments of augmented reality, I delved into diverse strategies for conceptualizing and implementing augmented reality within cross platform frameworks, aiming to improve the development process.', startYear: 2019, endYear: NaN},
      { id:2, companyLogo: 'whyellow.png', roleTitle: 'Software developer (current)', company: 'Whyellow, Eindhoven', roleDescription:'undefined', startYear: 2019, endYear: NaN},
    ]
    return {
      experiences,
      currentExperienceIndex,
      show
    }
  },
  computed: {
    selectedExperience() {
      return this.experiences[this.currentExperienceIndex]
    },
    t() : Translations {
      return t;
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
}



.line {
  flex: 1 1 0; height: 0px; border: 1px #00A396 solid;
}

.hidden {
  opacity: 0%;
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


.company-icon {
  padding: 9px;
  background: white;
  border-radius: 30px;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  display: inline-flex;
}

.company-icon-mobile {
  display: none;
  padding: 6px;
  background: white;
  border-radius: 30px;
  justify-content: flex-start;
  align-items: center;
  height: 52px;
}

.timeline-container {
  align-self: stretch;
  height: 100px;
  padding-left: 32px;
  padding-right: 32px;
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
}

.timeline-year {
  width: 58px;
  text-align: center;
  font-size: 15px;
  font-family: Roboto;
  font-weight: 700;
  word-wrap: break-word;
}

.timeline-year-big {
  font-size: 21px !important;
  font-weight: bold !important;
}

.experience-list {
  display: flex;
  flex-direction: column;
}

.experience-list .visible {
  opacity: 1;
  transition: opacity 1s;
}

.experience-list .visible + .visible {
  transition-delay: 1s;
}

</style>