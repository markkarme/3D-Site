<template>
  <v-row class="mb-16">
    <v-col>
      <div class="text-center mb-16">
        <ScrollDown />
      </div>
      <v-row class="cards mb-16 mt-16">
        <v-col class="green-bg">
          <div></div>
          <v-row>
            <v-col md="4" v-for="i in 4" :key="i">
              <Hexagon />
            </v-col>
          </v-row>
        </v-col>
        <v-col class="ml-10" md="5">
          <div data-aos="fade-left">
            <div class="head">
              <span class="text-head-1"> Stay Ahead </span>
              <span class="text-head-2">of the Curve</span>
            </div>

            <v-row class="mt-5">
              <div class="line-11"></div>
              <div class="line-2"></div>
              <div class="line-3"></div>
            </v-row>
            <p class="detail mt-5">
              How do the world's largest brands and mission-critical
              organizations overcome the challenges of threat complexity & the
              cybersecurity talent shortage? They make security operations
              Sigma-enabled, future-proof the team's hard skills, and break
              through dependency on the SIEM & EDR tech stack while taking its
              cost efficiency to the limit. Sounds like a dream come true? Read
              on for the full story on the future of Collective Cyber Defense.
            </p>
            <v-row>
              <div class="detials-btn mt-9">
                <v-btn class="read-on-btn" variant="outlined" color="#4AC18E"
                  >Read On</v-btn
                >
                <v-btn variant="text" elevation="0" class="talk-btn ml-5"
                  >TALK WITH SALES</v-btn
                >
              </div>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import ScrollDown from "./ScrollDown.vue";
import Hexagon from "./Hexagon.vue";
export default {
  components: {
    ScrollDown,
    Hexagon,
  },
};
</script>  
<style  >
.detials-btn .read-on-btn .v-btn__content {
  color: white;
}
.detials-btn .read-on-btn:hover {
  background-color: #4ac18e;
}
.talk-btn:hover {
  background-color: transparent;
  color: #4ac18e;
  text-decoration: underline #4ac18e;
  text-underline-offset: 5px;
}
.head {
  max-width: 380px;
}
.cards {
  margin-top: 2000px;
}
.green-bg {
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(26, 255, 157, 0.3) 0%,
    rgba(98, 249, 184, 0) 100%
  );
}
.text-head-1 {
  font-weight: 700;
  line-height: 1.2;
  background: linear-gradient(to right, #4ac18e, #68ecff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 42px;
}
.text-head-2 {
  font-weight: 700;
  line-height: 1.2;
  font-size: 42px;
}
.line-11 {
  width: 15px;
  border-top: 3px solid #4ac18e;
}
.line-2 {
  margin: 0px 5px 0px 5px;
  width: 50px;
  border-top: 3px solid #4ac18e;
}
.line-3 {
  width: 15px;
  border-top: 3px solid #4ac18e;
}
.detail {
  font-weight: 400;
  color: rgb(207, 208, 211);
  font-size: 16px;
  font-family: Inter, sans-serif;
  letter-spacing: 0.00938em;
}
</style>