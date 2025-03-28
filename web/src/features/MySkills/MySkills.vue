<template>
    <div class="my-skills" :key="componentKey">
      <div class="title-container">
        <div class="my-skills-title"><span id="my-skills">My skills</span></div>
        <div class="line"></div>
      </div>
      
      <div ref="skillsContainer" class="skills-container" @mouseenter="stopAutoScroll" @mouseleave="startAutoScroll">
        <div class="card-item" :key="skill.name" v-for="skill in skills">
            <SkillCard :title="skill.name" :imageUrl="skill.imageUrl" />
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import SkillCard from '@/features/MySkills/SkillCard.vue'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  components: {
    SkillCard
  },
  setup() {
    let autoScrollEnabled = true
    const skillsContainer = ref<HTMLDivElement>().value ?? undefined 

    return {
      autoScrollEnabled,
      skillsContainer,
      onMounted
    }
  },
  data() {
    const skills = [
        { name: "React", imageUrl: "/assets/skills/reactLogo.png"},
        { name: "Vue", imageUrl: "/assets/skills/vueLogo.png"},
        { name: "Graphql", imageUrl: "/assets/skills/graphqlLogo.png"},
        { name: "Typescript", imageUrl: "/assets/skills/typescriptLogo.png"},
        { name: "Dotnet", imageUrl: "/assets/skills/dotnetCoreLogo.png"},
        { name: "Php", imageUrl: "/assets/skills/php.png"},
        { name: "Python", imageUrl: "/assets/skills/python.png"},
        { name: "Figma", imageUrl: "/assets/skills/figma.png"}
      ]
    return { 
      skills,
      originalSkillsLength: skills.length,
      componentKey: 0
    }
  },
  mounted() {
    this.autoScroll()
    if(this.skillsContainer) {
      this.skillsContainer.addEventListener('mouseenter', () => {
        this.autoScrollEnabled = false
      })

      this.skillsContainer.addEventListener('mouseleave', () => {
        this.autoScrollEnabled = true
        this.autoScroll()
      })

      const addItemsToSkills = () => {
        for (let i = 0; i < this.originalSkillsLength; i++) {
          this.skills = [...this.skills, ...this.skills.slice(0, this.originalSkillsLength)];
        }
      }
      addItemsToSkills()

      this.skillsContainer.addEventListener('scroll', () => {
        // Check if the scroll bar has reached the bottom
        if(this.skillsContainer) {
          const isAtBottom =
            this.skillsContainer.scrollTop + this.skillsContainer.clientHeight >=
            this.skillsContainer.scrollHeight;

            if (isAtBottom) {
              addItemsToSkills()
            }
        }
      })
    }
  },
  methods: {
    stopAutoScroll () {
      this.autoScrollEnabled = false;
    },
    startAutoScroll () {
      this.autoScrollEnabled = true;
    },
    autoScroll() {
      if(this.skillsContainer && this.skillsContainer && this.autoScrollEnabled) {
        this.skillsContainer.scrollBy(0, 1.5)
        setTimeout(this.autoScroll, 60);
      }
    }
  }
})
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 600px) {
  .skills-container {
    width: 100% !important;
    max-height: 332px !important;
    margin-left: 0px !important;
  }

  .card-item {
    width: calc(100%/2 - 20px)
  }
}

.my-skills {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.title-container {
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;
}

.skills-container {
  width: 120%;
  margin-left: -41px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 4;
  gap: 24px;
  overflow-y: scroll;
  max-height: 400px;
  padding-bottom: 8px;
}
.skills-container::-webkit-scrollbar-thumb {
  background: #00A396; 
  border-radius: 10px;
}
.skills-container::-webkit-scrollbar {
  display: none;
  scrollbar-width: 20px;
  width: 4px;

}
.skills-container::-webkit-scrollbar-track {
  background: #3F3B68;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.my-skills-title {
  width: 118px;
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