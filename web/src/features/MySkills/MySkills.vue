<template>
    <div class="my-skills">
      <div class="title-container">
        <div class="my-skills-title"><a id="my-skills">My skills</a></div>
        <div class="line"></div>
      </div>
      <div ref="skillsContainer" class="skills-container" @mouseenter="stopAutoScroll" @mouseleave="startAutoScroll">
        <div class="card-item" :key="skill.name" v-for="skill in skills">
            <SkillCard :title="skill.name" :imageName="skill.imageName" />
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import SkillCard from '@/features/MySkills/SkillCard.vue'
import { defineComponent, onMounted, ref } from 'vue'

type Skill = {
  imageName: string
  name: string
}

export default defineComponent({
  components: {
    SkillCard
  },
  setup() {
    let autoScrollEnabled = true
    const skillsContainer = ref<HTMLDivElement>().value ?? undefined 
    const skills = ref<Skill[]>([
      { name: "React", imageName: "reactLogo.png"},
      { name: "Vue", imageName: "vueLogo.png"},
      { name: "Graphql", imageName: "graphqlLogo.png"},
      { name: "Typescript", imageName: "typescriptLogo.png"},
      { name: "Dotnet", imageName: "dotnetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotnetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotnetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotnetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotnetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotnetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotnetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotnetCoreLogo.png"}
    ]).value

    const originalSkillsLength = skills.length

    return {
      originalSkillsLength,
      autoScrollEnabled,
      skillsContainer,
      skills,
      onMounted
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
    
      this.skillsContainer.addEventListener('scroll', () => {
        // Check if the scroll bar has reached the bottom
        if(this.skillsContainer) {
          const isAtBottom =
            this.skillsContainer.scrollTop + this.skillsContainer.clientHeight >=
            this.skillsContainer.scrollHeight;

          if (isAtBottom && this.autoScrollEnabled) {
            for (let i = 0; i < this.originalSkillsLength; i++) {
              this.skills.push({ name: this.skills[i].name, imageName: this.skills[i].imageName });
            }
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
  overflow: hidden !important;
}
.skills-container::-webkit-scrollbar-thumb {
  background: #00A396; 
  border-radius: 10px;
}
.skills-container::-webkit-scrollbar {
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