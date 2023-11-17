<template>
    <LoginedNav activeMenuItem="analysis" :activeSubMenuItem="activeMenuItem" />
    <Pattern
      activeMargin="true"
      :title="title"
      :titleInfo="titleInfo"
      :subTitleInfo="subTitleInfo"
      :titleBtnText="titleBtnText"
      :videoTitle="require('@/assets/videos/log-source.mp4')"
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
  const title = ref("Log Source Coverage");
  const titleInfo = ref("Track Threat Detection Progress Based on Log Sources");
  const subTitleInfo = ref(
    "Keep track of your organization's progress in the detection content consumption based on collected logs to improve data utilization in your Data Plane and efficiently address identified security gaps."
  );
  const titleBtnText = ref("Contact Sales");
  
  const colTitle1 = ref("Improve cybersecurity posture");
  const colSubTitle1 = ref(
    "Enhance visibility into security gaps by providing a holistic view of detection coverage based on log sources."
  );
  
  const colTitle2 = ref("Supercharge security operations");
  const colSubTitle2 = ref(
    "Reduce manual effort on collection and management of volumes of data across multiple security assets."
  );
  
  const colTitle3 = ref("Don't miss anything you collect");
  const colSubTitle3 = ref(
    "Break down data visualization to log source products, services, categories, and event IDs."
  );
  const activeMenuItem = ref("log");
  </script>