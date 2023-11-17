<template>
  <div class="build-intro">
    <v-row >
      <v-col >
        <v-row  align="center" justify="center">
          <v-col align="end" justify="center" class="mr-2">
            <span class="text-1">ONE</span>
          </v-col>
          <v-col>
            <span class="text-2">Language Framework </span>
            <p class="text-2">UI </p>
            <p class="text-2">Platform</p>
          </v-col>
        </v-row>
        <div class="text3-handel">
            <span class="text-3">for All Cyber Defenders</span>
        </div>
        
      </v-col>
      <v-col class="ml-16">
        <img
            
            :src="require('@/assets/images/prime.png')"
          />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.build-intro .text-1 {
  letter-spacing: 0.00938em;
  background: linear-gradient(to right, #4ac18e, #68ecff);
  font-size: 104px;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}
.build-intro .text-2 {
    line-height: 1.2;
  background: linear-gradient(to right, #4ac18e, #68ecff);
  font-size: 56px;
  background-clip: text;
  -webkit-text-fill-color: transparent;

}
.build-intro .text-3 {
   
    font-weight: 700;
    line-height: 1.2;
  background: white;
  font-size: 48px;
  background-clip: text;
  -webkit-text-fill-color: transparent;

}
.build-intro .text3-handel{
    max-width: 305px;
    margin-left: 80px;
}
</style>