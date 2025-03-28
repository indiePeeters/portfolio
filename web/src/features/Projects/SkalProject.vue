<template>
  <div class="project-content">
    <div class="project-title-container">
      <img class="background-circle" src="/assets/projects/skal/logo.png"/>
      <div class="project-title">Bio certification transparency through innovating Mijn.Skal portal</div>
    </div>
    <p>When you're shopping for groceries, you might find products labeled as "Bio" which means they're organic. But it's not something manufacturers can just claim on their own. To get that "Bio" label, they have to pass audits by a group like Skal in the Netherlands. With these audits Skal ensures the transparency and honesty in the production process of these products.</p>
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
          <div class="project-technique">
            <v-img src="/assets/skills/dotnetCoreLogo.png" title=".Net"/>
          </div>
        </div>
    <div class="project-sub-content">
      <div>
        <h2>The case</h2>
        <div class="line-thin"></div>
      </div>
      <div >
        <div>
          <p>Before a product can be labelled as Bio it needs to make sure that everything in their production process meets the European legal regulations. These regulations focus on biodiversity and animal wellfare. Skal audits everything in the production chain, from seeds and crop rotation, till packaging and storage. When the whole production process of a product meets these regulations, then it can be labelled as bio</p>
          <br/>
          <p>After a product as labelled as Bio, The manufacturer is responsible to make sure that every product it uses in their production process is also certify as Bio by Skal. Of course Skal also re-audits manufacturers, farmers or logistic companies. But the responsibility lies with the manufacturers. To make sure manufacturers are able to see if the products they use in their production process are labelled as Bio, Skal needed a platform</p>
            
        </div>
      </div>
    </div>
    <div class="project-sub-content">
      <div>
        <h2>The solution</h2>
        <div class="line-thin"></div>
        <br/>
        <p>The Mijn.Skal portal serves as a comprehensive solution, addressing the need for efficient certificate management. This platform empowers manufacturers by providing a centralized system for monitoring certificates related to products, areas, processes, and more. Through the portal, manufacturers gain visibility into their own bio certificates and have the capability to share them with other manufacturers utilizing their products in the production process. </p>
        <br/>
        <p>Additionally, the system takes a proactive approach by alerting manufacturers when any of their subscribed certificates is approaching expiration. This proactive notification system empowers manufacturers to take prompt action in response to these alerts. With the assistance of this certificate management system, manufacturers can verify that every element of their product's production process is labeled as bio. </p>

      </div>

      <div>
        <h2>My contribution</h2>
        <div class="line-thin"></div>
        <br/>
        <p>During this project, I applied my experience and expertise from the Partou project to improve the quality of the software. This involved setting up the frontend, developing backend functions, guiding junior developers in feature development, and contributing significantly to key software decisions for the project.</p> 
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
  border: 1px #00A396 solid
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

.line-thin {
  flex: 1 1 0;
  height: 0px;
  border: 1px #00A396 solid
}
</style>