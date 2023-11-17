<template>
  <div class="simga-rule pa-4">
    <v-row class="ml-16 mt-16">
      <div class="bg-blue-left"></div>
      <v-col>
        <div class="parent">
          <img
            class="img-shadow"
            :src="require('@/assets/images/security/security-8.png')"
          />
          <img
            class="img-shadow child"
            :src="require('@/assets/images/security/security-9.png')"
            width="400"
            height="400"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
        </div>
      </v-col>
      <v-col class="ml-16 mr-5" data-aos="fade-left" data-aos-duration="2000">
        <span class="text-head-blue">Sigma</span>
        <span class="text-head-white"> Rules Bot</span>
        <div>
          <span class="text-p-white">
            Came up with a mind-blowing Sigma rule? We meet you where you are -
            in Slack. 
          </span>
          <span class="text-p-grey">
            Code, test, and tag your rule with ATT&CK in no time, taking
            advantage of the built-in checks and settings. Get feedback from
            industry peers, hone your skills, and share your expertise with the
            world.
          </span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.simga-rule{
    margin-top: 200px;
}
.simga-rule .parent {
  position: relative;
}
.simga-rule .child {
  position: absolute;
  top: 50px;
  left: 20%;
}
.simga-rule .img-shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 182, 248, 0.838),
    0 6px 20px 0 rgba(0, 182, 248, 0.838);
}
.simga-rule .bg-blue-left {
  position: absolute;
  top: 0;
  bottom: 10%;
  right: 50%;
  width: 50%;

  z-index: -1;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(104, 236, 255, 0.35) 0%,
    rgba(104, 236, 255, 0) 100%
  );
}
.simga-rule .text-head-blue {
  line-height: 1.2;
  font-weight: 700;
  color: #68ECFF;
  font-size: 40px;
}
.simga-rule .text-head-white {
  line-height: 1.2;
  font-weight: 700;
  color: rgb(249, 249, 249);
  font-size: 40px;
}
.simga-rule .text-p-grey {
  color: #aaacb9;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}
.simga-rule .text-p-green {
  color: #4ac18e;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  text-decoration: underline;
}
.simga-rule .text-p-white {
  color: #f9f9f9;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.00938em;
}
</style>