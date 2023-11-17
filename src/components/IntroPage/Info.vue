<template>
  <div class="overview-info pa-4">
    <v-row>
      <v-col cols="1">
        <div class="green-bg-left"></div>
        <v-card color="#303344" class="card-info">
          <v-row>
            <v-col>
              <p class="card-title">Company Rank</p>
              <v-row>
                <v-icon color="#4AC18E" size="40">mdi-chart-box</v-icon>
                <h1 class="card-h1">45</h1>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="9" class="ml-10">
        <div>
          <span class="text-green-20">>_</span>
          <span class="text-white-20"
            >Hello, Mohamed! Here's what your company has achieved on the
            Platform, ranking as #
          </span>
          <span class="text-green-20">[45]</span>
          <span class="text-white-20"> out of</span>
          <span class="text-green-20">[2670]</span>
          <span class="text-white-20"> companies in the</span>
          <span class="text-green-20">[Software & Services] </span>
          <span class="text-white-20">industry.</span>
        </div>
      </v-col>
      <v-col cols="1" class="d-flex align-center">
        <p class="text-grey-14-underline">Wrong Industry?</p>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.overview-info .card-info {
  padding: 10px;
}
.overview-info .card-title {
  font-weight: 400;
  color: rgb(207, 208, 211);

  font-size: 12px;
  line-height: 1.4;
}
.overview-info .card-h1 {
  font-size: 32px;
  font-weight: 600;
  color: rgb(249, 249, 249);
  line-height: 1.4;
}
.text-white-20 {
  font-size: 20px;
  line-height: 1.6;

  font-weight: 500;
  color: rgb(249, 249, 249);
  letter-spacing: 0.00938em;
}
.text-green-20 {
  font-size: 20px;
  line-height: 1.6;

  font-weight: 500;
  color: #47c18e;
  letter-spacing: 0.00938em;
}
.text-grey-14-underline {
  cursor: pointer;
  font-size: 14px;
  color: rgb(207, 208, 211);
  font-weight: 500;
  line-height: 1.3;
  text-decoration: underline;
  transition: text-decoration 0.3s ease-out;
}
.overview-info .text-grey-14-underline:hover {
  text-decoration: none;
}
.green-bg-left {
  position: absolute;
  top: 0;
  bottom: -1%;
  right: 50%;
  width: 100%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(26, 255, 157, 0.3) 0%,
    rgba(98, 249, 184, 0) 100%
  );
  z-index: -1;
}
</style>