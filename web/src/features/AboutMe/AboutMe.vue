<template>
  <div class="about-me-container">
    <div class="about-me-title-container">
        <div class="about-me-title"><span id="about-me">About me</span></div>
        <div class="line"/>
    </div>
    <div class="about-me-description">
        <div>
            <div>Im a bold and passionate software developer with a keen focus on front-end development. My passion lies in creating websites and applications that guide users through their digital journeys. Throughout my career, I've tackled numerous projects, taking on noteable responsibilities in both coding and designing innovative features. </div>
            <br/>
            <div>In my personal life, I continuously seek out challenges that push my boundaries. I have a deep passion for climbing, hiking, biking, and skiing. Throughout the year, my days are often spent in the boulder gym, strumming my guitar, and dedicating time to crafting my own campervan. When summer arrives, I immerse myself in my outdoor enthusiast spirit, venturing into the Alps to conquer the highest peaks.</div>
        </div>
        <img class="portrait" src="/assets/portrait.jpeg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .about-me-description {
    flex-wrap: wrap-reverse;
  }
}

.line {
  flex: 1 1 0;
  height: 0px;
  border: 1px #00A396 solid
}

.about-me-container {
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  display: inline-flex;
}

.about-me-title-container {
  align-self: stretch;
  justify-content: center;
  align-items: center;
  gap: 32px;
  display: inline-flex;
}

.about-me-title {
  width: 114px;
  color: #FFFCF9;
  font-size: 26px;
  font-family: Roboto;
  font-weight: 500;
   word-wrap: break-word;
}

.about-me-description {
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 36px;
  display: inline-flex;
}

.portrait {
  width:100%;
  max-width: 345px;
  max-height: 345px;
  flex: 1 1 0; 
  border-radius: 24px
}


</style>