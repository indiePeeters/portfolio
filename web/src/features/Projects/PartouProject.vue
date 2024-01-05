<template>
  <div class="project-content">
    <div class="project-title-container">
      <img src="/assets/projects/partou/logo.png"/>
      <div class="project-title">Revolutionizing Childcare: A Journey of Innovation to Empower Parents</div>
    </div>
    <p>Partou is a well-respected childcare organization in the Netherlands, currently a leader in the market. They've grown a lot, now having over 900 locations across the country and providing daycare for more than 80 thousand children. During my time at Whyellow, I had the chance to be a part of this big project.</p>
    <div class="project-sub-content">
      <div>
        <h2>The case</h2>
        <div class="line-thin"></div>
      </div>
      <div class="flex-row">
        <div>
          <p> Arranging childcare can be quite the hassle for parents. They had a tough time registering their kids for daycare. Here's how it used to work:</p>
          <br/>
          <ol class="ordered-list">
            <li>Parents had to search and pick a daycare online on the website.</li>
            <li>Then, they filled out a form with their kid's details, contact info, and the days they preferred.</li>
            <li>A planner checked if those preferred days are available with the daycare's schedule and if it would meet the strict government's rules regarrding childcare.</li>
            <li>Usually, the preferred days didn't fit, so the planner suggested different days.</li>
            <li>Once parents agreed on the new days, they had to give more info for a contract.</li>
            <li>The planner would setup a contract and send this to the parent</li>
            <li>After the parent has signed the contract the childcare would be definitive</li>
            <li>Now the parent could bring their child to the daycare on the start date</li>
          </ol>
        </div>
        <img class="header-image" src="/assets/projects/partou/mobile.png"/>
      </div>
      <p>This whole back-and-forth with the planner could take more than two weeks to finalize childcare. That's a lot of time!</p>

      <p>Another challenge was to try to optimize and automize the planning. Currently a Planner has to manually make all the important decisions to make sure no gaps occur in the planning. This takes a lot of time and resources. 
        It would be nice if these gaps can prevented by planning smarter and automatically</p>
    </div>
    <div class="project-sub-content">
      <div>
        <h2>The solution</h2>
        <div class="line-thin"></div>
        <br/>
        <p>
          Modern parents highly value flexibility and independence in childcare choices. Our designed system caters to these preferences by allowing parents to input their desired days and preferred childcare area. Within seconds, the system identifies the best-suited locations, empowering parents to choose their preferred option and complete the entire process, including signing contracts, online. This approach provides parents with the autonomy to explore different days and areas to find childcare that aligns with their needs.
          <br/>
          <br/>
          Once a booking is made, our system ensures compliance with Dutch laws and regulations concerning childcare. It optimizes the location based on the new booking, ensuring efficient utilization and meeting the parents' requests.
          <br/>
          <br/>
          The software comprises two frontends: the parent-side frontend, enabling parents to find and book childcare, and the planner-side frontend, allowing planners to manage the planning system and view all bookings. The video below primarily focuses on the parent-side experience.
        </p>     
        <br/>
        <br/>
        <video class="video" controls>
          <source src="/assets/projects/partou/video.mp4" type="video/mp4">
        </video>
      </div>

      <div>
        <h2>My contribution</h2>
        <div class="line-thin"></div>
        <br/>
        <p> 
          I dedicated over four years to this project, mainly working on the frontend using Vue, Typescript, HTML, SCSS, GraphQL, and Hasura. In the first two years, my focus on frontend development led to a senior role, where I handled everything from creating user stories and tweaking designs to fixing bugs and guiding junior developers.
          <br/>
          <br/>
          As the project progressed, I gradually got involved in backend tasks, starting with small features and code improvements. Later I refactored larger functionalities of the backend.
          <br/>
          <br/>
          As part of the project, we were asked to create a helpful tool: a child benefit calculator for parents in the Netherlands. I designed and developed a user-friendly online calculator, which you can check out <a href="https://partou.nl/rekentool" target="_blank">here</a>
        </p> 
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {

  }
}) 
</script>
<style lang="scss" scoped>

@media only screen and (max-width: 600px) {

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
  border: 1px #00A396 solid
}


.line-thin {
  flex: 1 1 0;
  height: 0px;
  border: 1px #00A396 solid
}
</style>