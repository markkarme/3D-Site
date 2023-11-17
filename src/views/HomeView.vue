<template>
  <TopNav />
  <About />
  <Down />
  <SecondNav />
</template>

<script setup>
// data

import { ref, onMounted } from "vue";
import TopNav from "@/components/TopNav.vue";
import About from "@/components/HomaPage/About.vue";
import Down from "@/components/HomaPage/Down.vue";
import SecondNav from "@/components/HomaPage/SecondNav.vue";
const email = ref("");
const password = ref("");
let loginError = ref(false);

</script>
<style>
</style>
