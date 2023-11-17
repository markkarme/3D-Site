<template>
  <div class="search-side-bar">
    <v-row>
      <v-col cols="12" sm="" v-show="showSideBar">
        <v-sheet class="sheet pa-3">
          <v-row>
            <v-col>
              <p class="title">Search Profile</p>
              <v-row justify="space-between">
                <div>
                  <span class="head">ROLE AND PLATFORM</span>
                  <span>
                    <v-icon class="ml-5" size="15" color="#cfd0d3">
                      mdi-help-circle-outline
                    </v-icon>
                  </span>
                </div>
                <div class="flipswitch">
                  <input
                    type="checkbox"
                    name="flipswitch"
                    class="flipswitch-cb"
                    id="fs"
                    checked
                  />
                  <label class="flipswitch-label" for="fs">
                    <div class="flipswitch-inner"></div>
                    <div class="flipswitch-switch"></div>
                  </label>
                </div>
              </v-row>
              <v-divider :thickness="2" color="grey" class="mt-1"></v-divider>
              <div class="mt-1">
                <span class="head">CONTENT AVAILABILITY</span>
                <span>
                  <v-icon class="ml-5" size="15" color="#cfd0d3">
                    mdi-help-circle-outline
                  </v-icon>
                </span>
              </div>
              <div
                class="check-box d-flex justify-spacebetween"
                v-for="(item, index) in checkboxItems"
                :key="index"
              >
                <v-row>
                  <v-col cols="12" sm="10">
                    <label class="container">
                      {{ item }}
                      <input
                        type="checkbox"
                        v-model="selectedItems"
                        :value="item"
                      />
                      <span class="checkmark" @click="searchCheck(item)"></span>
                    </label>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="2"
                    class="d-flex justify-end text-center"
                  >
                    <p
                      class="spacer"
                      v-if="selectedItems[selectedItems.length - 1] === item"
                    >
                      Apply
                    </p>
                  </v-col>
                </v-row>
              </div>
              <v-divider :thickness="2" color="grey" class="mt-1"></v-divider>
              <div class="mt-1" v-if="closefilter">
                <v-row justify="space-between">
                  <div>
                    <span class="head">PLATFORM -55</span>
                    <span>
                      <v-icon class="ml-5" size="15" color="#cfd0d3">
                        mdi-help-circle-outline
                      </v-icon>
                    </span>
                  </div>
                  <div>
                    <span>
                      <v-icon
                        size="18"
                        color="#cfd0d3"
                        :icon="
                          showPlatFormFilter
                            ? 'mdi-chevron-down'
                            : 'mdi-chevron-right'
                        "
                        @click="showPlatFormFilter = !showPlatFormFilter"
                      >
                      </v-icon>
                    </span>
                    <span>
                      <v-icon
                        size="18"
                        color="#cfd0d3"
                        @click="closefilter = false"
                      >
                        mdi-close-circle-outline
                      </v-icon>
                    </span>
                  </div>
                </v-row>
                <div v-if="showPlatFormFilter === true">
                  <div
                    class="check-box d-flex justify-spacebetween"
                    v-for="(item, index) in platformExpertsCheckboxItems"
                    :key="index"
                  >
                    <v-row>
                      <v-col cols="12" sm="10">
                        <label class="container">
                          {{ item }}
                          <input
                            type="checkbox"
                            v-model="platformFilterSelectedItems"
                            :value="item"
                          />
                          <span
                            class="checkmark"
                            @click="searchCheck(item)"
                          ></span>
                        </label>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="2"
                        class="d-flex justify-end text-center"
                      >
                        <p
                          class="spacer"
                          v-if="
                            platformFilterSelectedItems[
                              platformFilterSelectedItems.length - 1
                            ] === item
                          "
                        >
                          Apply
                        </p>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </div>
              <div class="mt-10">
                <v-btn color="#3B3D4F" class="text-white">
                  + MORE experts filters
                  <v-menu activator="parent">
                    <v-list class="text-white" style="background: #3b3d4f">
                      <v-list-item
                        v-for="(item, index) in expertsFiltersCheckboxItems"
                        :key="index"
                      >
                        <v-list-item-title>
                          <label class="container">
                            {{ item }}
                            <input
                              type="checkbox"
                              v-model="expertFilterSelectedItems"
                              :value="item"
                            />
                            <span
                              class="checkmark"
                              @click="addFilter(item)"
                            ></span>
                          </label>
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
      
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSideBar: true,
      checkboxItems: [
        "Available for Me",
        "Free Access",
        "- Promo",
        "- Unlocked",
        "Subscription based",
        "- Premium",
        "- Wait To Unlock",
        "- Enterprise Only",
      ],
      selectedItems: [],
      expertsFiltersCheckboxItems: [
        "PlatForm",
        "Use Case",
        "Cloud",
        "Content Type",
        "Content Action State",
      ],
      expertFilterSelectedItems: [],
      platformExpertsCheckboxItems: [
        "Sigma",
        "Microsoft sentinel",
        "Microsoft sentinel Query",
        "Microsoft sentinel Rule",
        "ArcSight",
        "ArcSight Keyword",
        "Apachec Kafka KsqlDB",
      ],
      platformFilterSelectedItems: [],
      closefilter: true,
      showPlatFormFilter: false,
      addFilterList: [],
    };
  },
  methods: {
    searchCheck(val) {
      console.log(val, this.selectedItems);
    },
    addFilter(val) {
      console.log(this.closefilter);
      if (this.expertFilterSelectedItems.includes(val)) {
        this.closefilter = false;
        console.log("in");
      } else {
        this.closefilter = true;
        console.log("out");
      }
    },
    closeSideBar() {
      this.showSideBar = !this.showSideBar;
      this.$emit('custom-event', this.showSideBar);
    },
    
  },
  
};
</script>
<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3b3e4e;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #3b3e4e;
}
.spacer {
  padding: 8px 0px;
  font-weight: 500;
  font-size: 13px;
  width: 50px;
  line-height: 10px;
  text-decoration-line: underline;
  color: #f9f9f9;
  background-color: #4ac18e;
  border-radius: 7px;
  cursor: pointer;
}

