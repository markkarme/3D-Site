<template>
  <LoginedNav activeMenuItem="lists" />
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
const title = ref("Automation");
const titleInfo = ref("Stream Detection Logic Directly Into Your Data Plane");
const subTitleInfo = ref(
  "Automate content deployments and management from a single place. Arrange detections in curated lists, tune detection logic to your needs, and automatically push customized algorithms directy into your SIEM or XDR."
);
const titleBtnText = ref("Contact Sales");

const colTitle1 = ref("Increase SOC efficiency");
const colSubTitle1 = ref(
  "Boost engineering capacity by 50-2000% with the continuous streaming of curated detections customized to your needs."
);

const colTitle2 = ref("Keep abreast of emerging threats");
const colSubTitle2 = ref(
  "Stay ahead of attackers keeping your SIEM or XDR constantly updated with detection content for the latest threats."
);

const colTitle3 = ref("Eliminate manual routine");
const colSubTitle3 = ref(
  "Say goodbye to loads of fine-tuning and parsing hurdles with automated content deployment and management capabilities."
);
</script>