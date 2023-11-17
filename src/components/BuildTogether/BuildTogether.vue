<template>
  <v-card color="#292C3D" class="ml-5 mr-5">
    <v-row>
      <v-col>
        <Intro />
        <sigma />
        <Content />
        <UnderCode />
        <SigmaRule />
        <PrimeHunt />
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import Intro from "./Intro.vue";
import sigma from "./sigma.vue";
import Content from "./Content.vue";
import UnderCode from "./UnderCode.vue"
import SigmaRule from "./SigmaRule.vue"
import PrimeHunt from "./PrimeHunt.vue"
export default {
  components: {
    Intro,
    sigma,
    Content,
    UnderCode,
    SigmaRule,
    PrimeHunt
    
  },
};
</script>