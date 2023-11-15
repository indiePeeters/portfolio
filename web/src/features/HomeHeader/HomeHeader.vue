<template>
  <div ref="skillsContainer" class="home-header">
    <div class="home-header-content">
      <span class="home-header-title typing-words">
        <span>Hi! I am Indie<span ref="typingJobTitle" class="typing-job-title"></span></span>
      </span>
      <div class="home-header-buttons">
        <PrimaryButton buttonText="More about me"/>
        <PrimaryButton buttonText="More about my projects"/>
      </div>
      <div class="home-header-text">I am a passionate software developer in love with everything related front-end development. Guided by a user-centric approach, I craft solutions that not only resonate but also leave a lasting impact on the end users' experiences.</div>
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
  setup: () => {
    const skillsContainer = ref()
    const typingJobTitle = ref()

    const textLoad = () => {
        setTimeout(() => {
          if(typingJobTitle.value) {
            typingJobTitle.value.textContent = "Freelancer";
          }
        }, 0);
        setTimeout(() => {
          if(typingJobTitle.value) {
            typingJobTitle.value.textContent = "Blogger";
          }
        }, 4000);
        setTimeout(() => {
          if(typingJobTitle.value) {
            typingJobTitle.value!.textContent = "YouTuber";
          }
        }, 8000); //1s = 1000 milliseconds
    }
    textLoad();
    setInterval(textLoad, 12000);
  },
  methods: {
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
    margin-bottom: 0px !important;
  }

  .home-header-content {
    margin-top: 0px !important;
  }
}

.home-header-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
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

.typing-job-title {

  @include typed(
    (
      ", a Web\A developer": (
          color: #FFFFFF
      ),
      ", an App\A developer": (
          color: #FFFFFF
      ),
      ", an UX\A designer": (
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