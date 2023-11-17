<template>
  <div class="search-content" >
    <v-row>
      <v-col cols="12" sm="1" class="btn-col" >
        <v-sheet class="btn-sheet" @click="closeSideBar()" >
          <v-icon color="white" size="25">{{ sildeIcon }} </v-icon>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="11">
        <v-row>
          <v-col>
            <v-row>
              <v-btn-toggle
                v-model="text"
                rounded="0"
                class="clicked-btn mr-4"
                group
              >
                <v-btn value="left" color="transparent" class="btn-group">
                  PlatForm Repos
                </v-btn>

                <v-btn value="center" color="transparent" class="btn-group">
                  My Repos
                </v-btn>
              </v-btn-toggle>

              <AutoSelectVue />
              <v-btn color="#68D3A5" class="apply-btn ml-6"> APPLY </v-btn>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-sheet class="content-card-title pa-2">
            <v-row>
              <v-col>
                <v-row>
                  <span class="title-14">Search Result :</span>
                  <v-col v-for="(itme, index) in searchResultInfo" :key="index">
                    <div class="d-flex">
                      <v-sheet class="btn-sheet-search">
                        <v-icon color="white" size="15" class="pb-1 pl-1">
                          {{ itme.icon }}
                        </v-icon>
                      </v-sheet>
                      <p class="title-12">{{ itme.text }}</p>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-sheet>
          <v-sheet class="content-card pa-2" v-for="i in 3" :key="i">
            <v-hover v-slot="{ isHovering, props }">
              <v-row v-bind="props">
                <v-col>
                  <v-row>
                    <v-col cols="12" sm="1">
                      <v-sheet class="first-card-icon">
                        <v-icon color="white" size="30" class="pt-1 pl-1">
                          mdi-account
                        </v-icon>
                      </v-sheet>
                    </v-col>
                    <v-col cols="12" sm="10" >
                      <p class="card-head">
                        Suspicious Registry Key Modification to Disable Windows
                        Remote Management (WinRM) to Bypass Authentication
                        [Service/Client] (via registry_event)
                      </p>
                      <v-row>
                        <v-col v-for="(item,index) in subHeadStaticText" :key="index">
                          <span >{{ item }}</span>
                          <span class="card-sub-head"> {{ subHeadDataText[index] }}</span>
                          <!-- <p class="card-sub-head">{{ i }}</p> -->
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" sm="1" class="d-flex justify-end">
                      <v-sheet class="last-card-icon">
                        <v-icon color="white" size="18" class="pb-0 pl-2">
                          mdi-eye
                        </v-icon>
                      </v-sheet>
                    </v-col>
                  </v-row>
                  <div>
                    <v-expand-transition>
                      <v-row
                        justify="space-between"
                        v-if="isHovering"
                        class="mt-1"
                      >
                        <v-col>
                          <v-row>
                            <v-col
                              v-for="(item, index) in hoverDetails"
                              :key="index"
                            >
                              <span
                                v-if="item.upRowcolor != null"
                                class="card-indetacts-text"
                              >
                                <v-icon :color="item.upRowcolor" size="13">
                                  mdi-circle
                                </v-icon>
                                {{ item.upRowtext }}
                              </span>
                              <p v-else class="card-indetacts-text">
                                {{ item.upRowtext }}
                              </p>
                              <span
                                v-if="item.downRowicon != null"
                                class="card-indetacts-text"
                              >
                                <v-icon color="#68d3a5" size="15">
                                  {{ item.downRowicon }}
                                </v-icon>
                                {{ item.downRowText }}
                              </span>
                              <p class="card-indetacts-text" v-else>
                                {{ item.downRowText }}
                              </p>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="12" sm="5">
                          <span class="card-date-text">Released:</span>
                          <span class="card-indetacts-text ml-1 mr-2">
                            2023-10-06</span
                          >
                          <span class="card-date-text">Updated: </span>
                          <span class="card-indetacts-text ml-1"
                            >2023-10-06</span
                          >
                        </v-col>
                      </v-row>
                      <v-row justify="space-between" v-else class="mt-1">
                        <v-col>
                          <span class="card-indetacts-text ml-1 pl-1"
                            ><v-icon class="mr-1">mdi-eye</v-icon>15</span
                          >
                          <span class="card-indetacts-text ml-1 pl-1"
                            ><v-icon class="mr-1">mdi-tray-arrow-down</v-icon
                            >0</span
                          >
                        </v-col>
                        <v-col class="d-flex justify-end">
                          <span class="card-date-text">Released:</span>
                          <span class="card-indetacts-text ml-1 mr-2">
                            2023-10-06</span
                          >
                          <span class="card-date-text">Updated: </span>
                          <span class="card-indetacts-text ml-1"
                            >2023-10-06</span
                          >
                        </v-col>
                      </v-row>
                    </v-expand-transition>
                  </div>
                </v-col>
              </v-row>
            </v-hover>
          </v-sheet>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import AutoSelectVue from "../Comman/AutoSelect.vue";

