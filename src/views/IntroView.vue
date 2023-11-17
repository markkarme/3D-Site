<template>
  <LoginedNav activeMenuItem="home" />
  <div class="ml-16 mr-16">
    <Info />
    <ChartsIndecation />
    <Recomand />
  </div>
</template>
  
  <script setup>
// data

import LoginedNav from "@/components/Comman/LoginedNav.vue";
import Info from "@/components/IntroPage/Info.vue";
import ChartsIndecation from "@/components/IntroPage/ChartsIndecation.vue";
import Recomand from "@/components/IntroPage/Recomand.vue";
</script>

  