<template>
  <v-card color="#292C3D" class="ml-5 mr-5">
    <v-row>
      <v-col>
        <Intro />
        <Trust />
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import Intro from './Intro.vue';
import Trust from './Trust.vue'
export default {
  components: {
    Intro,
    Trust
  },
};
</script>