<template>
  <LoginedNav activeMenuItem="search" />
  <SearchPageLayout />
  <!-- <FooterPaged /> -->
</template>
          
  <script setup>
import LoginedNav from "@/components/Comman/LoginedNav.vue";
import SearchPageLayout from "@/components/SearchPage/SearchPageLayout.vue";
// import FooterPaged from "@/components/Comman/LoginedFooter.vue";

import { ref } from "vue";
const activeMenuItem = ref("leader");
</script>
  