.search-side-bar .sheet {
  background: #292c3d;
  border: 1px solid #304a4e;
  height: 500px;
  overflow: auto;
}
.v-input__details {
  grid-area: none;
}
.v-selection-control--density-default {
  --v-selection-control-size: 2px;
}
.search-side-bar .title {
  align-items: center;
  color: #cfd0d3;
  display: flex;
  font-size: 14px;
  margin-bottom: 4px;
  margin-right: 10px;
  white-space: nowrap;
}
.search-side-bar .head {
  color: #fff;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  text-transform: uppercase;
}
.search-side-bar .btn-sheet {
  background: #51546c;
  width: 25px;
  height: 25px;
  border-radius: 3px;
  margin-left: 3px;
}
.flipswitch {
  position: relative;
  width: 30px;
}
.flipswitch input[type="checkbox"] {
  display: none;
}
.flipswitch-label {
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #3b3d4f;
  border-radius: 50px;
}
.flipswitch-inner {
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
}
.flipswitch-inner:before,
.flipswitch-inner:after {
  float: left;
  width: 50%;
  height: 12px;
  padding: 0;
  line-height: 12px;
  font-size: 18px;
  color: white;
  font-family: Trebuchet, Arial, sans-serif;
  font-weight: bold;
  box-sizing: border-box;
}
.flipswitch-inner:before {
  content: "";
  padding-left: 12px;
  background-color: #3b3d4f;
  color: #68d3a5;
}
.flipswitch-inner:after {
  content: "";
  padding-right: 12px;
  background-color: #3b3d4f;
  color: #68d3a5;
  text-align: right;
}
.flipswitch-switch {
  width: 12px;
  margin: 0px;
  height: 14px;
  background: #cfd0d3;
  border: 1px solid #539942;
  border-radius: 100px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 16px;
  transition: all 0.3s ease-in 0s;
}
.flipswitch-cb:checked + .flipswitch-label .flipswitch-inner {
  margin-left: 0;
}
.flipswitch-cb:checked + .flipswitch-label .flipswitch-switch {
  background: #68d3a5;
  right: 0;
}
/*****check box ******************/
.container {
  display: block;
  position: relative;
  padding-left: 20px;
  margin-bottom: 0px;
  cursor: pointer;
  font-size: 16px;
  color: #cfd0d3;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  border: 1px solid #cfd0d3;
  color: black;
  background-color: transparent;
  margin-top: 4px;
  border-radius: 2px;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  border: 1px solid #cfd0d3;
  background-color: transparent;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #68d3a5;
  color: black;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 5px;
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid black;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>