<template>
    <div class="content">
      <v-row class="switch-row pa-4">
        <v-col>
          <v-row align="end" justify="end" class="pa-4">
            <span class="text-row-white mr-5">Content View</span>
            <ToggleBtn @toggle="handleToggle" />
            <span class="text-row-white ml-5">Content View2</span>
          </v-row>
          <v-row align="center" justify="center">
            
            <transition name="fade" mode="out-in">
                
              <v-card
                variant="outlined"
                class=""
                width="1000"
                height="570"
                color="#378E70"
                :key="img"
              >
                <div class="parnet">
                  <img
                    class="imge"
                    :src="require(`@/assets/images/security/${img}`)"
                  />
                  <div
                    :class="{
                      greenline: setlineClass == false,
                      greenlineright: setlineClass,
                    }"
                  ></div>

                </div>
                
              </v-card>

            </transition>
            <div class="green-bg-right"></div>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </template>
<script>
import ToggleBtn from "./ToggleBtn.vue";

export default {
  components: {
    ToggleBtn,
  },
  data() {
    return {
      toggleValue: false,
      setlineClass: false,
      img: "security-6.png",
    };
  },
  methods: {
    handleToggle(value) {
      this.toggleValue = value;
      this.setlineClass = value;
      if (value) {
        this.img = "security-7.png";
      } else {
        this.img = "security-6.png";
      }
    },
  },
};
</script>
<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.switch-row .imge {
  transition: opacity 0.3s ease-in-out;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.switch-row .parent {
  position: relative;
}
.switch-row .greenline {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(74, 193, 142);
  /* margin-right: 4px; */
  height: 100%;
  width: 4px;
  min-width: 5px;
  border-radius: 4px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.75), 0 2px 38px rgba(0, 0, 0, 0.75);
}
.switch-row .greenlineright {
  position: absolute;
  top: 0%;
  right: 0;

  background-color: rgb(74, 193, 142);
  margin-left: 4px;
  height: 100%;
  width: 4px;
  min-width: 5px;
  border-radius: 4px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.75), 0 2px 38px rgba(0, 0, 0, 0.75);
}
.switch-row .tog {
  max-width: 50px;
  margin-top: 10px;
}
.switch-row .tog .v-switch {
  line-height: none;
}
.switch-row .text-row-white {
  font-weight: 600;
  color: rgb(249, 249, 249);
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.01071em;
}
.content .green-bg-right {
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