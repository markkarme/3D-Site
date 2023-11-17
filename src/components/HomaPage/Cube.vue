<template>
  <div class="scene mt-16">
    <div class="cube">
      <div class="side back"></div>
      <div class="side left"></div>
      <div class="side right"></div>
      <div class="side top"></div>
      <div class="side bottom"></div>
      <div class="side front"></div>
    </div>
  </div>
</template>
    
    <script>
export default {
  data() {
    return {
      currentImage: require("@/assets/images/mark.jpg"), // Initial image source
      images: [
        require("@/assets/images/logo.svg"),
        require("@/assets/images/mark.jpg"),
        require("@/assets/images/logo.svg"),
      ], // Array of image sources
      currentImageIndex: 0, // Index of the current image
    };
  },
};
</script>
    
<style lang="scss" scoped>
$size-px: 200px;
$size: 200;
$size-lg: 200px;
$transform: $size-px / 2;

.scene {
  perspective: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-size: 50% 50%;
  background-position: center;
  background-repeat: no-repeat;
}

.cube {
  transform-style: preserve-3d;
  position: relative;
  width: $size-px;
  height: $size-px;
  animation: rotate 10s ease-in-out infinite;
  transform-origin: center center;
}

.side {
  position: absolute;
  width: $size-px;
  height: $size-px;
  background-color: #262938;
  opacity: 0.95;
  background-size: cover;
  background-repeat: no-repeat;
}

.back {
  transform: translateZ(-#{$transform}) rotateX(180deg);
  background-image: url(@/assets/images/home/empedded.svg);
  background-size: 50% 50%;
  background-position: center;
  background-repeat: no-repeat;
}

.left {
  transform: translateX(-#{$transform}) rotateY(90deg);
  background-size: 50% 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(@/assets/images/home/desktop.svg);
}

.right {
  transform: translateX($transform) rotateY(90deg);
  background-image: url(@/assets/images/home/erp.svg);
  background-size: 50% 50%;
  background-position: center;
  background-repeat: no-repeat;
}

.top {
  transform: translateY(-#{$transform}) rotateX(90deg);
  background-image: url(@/assets/images/home/machine-learning.svg);
  background-size: 50% 50%;
  background-position: center;
  background-repeat: no-repeat;
}

.bottom {
  transform: translateY($transform) rotateX(270deg);
  background-image: url(@/assets/images/home/robotics.svg);
  background-size: 50% 50%;
  background-position: center;
  background-repeat: no-repeat;
}

.front {
  transform: translateZ($transform);
  background-image: url(@/assets/images/home/web-development.svg);
  background-size: 50% 50%;
  background-position: center;
  background-repeat: no-repeat;
}

@keyframes rotate {
  0% {
    transform: rotateX(0);
  }
  12.5% {
    transform: rotateY(90deg);
  }
  25% {
    transform: rotateY(270deg);
  }
  37.5% {
    transform: rotateY(270deg);
  }
  50% {
    transform: rotateY(360deg);
  }
  62.5% {
    transform: rotateX(90deg);
  }
  75% {
    transform: rotateX(180deg);
  }
  87.5% {
    transform: rotateX(270deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}
</style>