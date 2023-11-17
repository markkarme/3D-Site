<template>
  <LoginedNav activeMenuItem="anlysis" :activeSubMenuItem="activeMenuItem" />
  <Pattern
    activeMargin="true"
    :title="title"
    :titleInfo="titleInfo"
    :subTitleInfo="subTitleInfo"
    :titleBtnText="titleBtnText"
    
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
const title = ref("Dashboard");
const titleInfo = ref("Track Your Team Progress Benchmarked Against Industry Peers");
const subTitleInfo = ref(
  "Measure the efficiency of the SOC Prime Platform utilization to get the full picture of your team's progress in threat detection. Assess defensive capabilities with in-depth reporting as benchmarked against your industry peers."
);
const titleBtnText = ref("Contact Sales");

const colTitle1 = ref("Maximize SOC efficiency");
const colSubTitle1 = ref(
  "Dynamically track saved hours on detection content research and development to focus your team’s resources on what matters most."
);

const colTitle2 = ref("Stay ahead of attackers");
const colSubTitle2 = ref(
  "Assess how your team is up-to-date with the latest threats and attack trends and measure your contribution to collective cyber defense."
);

const colTitle3 = ref("Boost cybersecurity effectiveness");
const colSubTitle3 = ref(
  "Track your progress in threat coverage improvement and enhance detection content quality as benchmarked against MITRE ATT&CK®."
);
const activeMenuItem = ref("dashboard");
</script>