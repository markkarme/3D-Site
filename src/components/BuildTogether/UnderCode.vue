<template>
  <div class="under-code pa-4">
    <v-row class="ml-">
      <v-col>
        <div data-aos="fade-left" class="ml-16 mb-16">
          <span class="text-head-white">Uncoder</span>
          <span class="text-head-green">.IO</span>
          <div class="mt-3 detail">
            <span class="text-p-grey"
              >Spending precious time managing multiple stacks?
            </span>
            <span class="text-p-white">
              With Uncoder.IO backed by Sigma, you can speak the language of any
              technology.
            </span>
            <span class="text-p-grey"
              >No matter how many tools you use, our online Sigma translation
              engine lets anyone convert detection code to 25+ SIEM & XDR
              formats on the fly. No registration, no limits, full
              privacy.</span
            >
          </div>
          <div class="mt-5">
            <span class="text-p-green"> Get started Uncoder.IO > </span>
          </div>
        </div>
        <v-row align="center" justify="center">
          <v-col justify="end" class="ml-">
            <v-card class="main-card" variant="outlined">
              <v-row>
                <v-col>
                  <v-card class="pa-4 left-card" color="#3B3D4F" height="50">
                    Sigma
                  </v-card>
                  <p class="pa-4">
                    "description": "Detects UMWorkerProcess.exe creating
                    unexpected processes. Possible related to exploitation of
                    CVE-2021-26857. Author: SOC Prime Team, Microsoft. License:
                    https://github.com/Neo23x0/sigma/blob/master/LICENSE.Detection.Rules.md.
                    Reference: https://tdm.socprime.com/tdm/info/dcUD8bXfLwWT.",
                  </p>
                  <v-card
                    class="pa-4 d-flex left-card-end"
                    color="#3B3D4F"
                    height="50"
                  >
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="main-card" variant="outlined">
              <v-card class="pa-4 left-card" color="#3B3D4F" height="50">
                Sigma
              </v-card>
              <p class="pa-4">
                "description": "Detects UMWorkerProcess.exe creating unexpected
                processes. Possible related to exploitation of CVE-2021-26857.
                Author: SOC Prime Team, Microsoft. License:
                https://github.com/Neo23x0/sigma/blob/master/LICENSE.Detection.Rules.md.
                Reference: https://tdm.socprime.com/tdm/info/dcUD8bXfLwWT.",
              </p>
              <v-card
                class="pa-4 d-flex left-card-end"
                color="#3B3D4F"
                height="50"
              ></v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.under-code .left-card-end {
  margin-top: 100px;
}
.under-code .left-card {
  color: white;
}
.under-code .main-card {
  max-width: 583px;
  color: #cfd0d3;
  border-color: #71737f;
  background-color: #292c3d;
  min-height: 350px;
}
.under-code .detail {
  max-width: 700px;
}
.under-code .text-head-green {
  line-height: 1.2;
  font-weight: 700;
  color: #4ac18e;
  font-size: 40px;
}
.under-code .text-head-white {
  line-height: 1.2;
  font-weight: 700;
  color: rgb(249, 249, 249);
  font-size: 40px;
}
.under-code .text-p-grey {
  color: #aaacb9;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}
.under-code .text-p-green {
  color: #4ac18e;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  text-decoration: underline;
}
.under-code .text-p-white {
  color: #f9f9f9;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.00938em;
}
</style>
