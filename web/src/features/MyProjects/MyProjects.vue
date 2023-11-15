<template>
  <div class="projects-container">
    <div class="projects-title-container">
        <div class="projects-title"><a id="my-projects">My projects</a></div>
        <div class="line"/>
    </div>
  </div>
</template>

<style lang="scss">
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
</style>