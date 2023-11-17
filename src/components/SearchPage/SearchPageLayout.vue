<template>
  <div class="pa-4">
    <v-row>
      <v-col>
        <v-row>
          <SearchBar />
        </v-row>
        <v-row>
          <div class="green-bg-left"></div>
          <v-col cols="12" sm="3" v-if="show">
            <FilterSearchBar />
          </v-col>
          <v-col cols="12" sm="12" v-if="show === false">
            <SearchContent @close-event="handleCustomEvent" />
          </v-col>
          <v-col cols="12" sm="9" v-else>
            <SearchContent @close-event="handleCustomEvent" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import SearchBar from "./SearchBar.vue";
import FilterSearchBar from "./FilterSideBar.vue";
import SearchContent from "./MainContent.vue";
export default {
  components: { SearchBar, FilterSearchBar, SearchContent },
  data() {
    return {
      show: true,
      icon : "mdi-chevron-left"
    };
  },
  methods: {
    handleCustomEvent(showState) {
      // Handle the emitted event and the optional payload
      this.show = !this.show;
      
      if(this.show===false){
        this.icon="mdi-chevron-right"
      }else{
        this.icon="mdi-chevron-left"
      }
      this.$emit("change-icon-event", this.icon);
      console.log("IN main", showState,this.icon);
    },
  },
};
</script>
<style scoped>
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