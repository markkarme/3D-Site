<template>
  <div class="prime-hunt pa-4">
    <v-row class="ml-16 mt-16">
      <div class="bg-green-left"></div>
      <v-col class="ml-16 mr-5" data-aos="fade-left" data-aos-duration="2000">
        <span class="text-head-green">The Prime </span>
        <span class="text-head-white"> Hunt</span>
        <div>
          <span class="text-p-white">
            Concentrate on the hunt itself, by breaking through UI limitations.
          </span>
          <span class="text-p-grey">
            The Prime Hunt is an open-source browser extension to quickly
            convert, apply and customize Sigma rules across the widest stack of
            SIEM and EDR. A fresh project launched in October 2022, with plans
            to embed Uncoder.IO, feedback loops, and anything you can imagine.
            Be part of the story, and contribute with a pull request at GitHub.
          </span>
        </div>
        <div class="mt-5">
            <span class="text-p-green">Contribute via GitHub ></span>
        </div>
      </v-col>
      <v-col>
        <div class="parent">
          <img
            class="img-shadow"
            :src="require('@/assets/images/security/security-10.png')"
            width="593"
            height="386"
          />
          <img
            class="img-shadow child"
            :src="require('@/assets/images/security/security-11.png')"
            width="408"
            height="544"
            data-aos="zoom-in"
            data-aos-duration="2000"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>
  <style scoped>
.prime-hunt {
  margin-top: 300px;
}
.prime-hunt .parent {
  position: relative;
}
.prime-hunt .child {
  position: absolute;
  top: 0px;
  left: 0%;
}
.prime-hunt .img-shadow {
  box-shadow: 0 4px 8px 0 #294e4d, 0 6px 20px 0 #294e4d;
  margin-bottom: 200px;
}
.prime-hunt .bg-green-left {
  position: absolute;
  top: 0;
  bottom: -1%;
  right: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  z-index: -1;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(26, 255, 157, 0.3) 0%,
    rgba(98, 249, 184, 0) 100%
  );
}
.prime-hunt .text-head-green {
  line-height: 1.2;
  font-weight: 700;
  color: #4ac18e;
  font-size: 40px;
}
.prime-hunt .text-head-white {
  line-height: 1.2;
  font-weight: 700;
  color: rgb(249, 249, 249);
  font-size: 40px;
}
.prime-hunt .text-p-grey {
  color: #aaacb9;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}
.prime-hunt .text-p-green {
  color: #4ac18e;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  text-decoration: underline;
}
.prime-hunt .text-p-white {
  color: #f9f9f9;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.00938em;
}
.prime-hunt .text-p-green {
  color: #4ac18e;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  text-decoration: underline;
}
</style>