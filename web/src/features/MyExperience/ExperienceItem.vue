<template>
  <div class="company-experience-container">
    <div class="company-icon">
        <img style="width: 40px; height: 40px" :src="companyLogo" />
      </div>
    <div class="experience-container">
      <div class="experience-header-container">
        <div class="company-icon-mobile">
          <img style="width: 40px; height: 40px" :src="companyLogo" />
        </div>
        <div class="role-title-container">
          <div class="role-title"> {{ roleTitle }}</div>
          <div class="company-name"> {{ company }} </div>
          <div class="duration"> {{ startYear }} - {{ endYear }} </div>

        </div>
      </div>
      <div class="role-description">
          <span v-html="roleDescription"> </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    experienceIndex: { type: Number },
    roleTitle: { type: String },
    roleDescription: { type: String },
    company: { type: String, required: true },
    companyLogo: { type: String, required: true },
    startYear: { type: Number, required: true },
    endYear: { type: Number },
  },
  setup() {
  }
})
</script>
<style lang="scss" scoped>
  @media only screen and (max-width: 600px) {
    .company-icon {
      display: none !important;
    }

    .company-icon-mobile {
      margin-top: 10px;
      display: inline  !important;
      height: 58px !important;
    }

    .experience-header-container {
      overflow: hidden;
      width: 100% !important;
      display: flex;
      gap: 16px;
    }
    .company-experience-container {
      padding: 0px !important;
    }

    .role-title-container {
      width: 100% !important
    }
  }

.company-experience-container {
  min-height: 318px;
  align-self: stretch;
  padding: 16px;
  background: rgba(34.40, 30.71, 72.25, 0);
  border-radius: 30px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
}

.company-icon {
  margin-top: 10px;
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
  padding: 9px;
  gap: 5px;
  img {
    width: 40px;
    height: 40px;
  }
}

.experience-container {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  display: inline-flex;
}

.role-title {
  height: 31px;
  color: #FFFCF9;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.role-description {
  width: 100%;
  max-width: 600px;
}

.company-name {
  height: 28px;
  color: white;
  font-size: 18px;
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.duration {
  font-size: 12px;
}
</style>