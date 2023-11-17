<template>
  <div class="proactive">
    <v-card color="#292C3D" class="ml-5 mr-5 green-bg-left">
      <v-row>
        <v-col>
          <v-row class="ml-16 mt-10">
            <v-col>
              <div class="head">
                <span class="text-head-1"> Proactive </span>
                <p class="text-head-2">Cyber Defense</p>
              </div>
              <span class="text-head-3"
                >The world stands on the brink of a global cyber war. Each side
                is trying to learn about a new software or configuration flaw so
                they can have the first-strike advantage. The side that can
                weaponize and strike first will have a clear upper hand. The
                defenders, in turn, need to understand the risk, prioritize
                actions, and then implement a detection and mitigation strategy.
                The blue team has the odds stacked against them. To overcome
                these,
              </span>
              <span class="text-head-4">
                we can do one thing that the attackers cannot - we can defend
                together and improve our chances for success.</span
              >
            </v-col>
            <v-col>
              <div class="parent">
                <img :src="require('../../assets/images/security/security-1.png')" class="image1" />
                <!-- <up-down-cube  class="image-2"/> -->
              </div>
              
              
            </v-col>
          </v-row>
          <v-row>
            <v-col md="2" align="center" justify="center">
              <img :src="require('@/assets/images/home/proctive-2.png')" />
            </v-col>
            <v-col md="10">
              <div data-aos="fade-left">
                <span class="text-1">Faster</span>
                <span class="text-2"> Than Attackers</span>
                <div class="mt-5">
                  <span class="text-3">
                    With MITRE ATT&CK, the global community of cyber defenders
                    retrospectively describes every common method used in cyber
                    attacks. Meanwhile, the invention of
                  </span>
                  <span class="text-4"> Sigma rules </span>
                  <span class="text-3">
                    allowed defenders to describe every used and potentially
                    usable attack behavior and logic through the detection code.
                    By fusing ATT&CK and Sigma, we've created a knowledge base
                    that is updated every minute and is searchable by defenders
                    at sub-second performance. This presents an opportunity for
                    defenders to learn about threats faster, prioritize in
                    minutes, deploy detection code in an automated fashion and
                    focus their effort on operations and preparing mitigation
                    before adversaries have a chance to attack.
                  </span>
                </div>
                <v-btn
                  class="sign-up-btn mt-5"
                  variant="outlined"
                  color="#4AC18E"
                  >Search NOW</v-btn
                >
              </div>
            </v-col>
          </v-row>
          <v-row class="">
            <img
              style="margin-left: 100px"
              :src="require('@/assets/images/proactive-screen.png')"
            />
          </v-row>
          <v-row>
            <v-col md="2" align="center" justify="center">
              <img :src="require('@/assets/images/home/proctive-2.png')" />
            </v-col>
            <v-col md="10">
              <div class="mt-16" data-aos="fade-left">
                <v-icon size="60" color="#4AC18E">mdi-clock-fast</v-icon>
                <span class="clock-text-1"> Master the</span>
                <span class="clock-text-2">Timeline</span>
                <div style="max-width: 600px">
                  <span class="clock-text-3"
                    >Assembling a threat timeline takes time. That's why we
                    automated it.</span
                  >
                  <span class="clock-text-4"
                    >Complete threat context is now at your fingertips,
                    including: detection code, threat intelligence, CVE
                    descriptions, exploit POCs along with mitigation and media
                    links.</span
                  >
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <div class="card-details">
              <v-card variant="outlined">
                <v-row>
                  <div
                    class="d-flex"
                    v-for="(item, index) in cardData"
                    :key="index"
                  >
                    <v-col class="">
                      <v-icon
                        size="30"
                        style="margin-top: 2px; margin-right: 3px"
                        >{{ item.icon }}</v-icon
                      >
                    </v-col>
                    <v-col>
                      <p class="card-text">{{ item.text }}</p>
                      <div class="card-line"></div>
                      <p class="card-text">{{ item.date }}</p>
                    </v-col>
                    <v-col v-show="index != 4">
                      <div class="card-line-23"></div>
                    </v-col>
                  </div>
                </v-row>
              </v-card>
            </div>
          </v-row>
          <v-row>
            <v-col md="2" align="center" justify="center">
              <img :src="require('@/assets/images/home/proctive-2.png')" />
            </v-col>
            <v-col md="10">
              <v-row align="center" justify="center">
                <v-col >
                  <div data-aos="fade-left">
                    <span class="clock-text-2">24-hour</span>
                    <span class="clock-text-1"> Threat Coverage</span>
                    <p class="text-3 mt-5"> 
                      When detecting critical threats, you have no time to
                      spare. Backed by our crowdsourcing initiative, we run
                      follow-the-sun detection engineering operations leaving no
                      chance for emerging threats, exploits, or TTPs to go
                      undetected on your watch.
                    </p>
                  </div>
                </v-col>
                <v-col class="mt-10">
                  <img :src="require('@/assets/images/home/map.png')" />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import UpDownCube from '../Security/UpDownCube.vue';
