<template>
  <div class="side-bar">
    <v-row>
      <v-col class="side-bar-items">
        <p
          class="side-bar-item-text"
          :class="{ active: activeMenuItem === 'inventory' }"
          @click="this.$router.push('ccm-inventory')"
        >
          <v-icon size="15" class="mr-2" color="#CFD0D3">mdi-server</v-icon
          >Inventory
        </p>
        <p
          class="side-bar-item-text"
          :class="{ active: activeMenuItem === 'history' }"
          @click="this.$router.push('ccm-history')"
        >
          <v-icon size="18" class="mr-2" color="#CFD0D3">mdi-history</v-icon
          >History
        </p>
        <p
          class="side-bar-item-text"
          :class="{ active: activeMenuItem === 'job' }"
          @click="this.$router.push('ccm-jobs')"
        >
          <v-icon size="18" class="mr-2" color="#CFD0D3"
            >mdi-wrench-outline</v-icon
          >Jobs
        </p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["activeMenuItem"],
};
</script>
<style scoped>
.side-bar {
  background: #303344;
  height: 100%;
}
.side-bar .active {
  background: #3b3d4f;
}
.side-bar .side-bar-items {
  position: fixed;
  width: 250px;
  margin: 10px 0 0 0;
}
.side-bar .side-bar-item-text {
  margin: 0 5px 0 5px;
  padding: 1px 0 1px 10px;
  font-weight: 500;
  text-align: left;
  font-size: 18px;
  color: #f0f0f1;
  border-radius: 5px;
  cursor: pointer;
}
.side-bar .side-bar-item-text:hover {
  background: #3b3d4f;
}
@media screen and (max-width: 768px) {
  .side-bar .side-bar-items {
    position: sticky;
    width: 200px;
    margin: 50px 0 20px 0;
  }
}
</style>