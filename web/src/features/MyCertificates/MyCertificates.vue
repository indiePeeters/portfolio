<template>
    <div class="my-certificates">
      <div class="title-container">
        <div class="my-certificates-title"><span id="my-certificates">My certificates</span></div>
        <div class="line"></div>
      </div>
      
      <div class="my-certificates-cards">
        <div class="card" v-for="certificate in certificates">
          <img :src="certificate.imageUrl"/>
          <div>
            <p class="mb-2 certificate-title">{{certificate.name}}</p>
            <span>{{certificate.date.toLocaleDateString()}}</span>
            <span>{{certificate.provider}} </span>
          </div>
          <PrimaryButton buttonText='Download' @click="onDownloadClicked(certificate.fileName)"/>
          <a ref="downloadLink" style="display: none"></a>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import SkillCard from '@/features/MySkills/SkillCard.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    SkillCard,
    PrimaryButton
  },
  data() {
    const certificates = [
      { name: "Advanced React", imageUrl: '/assets/skills/reactLogo.png', date: new Date(2025,3,24), provider: 'Coursera - Meta', fileName: 'coursera-meta-react-certificate-Indie-Peeters.pdf'}
    ]

    return { 
      certificates
    }
  },
  methods: {
    onDownloadClicked(filename : string) {
      const filePath = `/assets/certificates/${filename}`;

      const element = this.$refs.downloadLink as HTMLAnchorElement[]
      const AnchorElement = (element[0] as HTMLAnchorElement)
      AnchorElement.href = filePath;
      AnchorElement.setAttribute('download', filename);
      AnchorElement.click();
    }
  }
})
</script>

<style lang="scss" scoped>

.my-certificates {
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

.my-certificates-title {
  width: 180px;
  color: #FFFCF9;
  font-size: 26px;
  font-family: Roboto;
  font-weight: 500;
  word-wrap: break-word;
}

.my-certificates-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
}

.line {
  flex: 1 1 0;
  height: 0px;
  border: 1px #00A396 solid
}


.card {
  width: calc(100% / 2 - 14px);
  max-width: 184px;
  background: #3F3B68;
  box-shadow: 2px 3px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  gap: 16px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  text-align: center;
  img {
    width: 100px;
  }
  span {
    font-size: 14px;
    opacity: 0.6;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}


</style>