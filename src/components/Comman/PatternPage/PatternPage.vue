<template>
  <div
    class="pattern"
    :class="{
      activeMargin: activeMargin === 'true',
      littleMargin: activeMargin === 'false',
    }"
  >
    <row>
      <p class="d-flex justify-start title">{{ title }}</p>
      <v-row class="row-details-1">
        <v-col>
          <v-row>
            <v-col>
              <p class="title-info">{{ titleInfo }}</p>
              <p class="sub-title-info">{{ subTitleInfo }}</p>
              <v-btn class="pattern-btn">{{ titleBtnText }}</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <video-player
            :src="videoTitle"
            controls
            :loop="true"
            :volume="0.6"
            class="video"
            v-if="videoTitle != null"
          />
          <img v-else :src=" require('@/assets/images/dashboard.png')"  class="img-dash"/>
        </v-col>
      </v-row>
      <v-row class="row-details">
        <v-col cols="12" sm="4" class="col-details">
          <p class="last-row-title">{{ colTitle1 }}</p>
          <p class="last-row-sub-title">
            {{ colSubTitle1 }}
          </p>
        </v-col>
        <v-col cols="12" sm="4" class="col-details">
          <p class="last-row-title">{{ colTitle2 }}</p>
          <p class="last-row-sub-title">
            {{ colSubTitle2 }}
          </p>
        </v-col>
        <v-col cols="12" sm="4" class="col-details">
          <p class="last-row-title">{{ colTitle3 }}</p>
          <p class="last-row-sub-title">
            {{ colSubTitle3 }}
          </p>
        </v-col>
      </v-row>
    </row>
  </div>
</template>

<script>
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
export default {
  props: [
    "title",
    "titleInfo",
    "subTitleInfo",
    "titleBtnText",
    "videoTitle",
    "colTitle1",
    "colSubTitle1",
    "colTitle2",
    "colSubTitle2",
    "colTitle3",
    "colSubTitle3",
    "activeMargin",
  ],
  components: {
    VideoPlayer,
  },
};
</script>
<style scoped>
.pattern .img-dash{
  max-width: 620px;
  max-height: 325px;
}
.littleMargin {
  margin-left: 20px;
}
.activeMargin {
  margin-left: 100px;
}
.pattern {
  margin-right: 20px;
  margin-top: 20px;
}
.pattern .last-row-title {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}
.pattern .last-row-sub-title {
  color: #cfd0d3;
  font-size: 14px;
  font-weight: 400;
  max-width: 300px;
}
.pattern .video {
  max-width: 600px;
  max-height: 300px;
}
.pattern .title {
  color: #f9f9f9;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
}
.pattern .title-info {
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
}
.pattern .sub-title-info {
  color: #cfd0d3;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
}
.pattern .pattern-btn {
  background: #4ac18e;
  color: #f9f9f9;
  text-transform: none;
}
.pattern .row-details-1 {
  margin-top: 100px;
}
.pattern .row-details {
  margin-top: 100px;
  margin-bottom: 100px;
}

@media screen and (max-width: 768px) {
  .pattern .video {
    margin-top: 20px;
    max-width: 350px;
    max-height: 300px;
  }
  .pattern {
    margin-left: 10px;
    margin-top: 50px;
  }
  .pattern .col-details {
    margin-top: 20px;
    text-align: center;
  }
  .pattern .last-row-sub-title {
    max-width: none;
  }
}
</style>