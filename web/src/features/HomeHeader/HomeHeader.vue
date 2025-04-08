<template>
  <div ref="skillsContainer" class="home-header">
    <div class="home-header-content">
      <div class="home-header-title-cover">
        <span class="home-header-title typing-words">
          <span>Hi! I am Indie<span ref="typingJobTitle" class="typing-job-title"></span></span>
        </span>
        <img class="home-header-cover" src="/assets/cover.jpg">
      </div>
      <div class="home-header-buttons">
        <a class="no-underline" @click="scrollIntoView('about-me')"><PrimaryButton buttonText="More about me"/></a>
        <a class="no-underline" @click="scrollIntoView('my-projects')"><PrimaryButton buttonText="More about my projects"/></a>
      </div>
      <div class="home-header-text">I am a passionate software developer in love with everything related front-end development. Guided by a user-centric approach, I craft solutions that not only resonate but also leave a lasting impact on the end users' experiences.</div>
      <div class="social-icons">
        <a @click="onLinkedinClicked"><font-awesome-icon class='social-icon' :icon="['fab', 'linkedin']" /></a>
        <a @click="onGithubClicked"><font-awesome-icon class='social-icon' :icon="['fab', 'github']" /></a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'

export default defineComponent({
  components: {
    PrimaryButton
  },
  methods: {
    scrollIntoView(scrollTargetName: string) {
      const scrollTarget = document.getElementById(scrollTargetName);
      if (scrollTarget) {
        const offsetTop = scrollTarget.offsetTop;
 
        window.scrollTo({
          top: offsetTop - 32,
          behavior: 'smooth',
        });
      }
    },
    onLinkedinClicked () {
      window.open('https://www.linkedin.com/in/indie-peeters', '_blank');
    },
    onGithubClicked () {
      window.open('https://github.com/indiePeeters', '_blank');
    }
  }
})
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 600px) {

  .home-header-title {
    width: 100% !important;
  }
  .home-header {
    width: 100% !important;
    overflow: hidden !important;
  }
  .home-header-image {
    position:relative !important;
    mix-blend-mode: 'soft-light' !important;
    opacity: 50% !important;
    margin-left:-50% !important;
    width: 200% !important;
    max-height: 70% !important;
  }

  .home-header-buttons {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
  }

  .home-header-content {
    width: 100% !important;
  }

  .home-header-content {
    margin-top: 0px !important;
  }
}

.no-underline {
  text-decoration: none;
}

.home-header-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 182px;
}
.home-header-title {
  width: 50%;
  font-size: 34px;
  font-weight: 500;
  text-align: center;
  min-height: 82px !important;
}

.home-header-text {
  width: 100%;
}

.home-header-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.home-header-image {
  position:absolute;
  mix-blend-mode: 'soft-light';
  opacity: 50%;
  top: -50px;
  margin-left:380px;

}

.social-icons {
  padding-left: 16px;
  display: flex;
  flex-direction: row;
  gap: 32px;
  .social-icon {
    font-size: 30px;
    color: white;
  }
  .social-icon:hover {
    color: rgb(235, 213, 213);
  }
}

.home-header-title-cover {
  display: flex;
  flex-direction: row;
  gap: 100px;
  height: 100px;

  .home-header-title {
    min-width: 350px  ;
  }
  .home-header-cover {
    height: 250px;
    border-radius: 150px;
    top: -86px;
    position: relative;
  }
}

.typing-job-title {

  @include typed(
    (
      ", a Web\A developer": (
          color: #FFFFFF
      ),
      ", an App\A developer": (
          color: #FFFFFF
      ),
      ", a UX\A designer": (
        color: #FFFFFF
      )
    ),
    [
      null,
      .8,
      .08
    ],
    (
      caret-speed: .65,
      caret-width: 3px,
      caret-color: #00A396,
      caret-space: 1px
    )
  )
}
</style>