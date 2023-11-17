<template>
  <LoginedNav activeMenuItem="analysis" :activeSubMenuItem="activeMenuItem" />
  <LeaderShipLayout />
</template>
        
<script setup>
import LoginedNav from "@/components/Comman/LoginedNav.vue";
import LeaderShipLayout from "@/components/LeaderBoard/LeaderBoard.vue";
import { ref } from "vue";
const activeMenuItem = ref("leader");
</script>