<template>
  <div class="about mt-16">
    <v-row>
      <v-col class="left-col" md="6" sm="12">
        <h1 class="text-1 ml-3">Know All About Cyber Attacks,</h1>
        <h1 class="text-2 ml-3">Act Before They Hit</h1>
        <v-row>
          <v-btn
            variant="text"
            :class="{ underline: activeButton === index }"
            @click="activeButton = index"
            v-for="(item, index) in buttonText"
            :key="index"
          >
            {{ item }}
          </v-btn>
        </v-row>
        <div>
          <v-card
            :class="{ cardsearch: cardHover }"
            class="mt-2"
            color="#292C3D"
            elevation="0"
          >
            <v-row class="search-row">
              <v-col cols="1">
                <v-icon class="ml-2" color="#9E9FA6" size="30"
                  >mdi-magnify</v-icon
                >
              </v-col>
              <v-col cols="9">
                <input
                  @mouseenter="cardHover = true"
                  @mouseleave="cardHover = false"
                  type="text"
                  class="search-input"
                  placeholder="try: Lateral Movement, cert.gov.ua, Florian Roth"
                />
              </v-col>
              <v-col cols="2" class="text-end">
                <v-btn class="search-btn mr-2">Search</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </div>
        <v-row justify="space-between" class="ml-5">
          <p class="trend-text">
            <v-icon class="pr-5" size="24">mdi-trending-up</v-icon>Trending
          </p>
          <p class="updates-text">Latest content updates</p>
        </v-row>
        <v-row>
          <p class="trend-clip" v-for="(item, index) in trendText" :key="index">
            {{ item }}
          </p>
        </v-row>
      </v-col>
      <v-col class="right-col" md="6" sm="12">
        <Cube />
      </v-col>
    </v-row>
    <v-card color="#1F2232" class="mt-8 pa-4">
      <v-row>
        <v-col md="6">
          <v-row>
            <v-col>
              <v-row>
                <p class="card-details">CONNECTING</p>
                <div class="box-icon"></div>
                <div class="line-2"></div>
              </v-row>
              <v-row class="card-numbers-details">
                <v-col v-for="(item,index) in leftData" :key="index">
                  <p class="numbers">{{ item.number }}</p>
                  <p class="card-details">{{ item.text }}</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="6">
            <v-row>
            <v-col>
              <v-row>
                <p class="card-details">TRUSTED BY</p>
                <div class="box-icon-2"></div>
                <div class="line-2-2"></div>
              </v-row>
              <v-row class="card-numbers-details">
                <v-col v-for="(item,index) in rightData" :key="index">
                  <p class="numbers">{{ item.number }}</p>
                  <p class="card-details">{{ item.text }}</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import Cube from "./Cube.vue";
export default {
  components: {
    Cube,
  },
  data() {
    return {
      cardHover: false,
      activeButton: null,
      buttonText: [
        "Sigma Rules",
        "MITRE ATT&CK®",
        "CEV",
        "Ransomware",
        "Log Sources",
      ],
      trendText: [
        "cve-2023-38146",
        "blackcat",
        "apt28",
        "uac-0006",
        "uac-0057",
        "tropic trooper",
        "cve-2023-3519",
        "exfiltration",
        "apt-34",
        "ransomware",
      ],
      leftData:[
        {
            id:1,
            number:"30,000+",
            text:"Users"
        },
        {
            id:2,
            number:"600+",
            text:"Threat researchers"
        },
        {
            id:3,
            number:"8,000+",
            text:"Organizations"
        }
      ],
      rightData:[
        {
            id:1,
            number:"42%",
            text:"Fortune 100"
        },
        {
            id:2,
            number:"30%",
            text:"Global 500"
        },
        {
            id:3,
            number:"21%",
            text:"Global 2000"
        }
      ]
    };
  },
};
</script>
<style scoped>
.card-numbers-details{
    margin-left: 90px;
}
.line-2-2{
    position: absolute;
  top: 22px;
  left: 815px;
  width: 40%;
  border-top: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #3e9776, #284445);
}
.line-2 {
  position: absolute;
  top: 22px;
  left: 130px;
  width: 40%;
  border-top: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #3e9776, #284445);
}
.box-icon {
  display: block;
  content: "";
  position: absolute;
  top: 19px;
  left: 110px;
  width: 8px;
  height: 8px;
  background-color: #4ac18e;
}
.box-icon-2 {
  display: block;
  content: "";
  position: absolute;
  top: 19px;
  left: 795px;
  width: 8px;
  height: 8px;
  background-color: #4ac18e;
}
.numbers{
    opacity: 0.7;
    font-weight: 700;
  color: #f9f9f9;
  font-size: 28px;
}
.card-details {
  opacity: 0.5;
  color: #f9f9f9;
  font-size: 12px;
}
.about {
  padding: 50px;
}
.about .left-col .text-1 {
  font-size: 56px;
  max-width: 450px;
}
.about .left-col .text-2 {
  font-size: 56px;
  background: -webkit-linear-gradient(left, #4ac18e, #68ecff);
background-clip: text;
  -webkit-text-fill-color: transparent;
}
.cardsearch:hover {
  border: 1px solid #6f737d;
}
.cardsearch {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 58px;

  /* Change the input text color */
}

.search-input::placeholder {
  color: #999999; /* Change the placeholder text color */
}
.search-row {
  min-height: 58px;
  align-items: center;
}

.search-input {
  width: 100%;
  border: none;
  outline: none;
  color: #999999;
}

.text-end {
  display: flex;
  justify-content: flex-end;
}

.underline {
  text-decoration: underline #4ac18e 3px;
  text-underline-offset: 8px;
}
.search-row .search-btn {
  background-color: #4ac18e;
}
.search-row .search-btn:hover {
  background-color: #68d3a5;
  border: 1px white;
}
.trend-text,
.updates-text {
  margin-top: 10px;

  font-size: 16px;
  font-weight: 400;
  color: rgb(249, 249, 249);
  font-family: Inter, sans-serif;
}
.updates-text {
  border-bottom: 1px solid #f9f9f9;
}
.updates-text:hover {
  color: #4ac18e;
  border-bottom: 1px solid #4ac18e;
}
.trend-clip {
  color: #cdced1;
  padding: 5px;
  border-radius: 50px;
  border: 1px solid #cdced1;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
  font-size: 13px;
  margin: 10px 10px 10px;
}
.trend-clip:hover {
  background: #cdced1;
  color: black;
  cursor: pointer;
}
.right-col {
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(26, 255, 157, 0.3) 0%,
    rgba(98, 249, 184, 0) 100%
  );
}
</style>
  