export default {
  data() {
    return {
      showSideBar: true,
      sildeIcon:"mdi-chevron-left",
      text: "center",
      icon: "justify",
      searchResultInfo: [
        {
          icon: "mdi-bag-checked",
          text: "13,806 out of 305,975 Rules",
        },
        {
          icon: "mdi-electron-framework",
          text: "0 Sigma Rules",
        },
        {
          icon: "mdi-pinterest",
          text: "220 Log Sources",
        },
        {
          icon: "mdi-wrench-outline",
          text: "108 Tools",
        },
        {
          icon: "mdi-account-hard-hat",
          text: "110 Actors",
        },
        {
          icon: "mdi-rotate-orbit",
          text: "474 Techniques ",
        },
      ],
      subHeadStaticText:["Threat Bounty:"," ","type","logsource"],
      subHeadDataText:["Nattatorn Chuensangaru","Premium","Query","registry_event"],
      hoverDetails: [
        {
          upRowtext: "security",
          upRowcolor: null,
          downRowicon: "mdi-chevron-right",
          downRowText: "meduim",
        },
        {
          upRowtext: "status",
          upRowcolor: null,
          downRowicon: "mdi-square",
          downRowText: "stable",
        },
        {
          upRowtext: "media",
          upRowcolor: "white",
          downRowicon: null,
          downRowText: "2021-03-03",
        },
        {
          upRowtext: "detection",
          upRowcolor: "blue",
          downRowicon: null,
          downRowText: "2023-10-04",
        },
        {
          upRowtext: "#threathintal",
          upRowcolor: "white",
          downRowicon: null,
          downRowText: "2023-10-06",
        },
      ],
    };
  },
  methods: {
    closeSideBar() {
      this.sildeIcon = "mdi-chevron-right";
      this.showSideBar = !this.showSideBar;
      if(this.showSideBar===false){
        this.sildeIcon="mdi-chevron-right"
      }else{
        this.sildeIcon="mdi-chevron-left"
      }
      console.log("helloadsssssssssssssssssssssssss",this.showSideBar)
      this.$emit("close-event", this.showSideBar);
    },
    
  },
  components: { AutoSelectVue },
};
</script>
<style scoped>
.search-content .btn-col {
  max-width: 50px;
}
.search-content .btn-sheet {
  background: #51546c;
  width: 25px;
  height: 25px;
  border-radius: 3px;
  margin-left: 3px;
}
.search-content .btn-sheet-search {
  background: #51546c;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  margin-left: 2px;
}
.search-content .btn-group {
  width: 150px;
  min-height: 50px;
  text-transform: none;
  background: transparent;
  color: white;
}
.search-content .clicked-btn {
  background: #3b3d4f;
  color: #68d3a5;
  min-height: 56px;
}
.search-content .apply-btn {
  background: #68d3a5;
  color: black;
  width: 50px;
  height: 36px;
  margin-top: 10px;
  margin-left: 5px;
}
.search-content .content-card-title {
  background: #292c3d;
  border: 1px solid #51546c;
  color: #cfd0d3;
  width: 100%;
}
.search-content .content-card {
  background: #292c3d;
  border: 1px solid #51546c;
  color: #cfd0d3;
  width: 100%;
  min-height: 165px;
}
.search-content .title-14 {
  align-items: center;
  color: white;
  display: flex;
  font-size: 14px;
  margin-bottom: 4px;
  margin-right: 5px;
  white-space: nowrap;
}
.search-content .title-12 {
  align-items: center;
  color: white;
  display: flex;
  font-size: 14px;
  margin-bottom: 4px;
  margin-left: 3px;
  white-space: nowrap;
}
.search-content .card-head {
  margin: 0 0 1px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  /* width: 50px;  */
  overflow: hidden;
  text-overflow: ellipsis;
}
.search-content .card-sub-head {
  align-items: center;
  display: inline-flex;
  margin-left: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
}
.search-content .first-card-icon {
  background: #51546c;
  width: 35px;
  height: 35px;
  border-radius: 3px;
  margin-left: 2px;
}
.search-content .last-card-icon {
  background: #51546c;
  width: 25px;
  height: 25px;
  border-radius: 3px;
  margin-left: 2px;
}
.search-content .card-indetacts-text {
  font-size: 13px;
  color: #f9f9f9;
}
.search-content .card-date-text {
  font-size: 13px;
  color: #cfd0d3;
}
.search-content .hover-data {
  background: #51546c;
  min-height: 20px;
}
.search-content .content-card:hover {
  background: #3b3d4f;
}
</style>