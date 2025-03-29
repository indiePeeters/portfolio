<template>
  <div class="projects-container">
    <div class="projects-title-container">
        <div class="projects-title"><span id="my-projects">My projects</span></div>
        <div class="line"/>
    </div>
    <p>My journey in web development has been shaped by a variety of projects, each presenting unique challenges and opportunities. From developing intuitive frontends to creating robust backend systems </p>
    <div class="projects">
      <template v-for="project in projects">
        <v-card class="project" @click="onProjectClicked(project.title.toLocaleLowerCase())" >
          <img :src="project.imageUrl" cover/>
          <v-card-title>{{project.title}}</v-card-title>
          <v-card-subtitle>{{project.subtitle}}</v-card-subtitle>
          <v-card-actions>
            <div class="project-techniques">
              <template v-for="technique in project.techniques">
                <div class="project-technique">
                  <v-img :src="technique.imageUrl" :title=technique.name />
                </div>
              </template>
            </div>
            <v-btn
              color="orange-lighten-2"
              text="Explore"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { ROUTES } from '@/router';
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      projects: [
        { 
          title: "Lord of the rings audiobook", 
          subtitle: "An online audiobook of lord of the rings, to listen and relax to", 
          imageUrl: '/assets/projects/lotr-audiobook/lotr-audiobook.png', 
          techniques: [
          { 
              name: "React", 
              imageUrl: '/assets/skills/reactLogo.png' 
            },
            { 
              name: "Graphql", 
              imageUrl: '/assets/skills/graphqlLogo.png' 
            },
            { 
              name: "Typescript", 
              imageUrl: '/assets/skills/typescriptLogo.png' 
            }
          ]},
        { 
          title: "Partou", 
          subtitle: "Revolutionizing Childcare: A Journey of Innovation to Empower Parents", 
          imageUrl: '/assets/projects/partou/desktop.png', 
          techniques: [
            { 
              name: "Vue", 
              imageUrl: '/assets/skills/vueLogo.png' 
            },
            { 
              name: "Dotnet", 
              imageUrl: '/assets/skills/dotnetCoreLogo.png' 
            },
            { 
              name: "Graphql", 
              imageUrl: '/assets/skills/graphqlLogo.png' 
            },
            { 
              name: "Typescript", 
              imageUrl: '/assets/skills/typescriptLogo.png' 
            },
            { 
              name: "Figma", 
              imageUrl: '/assets/skills/figma.png' 
            }
          ]
        },
        { 
          title: "Skal",
          subtitle: "Bio certification transparency through innovating Mijn.Skal portal",
          imageUrl: '/assets/projects/skal/skal.png',
          techniques: [
          { 
              name: "React", 
              imageUrl: '/assets/skills/reactLogo.png' 
            },
            { 
              name: "Dotnet", 
              imageUrl: '/assets/skills/dotnetCoreLogo.png' 
            },
            { 
              name: "Graphql", 
              imageUrl: '/assets/skills/graphqlLogo.png' 
            },
            { 
              name: "Typescript", 
              imageUrl: '/assets/skills/typescriptLogo.png' 
            }
          ]
        },
      ]
    };
  },
  methods: {
    onProjectClicked(projectName : string) : void {
      this.$router.push({ name: ROUTES.project, params: { projectName } })
    }
  }
}) 
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .projects {
    .project {
      width: 100% !important;
      img {
        height: 163px;
        width: 100% !important;
      }
    }
  }
}

.projects {
  display: flex;
  flex-direction: row;
  flex-basis: calc(50% - 48px);
  gap: 48px;
  flex-wrap: wrap;
  .project {
    width: calc(50% - 24px);
    img {
      height: 163px;
      width: 326px;
    }
    .project-techniques {
      display: flex;
      flex-direction: row;
      gap: 12px;
      .project-technique {
        width: 30px;
      }
    }
  }
}

.projects-container {
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  display: inline-flex;
}

.projects-title-container {
  align-self: stretch;
  justify-content: center;
  align-items: center;
  gap: 32px;
  display: inline-flex;
}

.projects-title {
  width: 140px;
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

.v-card {
  background-color: #3F3B68;
  border-radius: 28px;
  color: white;
  .v-card-subtitle {
    text-wrap: auto;
  }
  .v-card-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px !important;
    color: white;
    .v-btn {
      color: #2DCEC1 !important;
    }
  }
  .v-card-title {
    padding: 16px !important;
  }
}
</style>