export default {
  components:{
    UpDownCube,
  },
  data() {
    return {
      cardData: [
        {
          id: 1,
          icon: "mdi-book",
          text: "Media",
          date: "12 Oct 2022",
        },
        {
          id: 2,
          icon: "mdi-fire",
          text: "CVE",
          date: "13 Oct 2022",
        },
        {
          id: 3,
          icon: "mdi-dots-square",
          text: "#threatintel",
          date: "12 Oct 2022",
        },
        {
          id: 4,
          icon: "mdi-rocket-launch",
          text: "Exploit",
          date: "17 Oct 2022",
        },
        {
          id: 5,
          icon: "mdi-check-bold",
          text: "Sigma Rule",
          date: "21 Oct 2022",
        },
      ],
    };
  },
};
</script>
<style >
.proactive .parent {
  position: relative;
  top: 0;
  left: 0;
  /* max-width: 250px; */
}
.proactive .image1 {
  position: relative;
  top: 0;
  left: 0;
}
.proactive .image2 {
  position: absolute;
  top: 85px;
  left: 85px;
}
.proactive .card-details {
  margin-left: 100px;
}
.proactive .card-details .card-line-23 {
  margin-left: 10px;
  height: 0px;
  width: 100px;
  margin-top: 20px;
  border: 1px solid white;
}
.proactive .card-details .card-line {
  width: 80px;
  border: 1px solid white;
}
.proactive .card-details .card-text {
  font-weight: 600;
  color: rgb(249, 249, 249);
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0.01071em;
}
.proactive .card-details .v-card {
  padding: 20px;
  color: #cfd0d3;
  border-color: #4ac18e;
  background-color: #303344;
  box-shadow: 0 4px 8px 0 #4ac18e, 0 6px 20px 0 #4ac18e;
}
.proactive .clock-text-1 {
  font-size: 34px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01562em;
  color: rgb(249, 249, 249);
  padding-top: 100px;
}
.proactive .clock-text-2 {
  font-size: 34px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01562em;
  color: #4ac18e;
}
.proactive .clock-text-3 {
  font-size: 14px;
  font-weight: 500;
  color: rgb(249, 249, 249);
  line-height: 1.4;
  letter-spacing: 0.00938em;
}
.proactive .clock-text-4 {
  font-size: 14px;
  font-weight: 500;
  color: rgb(207, 208, 211);
  line-height: 1.4;
  letter-spacing: 0.00938em;
}
.proactive .green-bg-left {
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(26, 255, 157, 0.3) 0%,
    rgba(98, 249, 184, 0) 100%
  );
}
.proactive .sign-up-btn .v-btn__content {
  color: white;
}
.proactive .sign-up-btn:hover {
  background-color: #4ac18e;
}
.proactive .text-1 {
  font-weight: 700;
  line-height: 1.2;
  color: #4ac18e;
  font-size: 32px;
}
.proactive .text-3 {
  color: #aaacb9;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}
.proactive .text-4 {
  color: #4ac18e;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  text-decoration: underline;
}
.proactive .text-2 {
  font-weight: 700;
  line-height: 1.2;
  color: rgb(249, 249, 249);
  letter-spacing: -0.01562em;
  font-size: 32px;
}
.proactive .text-head-1 {
  font-weight: 700;
  line-height: 1.2;
  background: linear-gradient(to right, #4ac18e, #68ecff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 48px;
}
.proactive .text-head-2 {
  font-weight: 700;
  line-height: 1.2;
  font-size: 48px;
  color: #f9f9f9;
}
.proactive .text-head-3 {
  color: #aaacb9;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.00938em;
}
.proactive .text-head-4 {
  color: #f9f9f9;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.00938em;
}
.proactive .green-bg-1 {
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