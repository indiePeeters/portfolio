<template>
    <div class="my-skills">
      <div class="title-container">
        <div class="my-skills-title">My skills</div>
        <div class="line"></div>
      </div>
      <div ref="skillsContainer" class="skills-container">
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
    const skillsContainer = ref<HTMLDivElement>()

    const skills : Skill[] = [
      { name: "React", imageName: "reactLogo.png"},
      { name: "Vue", imageName: "vueLogo.png"},
      { name: "Graphql", imageName: "graphqlLogo.png"},
      { name: "Typescript", imageName: "typescriptLogo.png"},
      { name: "Dotnet", imageName: "dotNetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotNetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotNetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotNetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotNetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotNetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotNetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotNetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotNetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotNetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotNetCoreLogo.png"},
      { name: "Dotnet", imageName: "dotNetCoreLogo.png"}
    ]

    const autoScroll = () => {
      if(skillsContainer.value && autoScrollEnabled) {
        skillsContainer.value.scrollBy(0, 2)
        setTimeout(autoScroll, 40);
      }
    }

    onMounted(() => {
      autoScroll()
      if(skillsContainer.value) {
        skillsContainer.value.addEventListener('mouseenter', () => {
          autoScrollEnabled = false
        })

        skillsContainer.value.addEventListener('mouseleave', () => {
          autoScrollEnabled = true
          autoScroll()
        })
      }
    })

    return {
      skillsContainer,
      skills,
      onMounted
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