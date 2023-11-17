<template>
  <div class="trust pa-4">
    <v-row class="ml-16" align="center" justify="center">
      <v-col class="mt-">
        <div data-aos="fade-left">
          <span class="text-1">Zero Trust</span>
          <span class="text-2"> Architecture</span>
          <div class="mt-5">
            <span class="text-3">
              The best way to keep data secret is not to collect it at all. That
              is why SOC Prime gives detection algorithms to you and does not
              ask for any of your potentially sensitive data back. Here is
              our</span
            >
            <span class="text-4">SOC 2 Type II report and GDPR statement</span>
            <span class="text-3">
              to back this claim. We run on Zero Trust Architecture, and put our
              trust in partnership with you.</span
            >
          </div>
          <p></p>
        </div>
      </v-col>
      <v-col>
        <img
          :src="require('@/assets/images/security/security-2.png')"
          width="538"
          height="269"
        />
      </v-col>
    </v-row>
    <v-row class="ml-16" align="center" justify="center">
      <v-col>
        <img
          :src="require('@/assets/images/security/security-3.png')"
          width="558"
          height="347"
        />
      </v-col>
      <div class="green-bg-right"></div>
      <div class="green-bg-left"></div>
      <v-col>
        <div data-aos="fade-left">
          <span class="text-1">No</span>
          <span class="text-2"> Backchannel</span>
          <div class="mt-5">
            <span class="text-3">
              You are in complete control of what feedback you want to share if
              any at all.</span
            >
            <span class="text-5">
              We do not ask for root permissions, VPN access to your
              environments, or your log data.</span
            >
            <span class="text-3">
              If you'd like to give back to the community, you can do so by
              commenting on the rule, rating it manually, or via our
            </span>
            <span class="text-4">Discord channel.</span>
          </div>
          <p></p>
        </div>
      </v-col>
    </v-row>
    <v-row
      class="ml-16 mt-50"
      style="margin-top: 100px"
      align="center"
      justify="center"
    >
      <v-col class="mr-16">
        <span class="text-1">Beyond</span>
        <span class="text-2"> Encryption</span>
        <div class="mt-5" style="max-width: 650px;">
          <span class="text-5">
            No logging, IP or host information shared with third parties.
            AES-256 & TLS 1.2, Microservice-based architecture, personnel
            background check, access control, Amazon AWS hosting.
          </span>
          <span class="text-4"> We build</span>
          <span class="text-3">
            the platform exceeding security standards to protect the very
            limited personal data we have on you. And you can always invoke the
            right to be forgotten, regardless of your location.
          </span>
        </div>
      </v-col>
      <v-col md="8" v-for="i in 2" :key="i" style="max-width: 350px; margin-right: 10px;">
        
          <div class="parent">
            <img
              class="image1"
              data-aos="example-anim3"
              data-aos-duration="2000"
              :src="require('@/assets/images/security/security-4.png')"
            />
            <img
              class="image2"
              data-aos="zoom-in"
              data-aos-duration="2000"
              :src="require('@/assets/images/security/security-5.png')"
            />
          </div>
        
      </v-col>
    </v-row>
  </div>
</template>
<style scoped lang="scss">
.trust .parent {
  position: relative;
  top: 0;
  left: 0;
  max-width: 250px;
}
.trust .image1 {
  position: relative;
  top: 0;
  left: 0;
}
.trust .image2 {
  position: absolute;
  top: 85px;
  left: 85px;
}
.trust .green-bg-left {
  position: absolute;
  top: 0;
  bottom: -1%;
  left: 50%;
  width: 100%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(26, 255, 157, 0.3) 0%,
    rgba(98, 249, 184, 0) 100%
  );
  z-index: -1;
}
.trust .green-bg-right {
  position: absolute;
  top: 0;
  bottom: 10%;
  right: 50%;
  width: 100%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(26, 255, 157, 0.3) 0%,
    rgba(98, 249, 184, 0) 100%
  );
  z-index: -1;
}
.trust .text-2 {
  font-size: 34px;
  font-weight: 700;
  color: rgb(249, 249, 249);
  line-height: 1.2;
  letter-spacing: -0.01562em;
}
.trust .text-1 {
  font-size: 34px;
  font-weight: 700;
  color: #4ac18e;
  line-height: 1.2;
  letter-spacing: -0.01562em;
}
.trust .text-3 {
  color: #aaacb9;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}
.trust .text-4 {
  color: #4ac18e;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  text-decoration: underline;
}
.trust .text-5 {
  color: #f9f9f9;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.00938em;
}
[data-aos="example-anim3"] {
  transform: rotate(-360deg);
  opacity: 0;
  transition-property: transform, opacity;
  &.aos-animate {
    transform: rotate(0);
    opacity: 1;
  }
}
</style>