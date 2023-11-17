<template>
  <div>
    <v-row class="ml-16 mr-16 ma-16">
      <v-col cols="6">
        <h1>PERSONAL INFOS</h1>
        <v-row class="info">
          <v-col cols="6" v-for="data in dataInfo" :key="data" class="mt-2">
            <span class="title">{{ data.title }}</span>
            <span class="value">{{ data.value }}</span>
          </v-col>
          <MyButton title="DOWNLOAD CV" />
        </v-row>
      </v-col>

      <v-col cols="6">
        <v-row>
          <v-col cols="6" v-for="i in 4" :key="i">
            <v-card variant="outlined" class="card-style">
              <div>
                <h1>12+</h1>
              </div>
              <v-row>
                <div class="line-1"></div>
                <span class="title"> YEARS OF EXPERIENCE </span>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { ref } from "vue";
import MyButton from "@/components/MyButton.vue";

const dataInfo = ref([
  {
    title: "first name:",
    value: " mark",
  },
  {
    title: "Last Name:",
    value: " karme",
  },
  {
    title: "Age:",
    value: " 24 Years",
  },
  {
    title: "Nationality:",
    value: " Egyption",
  },
  {
    title: "Freelance:",
    value: " Available",
  },
  {
    title: "Address:",
    value: "Egypt",
  },
  {
    title: "Phone:",
    value: " +201278012023",
  },
  {
    title: "Email:",
    value: " mark.kamre9999@gmail.com",
  },
  {
    title: "UpWork",
    value: " mark.karme",
  },
  {
    title: "Langages",
    value: " Arabic,English",
  },
]);
</script>