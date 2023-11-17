<template>
  <div class="security-intro pa-4">
    <v-row class="ml-16 mt-10" >
      <v-col>
        <div class="intro-text">
          <span class="text-1">We Keep Your </span>
          <span class="text-3">Secrets,</span>
          <span class="text-2">We Respect Your Privacy</span>
          
        </div>
        <img :src="require('@/assets/images//home/security-break.png')" />
      </v-col>
      <v-col align="start" justify="start">
        <div >
          <up-down-cube />
        </div>
      </v-col>
      
    </v-row>
  </div>
</template>
<script>
import UpDownCube from './UpDownCube.vue';
export default {
  components:{
    UpDownCube,
}
}
</script>
<style scoped>
.security-intro .intro-text {
  max-width: 500px;
}
.security-intro .text-1 {
  font-weight: 700;
  font-size: 48px;
  letter-spacing: 0.00938em;
  background: linear-gradient(to right, #4ac18e, #68ecff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.security-intro .text-2 {
  font-weight: 700;
  font-size: 48px;
  letter-spacing: 0.00938em;
  color: white;
}
.security-intro .text-3 {
  font-weight: 700;
  font-size: 48px;
  letter-spacing: 0.00938em;
  color: #4ac18e;
}
.security-intro .green-bg-1 {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 400px;
  perspective: 1000px;
  perspective-origin: 50% 50%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(26, 255, 157, 0.3) 0%,
    rgba(98, 249, 184, 0) 100%
  );
  border-radius: 7px;
}
</style>