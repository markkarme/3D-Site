<template>
  <LoginedNav activeMenuItem="hunt" />
  <Pattern
    activeMargin="true"
    :title="title"
    :titleInfo="titleInfo"
    :subTitleInfo="subTitleInfo"
    :titleBtnText="titleBtnText"
    :videoTitle="require('@/assets/videos/SOC-Prime-Platform-hunt.mp4')"
    :colTitle1="colTitle1"
    :colSubTitle1="colSubTitle1"
    :colTitle2="colTitle2"
    :colSubTitle2="colSubTitle2"
    :colTitle3="colTitle3"
    :colSubTitle3="colSubTitle3"
  />
</template>
    
<script setup>
import LoginedNav from "@/components/Comman/LoginedNav.vue";
import Pattern from "@/components/Comman/PatternPage/PatternPage.vue";
import { ref } from "vue";
const title = ref("Quick Hunt");
const titleInfo = ref("Threat Hunting Made Easier");
const subTitleInfo = ref(
  "No matter if you are a seasoned security expert, or it's your first day on the job, searching for the latest threats is easier than ever before. Equip your team with verified hunting queries recommended by industry peers and run more optimized hunts directly in your SIEM & EDR."
);
const titleBtnText = ref("Contact Sales");

const colTitle1 = ref("Minimize cyber risks");
const colSubTitle1 = ref(
  "Detect current and emerging threats to stay one step ahead of attackers and boost your cybersecurity posture."
);

const colTitle2 = ref("Evolve threat hunting velocity");
const colSubTitle2 = ref(
  "Be 95% faster than your peers with curated queries ready to run in your hunting Data Plane."
);

const colTitle3 = ref("Focus on what matters most");
const colSubTitle3 = ref(
  "Save hours on threat investigation with instant access to CTI and relevant context to run hunts more efficiently."
);
</script>