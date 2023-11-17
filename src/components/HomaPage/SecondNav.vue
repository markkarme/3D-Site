<template>
  <div class="mt-16">
    <v-row class="sec-nav" :class="{ 'sticky-nav': isSticky }">
      <v-col>
        <v-card color="#292C3D">
          <v-row class="justify-space-between pt-5 pl-10 pr-10">
            <img
              class="pl-16"
              :src="require('@/assets/images/logo-white.png')"
            />
            <div class="d-flex f-row">
              <p class="text-nav-green">>_</p>
              <p class="text-nav-grey" @click="scrollToTest('proactive', 38)">
                Proactive
              </p>
              <p class="text-nav-green">[cyber]</p>
              <p class="text-nav-grey" @click="scrollToTest('security', 53)">
                Security
              </p>
              <p
                class="text-nav-grey"
                @click="scrollToTest('BuildTogether', 65)"
              >
                Built Together
              </p>
              <p class="text-nav-green">[by]</p>
              <p class="text-nav-grey">Community</p>
            </div>
            <v-btn class="sign-up-btn" variant="outlined" color="#4AC18E"
              >Sign up</v-btn
            >
          </v-row>
          <v-progress-linear
            color="#4AC18E"
            :model-value="scroll"
            :height="7"
            class="mt-2"
          ></v-progress-linear>
        </v-card>
      </v-col>
    </v-row>
    <section id="proactive">
      <Proactive :class="{ 'mt-100': isSticky, 'mt-50': isSticky == false }" />
    </section>
    <section id="security">
      <Security class="mt-50" />
    </section>
    <section id="BuildTogether">
      <BuildTogether class="mt-50" />
    </section>
  </div>
</template>
<script>
import Proactive from "./Proactive.vue";
import Security from "../Security/Security.vue";

import BuildTogether from "../BuildTogether/BuildTogether.vue";
export default {
  components: {
    Proactive,
    Security,
    BuildTogether,
  },
  data() {
    return {
      isSticky: false,
      scroll: 0,
      prevScrollPos: window.pageYOffset,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 1400) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
      if ((currentScrollPos > 1400) & (currentScrollPos < 4100)) {
        this.scroll = 38;
      } else if ((currentScrollPos > 4100) & (currentScrollPos < 5700)) {
        this.scroll = 53;
      } else if ((currentScrollPos > 5700) & (currentScrollPos < 9900)) {
        this.scroll = 65;
      } else {
        this.scroll = 0;
      }
      this.prevScrollPos = currentScrollPos;
    },
    scrollToTest(sectionID, scrollValue) {
      const offset = 100;
      this.scroll = scrollValue;

      const testSection = document.getElementById(sectionID);
      const topOffset = testSection.offsetTop - offset;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style >
.sticky-nav {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
}
.mt-50 {
  margin-top: 50px;
}
.mt-100 {
  margin-top: 230px;
}
.sec-nav-img-1 {
  width: 100%;
  height: 150px;
}
.text-nav-green {
  color: #4ac18e;
  font-size: 20px;
  margin-left: 30px;
}
.text-nav-grey {
  color: rgb(207, 208, 211);
  font-size: 20px;
  margin-left: 30px;
}
.text-nav-grey:hover {
  color: #fff;
  cursor: pointer;
}
.sec-nav .sign-up-btn .v-btn__content {
  color: white;
}
.sec-nav .sign-up-btn:hover {
  background-color: #4ac18e;
}
</style>