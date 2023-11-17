<template>
  <div class="sigma pa-4 mt-16">
    <v-row class="ml-16">
      <div class="green-bg-left"></div>
      <v-col md="4" class="mr-16">
        <div>
          <p class="text-head-white">Sigma</p>
          <div class="mt-5">
            <span class="text-p-white"
              >One language to describe any adversary TTP and translate it to
              any detection code
            </span>
            <span class="text-p-grey">with </span>
            <span class="text-p-blue">Sigma</span>
            <span class="text-p-grey">
              rules, we express threat detection by focusing on behavior and the
              algorithm itself, cutting the rope to SIEM & EDR query
              language.</span
            >
          </div>
        </div>
        <img
          :src="require('@/assets/images//home/security-break.png')"
          class="mt-5"
        />
      </v-col>
      <v-col>
        <div class="parent">
          <v-sheet class="sigma-grey-sheet pa-4" color="#3B3D4F">
            <v-row>
              <v-col>
                <div
                  class="sheet-btns"
                  v-for="(item, index) in btnText"
                  :key="index"
                >
                  <v-btn variant="text" @click="setCardText(index)">
                    {{ item }}
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-sheet>
          <div class="child">
            <v-card variant="outlined" class="pa-4">
              <p>{{ cardText }}</p>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
    <div class="mt-16 ml-16" data-aos="fade-left">
      <p class="text-head-white">MITRE ATT&CK</p>
      <div style="max-width: 700px; margin-top: 10px;">
        <span class="text-p-white">One framework connecting all your industry peers.</span>
        <span class="text-p-grey">
          Acting as a periodic table, MITRE ATT&CK lets you profile, identify,
          and compare threat actors, and prioritize your threat detection goals.
          We pioneered tagging Sigma with ATT&CK to help you always get clear
          answers on what exactly to detect in your organization.</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardText:
        "SecurityEvent |  where EventID == 4688 | where ((ParentProcessName endswith @'UMWorkerProcess.exe') and ((NewProcessName !endswith @'wermgr.exe' or NewProcessName !endswith @'werfault.exe')))",
      btnText: [
        "Microsoft Sentinel",
        "Sigma",
        "Splunk",
        "QRadar",
        "CrowdStrike",
        "Elastic",
        "SnowFlake",
        "Secuonix",
      ],
      cardTextList: [
        "SecurityEvent |  where EventID == 4688 | where ((ParentProcessName endswith @'UMWorkerProcess.exe') and ((NewProcessName !endswith @'wermgr.exe' or NewProcessName !endswith @'werfault.exe')))",
        "source='WinEventLog:*' AND ((ParentImage='*\\UMWorkerProcess.exe') AND  NOT ((Image='*\\wermgr.exe' OR Image='*\\werfault.exe')))",
        "SELECT UTF8(payload) from events where LOGSOURCETYPENAME(devicetype)='Microsoft Windows Security Event Log' and ('ParentImage' ilike '%UMWorkerProcess.exe') and not (('Image' ilike '%wermgr.exe' or 'Image' ilike '%werfault.exe'))",
        "((ParentBaseFileName='*\\UMWorkerProcess.exe') AND  NOT ((ImageFileName='*\\wermgr.exe' OR ImageFileName='*\\werfault.exe')))",
        "SELECT UTF8(payload) from events where LOGSOURCETYPENAME(devicetype)='Microsoft Windows Security Event Log' and ('ParentImage' ilike '%UMWorkerProcess.exe') and not (('Image' ilike '%wermgr.exe' or 'Image' ilike '%werfault.exe'))",
        "((ParentBaseFileName='*\\UMWorkerProcess.exe') AND  NOT ((ImageFileName='*\\wermgr.exe' OR ImageFileName='*\\werfault.exe')))",
        "SELECT UTF8(payload) from events where LOGSOURCETYPENAME(devicetype)='Microsoft Windows Security Event Log' and ('ParentImage' ilike '%UMWorkerProcess.exe') and not (('Image' ilike '%wermgr.exe' or 'Image' ilike '%werfault.exe'))",
        "((ParentBaseFileName='*\\UMWorkerProcess.exe') AND  NOT ((ImageFileName='*\\wermgr.exe' OR ImageFileName='*\\werfault.exe')))",
      ],
    };
  },
  methods: {
    setCardText(index) {
      this.cardText = this.cardTextList[index];
    },
  },
};
</script>
<style >
.sigma .green-bg-left {
  position: absolute;
  top: 0;
  bottom: -1%;
  left: 50%;
  width: 100%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(26, 255, 157, 0.3) 0%,
    rgba(98, 249, 184, 0) 100%
  );
  z-index: -1;
}
.sigma .child .v-card p {
  font-size: 12px;
}
.sigma .child .v-card {
  padding: 5px;
  color: #cfd0d3;
  border-color: #4ac18e;
  background-color: #292c3d;
  min-height: 350px;
}
.sigma .parent {
  position: relative;
}
.sigma .child {
  position: absolute;
  top: -20px;
  left: 33%;
}
.sigma .sheet-btns .v-btn {
  color: #f9f9f9;
  text-decoration: none;
  text-transform: none;
}
.sigma .text-head-white {
  line-height: 1.2;
  font-weight: 700;
  color: rgb(249, 249, 249);
  font-size: 40px;
}
.sigma .text-p-grey {
  color: #aaacb9;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}
.sigma .text-p-blue {
  color: #68ecff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  text-decoration: underline;
}
.sigma .text-p-white {
  color: #f9f9f9;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.00938em;
}
</style>