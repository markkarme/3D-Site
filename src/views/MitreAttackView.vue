<template>
  <LoginedNav activeMenuItem="analysis" :activeSubMenuItem="activeMenuItem" />
  <Pattern
    activeMargin="true"
    :title="title"
    :titleInfo="titleInfo"
    :subTitleInfo="subTitleInfo"
    :titleBtnText="titleBtnText"
    :videoTitle="require('@/assets/videos/mitre-attack.mp4')"
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
const title = ref("MITRE ATT&CK Coverage");
const titleInfo = ref("Track Threat Detection Progress Based on MITRE ATT&CK®");
const subTitleInfo = ref(
  "Keep track of your organization's progress toward covering prioritized ATT&CK tactics and techniques with detection content to supercharge your cybersecurity effectiveness."
);
const titleBtnText = ref("Contact Sales");

const colTitle1 = ref("Boost defensive capabilities");
const colSubTitle1 = ref(
  "Improve visibility into threats challenging your business to proactively address any gaps in threat detection."
);

const colTitle2 = ref("Orchestrate threat detection efforts");
const colSubTitle2 = ref(
  "Execute around strategic detection objectives and build a roadmap of threat coverage."
);

const colTitle3 = ref("Prioritize detection goals");
const colSubTitle3 = ref(
  "Drill down to a specific ATT&CK tactic, technique, or sub-technique to focus on what matters most in detection coverage."
);
const activeMenuItem = ref("mitre");
</script>