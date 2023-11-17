<template>
  <div class="circle-wrap">
    <div class="circle">
      <div
        class="mask full"
        :style="{ clip: 'rect(0px, ' + fillClip + 'px, 50px, 0px)' }"
      >
        <div class="fill"></div>
      </div>
      <div class="mask half">
        <div class="fill"></div>
      </div>
      <div class="inside-circle">{{ progress }}%</div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      progress: 75,
    };
  },
  computed: {
    fillClip() {
      return (this.progress / 100) * 50;
    },
  },
};
</script>
  
  <style scoped>
.circle-wrap {
  width: 50px;
  height: 50px;
  background: #2a2a3d;
  border-radius: 50%;
  border: 1px solid #303344;
  -webkit-box-shadow: 10px 6px 80px -4px #48c18f;
  -moz-box-shadow: 10px 6px 80px -4px #48c18f;
  box-shadow: 10px 6px 80px -4px #48c18f;
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
}

.circle-wrap .circle .mask {
  clip: rect(0px, 50px, 50px, 25px);
}

.circle-wrap .inside-circle {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #2a2a3d;
  line-height: 40px;
  text-align: center;
  margin-top: 4px;
  margin-left: 4px;
  color: white;
  position: absolute;
  z-index: 100;
  font-weight: 700;
  font-size: 1em;
}

.mask .fill {
  clip: rect(0px, 25px, 50px, 0px);
  background-color: #48c18f;
}

.mask.full,
.circle .fill {
  animation: fill ease-in-out 3s;
  transform: rotate(135deg);
}

@keyframes fill {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(135deg);
  }
}
</style>