<template>
  <v-row justify="center" no-gutters class="footer-style mt-16">
    <p class="footer-text" v-for="link in links" :key="link">{{ link }}</p>
    <v-col class="text-center mt-1 footer-sub-text" cols="12">
      Copyright © 2023 SOC Prime. All rights reserved
    </v-col>
  </v-row>
</template>
  <script>
export default {
  data: () => ({
    links: [
      "Contacts",
      "Privacy Policy ",
      "SOC Prime Platform Terms of Service",
      "Privacy FAQ",
      "SOC Prime Platform Guides",
      "Contact Us",
    ],
  }),
};
</script>
<style scoped>
.footer-sub-text{
    font-size: 12px;
    text-align: center;
    color: #cfd0d3;
}
.footer-style {
  margin-top: 50px;
  padding-top: 10px;
  background: #3b3d4f;
}
.footer-text {
  display: block;
  position: relative;
  padding: 0.2em 0;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
  margin-left: 30px;
  font-size: 14px;
}
.footer-text::after {
  content: "";
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: rgba(255, 255, 255, 0.7);
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}
.footer-text:hover::after,
.footer-text:focus::after {
  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
}

.footer-text::after {
  opacity: 1;
  transform: scale(0);
  transform-origin: center;
}

.footer-text:hover::after,
.footer-text:focus::after {
  transform: scale(1);
}
</style>