<template>
    <div class="project-content">
        <div class="project-title-container">
          <img class="background-circle" src="/assets/projects/lotr-audiobook/logo.png"/>
          <div class="project-title">Lord of the rings audiobook</div>
        </div>
        <p>This project turned a collection of "Lord of the Rings" audio recordings, made by friends, into a cool web-based audiobook player. It was a great opportunity to show off my React skills and make listening to the books super easy.</p>
        <div class="subtitle-section">
          <div class="project-techniques">
            <div class="project-technique">
              <v-img src="/assets/skills/reactLogo.png" title="React"/>
            </div>
            <div class="project-technique">
              <v-img src="/assets/skills/graphqlLogo.png" title="Graphql"/>
            </div>
            <div class="project-technique">
              <v-img src="/assets/skills/typescriptLogo.png" title="Typescript"/>
            </div>
          </div>
          <PrimaryButton :button-text="'Demo'" @click="onDemoClicked()"/>
        </div>
      <div class="project-sub-content">
        <div>
          <h2>The features of the audiobook</h2>
          <div class="line-thin"></div>
          This is a web app, built with React, TypeScript, and GraphQL, that lets you listen to the audio recordings. It features a custom audio player that I built to give users full control of their listening experience.
          <br/><br/>
          <img class="content-image" src="/assets/projects/lotr-audiobook/lotr-audiobook.png"/>
          <br/>
          <br/>
          <p>Here's are the features of the audiobook:</p>
          <br/>
          <div class="features">
            <strong>Easy Book and Chapter Navigation:</strong> Users can pick any book and chapter from the "Lord of the Rings" series. GraphQL makes finding the right chapter really fast.
            <br/>
            <br/>
            <strong>Custom Audio Player:</strong> I built the audio player myself, so it's perfect for listening to audiobooks. It has all the standard controls, plus it's designed for smooth playback.
            <br/>
            <br/>
            <strong>Chapter Search:</strong> There's a search bar on the homepage that lets you find any chapter by keyword, so you can jump right to where you want to be.
            <br/>
            <br/>
          </div>

This project demonstrates my ability to build user-friendly web apps with React, and how to use GraphQL to manage data. Building the custom audio player was a fun challenge, and it really improved the user experience.
</div>
</div>    
</div>
</template>

<script lang="ts">
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    PrimaryButton
  },
  methods: {
    onDemoClicked(){
      window.open('https://lotr.indiepeeters.dev', '_blank');
    }
  }
}) 
</script>
<style lang="scss" scoped>

@media only screen and (max-width: 600px) {
  .background-circle {
    background: white;
    border-radius: 50px !important;
  }
  .flex-row {
    flex-direction: column !important;
  }
  .header-image {
    width: 100% !important;
  }

  .project-title-container {
    flex-direction: column !important;
    text-align: center;
    img { 
      max-width: 150px !important;
      max-height: 150px !important;
    }
  }
}

.flex-row {
  display: flex;
  flex-direction: row;
  gap: 32px;
}
.background-circle {
  background: white;
  border-radius: 30px;
}

.ordered-list {
  padding-left: 32px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap:10px;
}

.video {
  border-radius: 30px;
  width: 100%;
}

.project-title-container {
  display: flex;
  margin-top:32px;
  gap: 16px;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100px;
    max-height: 100px;
  }
}

.project-title {
  color: #FFFCF9;
  font-size: 34px;
  font-family: Roboto;
  font-weight: 500;
  word-wrap: break-word;
}

.header-image {
  width: 30%;
  border-radius: 25px;
  object-fit:contain;
  object-position: 60%;
}

.project-sub-content {
  display: flex;
  flex-direction: column;
  gap: 32px;  
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 32px;  
  margin-bottom:32px;
}

.line {
  flex: 1 1 0;
  height: 0px;
  border: 1px #00A396 solid;
  margin-bottom: 32px;
}


.line-thin {
  flex: 1 1 0;
  height: 0px;
  border: 1px #00A396 solid;
  margin-bottom: 16px;
}

.content-image {
  width: 100%;
}

.features {
  padding-left: 12px;
}

.project-techniques {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  .project-technique {
    width: 30px;
  }
}
.subtitle-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  justify-content: center;
}
  </style>