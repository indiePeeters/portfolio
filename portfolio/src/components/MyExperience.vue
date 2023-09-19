<template>
  <div class="my-experience-container">
    <div class="my-experience-title-container">
      <div class="my-experience-title">My experience</div>
      <div class="line"/>
    </div>
      <div class="company-experience-container">

          <div class="company-icon">
            <img style="width: 40px; height: 40px" src="@/assets/whyellow.png" />
          </div>
        <div class="experience-container">
          <div>
            <div class="role-title"> Software developer (current) </div>
            <div class="company-name"> Whyellow, Eindhoven </div>
          </div>
          <div class="role-description">
            <span>
              During my time at Whyellow, I worked with a dedicated team on two big projects. I was one of the few team members
              who loved frontend development, so I ended up handling the frontend work for both projects.
              <br /><br />
              One of these projects was a web system for Partou, which I'll talk about more here.
              During this project, I took on some major tasks and gradually became one of the more experienced team
              members. As the project continued, I also took over the responsibility of making the user experience and
              design better.
              <br /><br />
              On top of all that, I had the chance to help out junior software developers and show them the ropes
              in frontend development.
            </span>
          </div>
        </div>
    </div>
    <div class="timeline-container">
      <div class="timeline-item">
        <div class="hidden timeline-year">2019</div>
        <div class="timeline-icon">
          <img style="width: 20px; height: 20px" src="@/assets/mapcreator.png" />
        </div>
        <div class="hidden timeline-year"> 2019</div>
      </div>
      <div class="line"></div>

      <div class="timeline-item">
        <div class="hidden timeline-year">2019</div>
        <div class="timeline-icon">
          <img style="width: 20px; height: 20px" src="@/assets/opencirclesolutions.png" />
        </div>
        <div class="hidden timeline-year"> 2019</div>
      </div>
      <div class="line"></div>

      <div class="timeline-item">
        <div class="timeline-year timeline-year-big">2019</div>
        <div class="company-icon">
          <img style="width: 40px; height: 40px" src="@/assets/whyellow.png" />
        </div>
        <div class="hidden timeline-year timeline-year-big"> 2019</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.line {
  flex: 1 1 0; height: 0px; border: 1px #00A396 solid;
}

.hidden {
  opacity: 0%;
}

.my-experience-container {
  width: 100%; 
  height: 100%; 
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: flex-start; 
  gap: 8px; 
  display: inline-flex
}

.my-experience-title-container {
  align-self: stretch; 
  padding-bottom: 24px; 
  justify-content: flex-start; 
  align-items: center;
  gap: 10px; 
  display: inline-flex
}

.my-experience-title {
  width: 178px;
  color: #FFFCF9;
  font-size: 26px;
  font-family: Roboto;
  font-weight: 500;
  word-wrap: break-word;
}

.company-experience-container {
  align-self: stretch;
  padding: 16px;
  background: rgba(34.40, 30.71, 72.25, 0);
  border-radius: 30px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex
}

.company-icon {
  padding: 9px;
  background: white;
  border-radius: 30px;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  display: inline-flex;
}
.experience-container {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}

.role-title {
  width: 516px;
  height: 31px;
  color: #FFFCF9;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 500;
  word-wrap: break-word;
}

.role-description {
  width: 600px;
}

.company-name {
  width: 372px;
  height: 28px;
  color: white;
  font-size: 18px;
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word
}

.timeline-container {
  align-self: stretch;
  height: 100px;
  padding-left: 32px;
  padding-right: 32px;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: inline-flex;
}
.timeline-item {
  align-self: stretch;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
}

.timeline-icon {
  padding: 6px;
  background: white;
  border-radius: 30px;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  display: inline-flex;
}

.timeline-year {
  width: 58px;
  text-align: center;
  font-size: 15px;
  font-family: Roboto;
  font-weight: 700;
  word-wrap: break-word;
}

.timeline-year-big {
  font-size: 21px !important;
  font-weight: bold !important;
}


</style>