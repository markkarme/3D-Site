<template>
  <div class="recomand pa-4">
    <v-row>
      <v-col>
        <v-row>
          <p class="text-grey-14 mt-2">Recommended by:</p>
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
        </v-row>
        <v-row>
          <v-col class="mb-4">
            <v-card color="#303344" class="pa-4 mb-4" v-for="i in 5" :key="i">
              <v-row align="center" justify="start">
                <v-col md="8" align="start" justify="end" cols="12" sm="6">
                  <p class="head">
                    Possible CVE-2023-22515 (Privilege Escalation Vulnerability
                    in Confluence Data Center and Server) Exploitation Attempt
                    (via keywords)
                  </p>
                </v-col>
                <v-col cols="12" sm="4" class="mt-2">
                  <v-row align="center" justify="center">
                    <v-col cols="6" sm="4">
                      <v-icon color="#9fa1a8" class="mr-1"
                        >mdi-clock-outline</v-icon
                      >
                      <span class="sub-head">wait to unlock</span>
                    </v-col>
                    <v-col cols="6" sm="4">
                      <v-icon color="#9fa1a8" class="mr-1 ml-6">mdi-eye</v-icon>
                      <span class="sub-head mr-6">240</span>
                    </v-col>
                    <v-col cols="6" sm="4">
                      <v-icon color="#9fa1a8" class="mr-1">mdi-calendar</v-icon>
                      <span class="sub-head">04 Oct 2023</span>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <p class="d-flex justify-center text-white-14" >see all <v-icon class="mt-1 ml-1" color="#4ac18e" size="15">mdi-arrow-right</v-icon></p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      buttonText: [
        "Sigma Rules",
        "MITRE ATT&CK®",
        "CEV",
        "Ransomware",
        "Log Sources",
      ],
      activeButton: null,
    };
  },
};
</script>
<style scoped>
.underline {
  text-decoration: underline #4ac18e 3px;
  text-underline-offset: 8px;
}
.text-grey-14 {
  font-weight: 600;
  color: #9fa1a8;
  font-size: 14px;
  line-height: 1.4;
}
.text-white-14 {
  font-weight: 600;
  color: #cfd0d3;
  font-size: 14px;
  line-height: 1.4;
}
.recomand .head {
  font-weight: 500;
  color: rgb(249, 249, 249);
  font-size: 20px;
  max-width: none;
  line-height: 1.2;
  letter-spacing: 0.0075em;
}
.recomand .sub-head {
  font-size: 14px;
  color: #cfd0d3;
}
</style>