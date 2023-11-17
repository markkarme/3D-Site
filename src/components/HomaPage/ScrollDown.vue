<template>
  <v-row>
    <v-col align="center" justify="center">
      <div class="box">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </v-col>
  </v-row>
</template>
  
  <style scoped>
.box span {
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-bottom: 5px solid #5ac698;
  border-right: 5px solid #5ac698;
  transform: rotate(45deg);
  margin: -10px;
  animation: animate 2s infinite;
}

.box span:nth-child(2) {
  animation-delay: -0.2s;
}

.box span:nth-child(3) {
  animation-delay: -0.4s;
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}
</style>