<template>
  <v-row>
    <v-col>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="hexagon">
              <span>
                <div class="hexagon-2">
                  <span>front</span>
                </div>
              </span>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="hexagon">
              <span>
                <div class="hexagon-2">
                  <span>back</span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
  <script>
export default {
  data() {
    return {
      isHovered: null,
    };
  },
};
</script>
  <style scoped lang="scss">
/********* flip ************** */
.flip-card {
  background-color: transparent;
  /* width: 300px;
    height: 300px;
    perspective: 1000px; */
}

.flip-card-inner {
  /* position: relative;
    width: 100%;
    height: 100%; */
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
  .hexagon {
    width: 200px;
    height: 115.47005383792516px;
    margin: 57.73502691896258px auto 0 auto;
    box-shadow: 0 0 50px rgba(38, 110, 110, 1);

    background-color: #2c3e47;
    opacity: 1;
    transform: scale(1.2);

    border-left: solid 10px #3b886d;
    border-right: solid 10px #3b886d;
  }

  .hexagon:before,
  .hexagon:after {
    width: 141.42135623730948px;
    height: 141.42135623730948px;
    transform: scaleY(0.5774) rotate(-45deg);
    left: 19.28932188134526px;
    box-shadow: 0 0 50px rgba(38, 110, 110, 1);
  }

  .hexagon:before {
    top: -70.71067811865474px;
    border-top: solid 14.142135623730951px #3b886d;
    border-right: solid 14.142135623730951px #3b886d;
  }

  .hexagon:after {
    bottom: -70.71067811865474px;
    border-bottom: solid 14.142135623730951px #3b886d;
    border-left: solid 14.142135623730951px #3b886d;
  }
  .hexagon-2 {
    box-shadow: 0 0 50px rgba(59, 136, 109, 1);
  }

  .hexagon-2:before,
  .hexagon-2:after {
    box-shadow: 0 0 50px rgba(59, 136, 109, 1);
  }
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: transparent;
  color: black;
}

.flip-card-back {
  background-color: transparent;
  color: white;
  transform: rotateY(180deg);
}
/**************************1 */

.hexagon {
  cursor: default;
  position: relative;
  width: 200px;
  height: 115.47005383792516px;
  background-color: #2b2f38;
  margin: 57.73502691896258px auto 0 auto;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0);
  border-left: solid 10px #1f2b32;
  border-right: solid 10px #1f2b32;
  display: grid;
  transition: 0s;
  opacity: 0.5;
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  z-index: 1;
  width: 141.42135623730948px;
  height: 141.42135623730948px;
  transform: scaleY(0.5774) rotate(-45deg);
  background-color: inherit;
  left: 19.28932188134526px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 1);
  transition: 0s;
}

.hexagon:before {
  top: -70.71067811865474px;
  border-top: solid 14.142135623730951px #1f2b32;
  border-right: solid 14.142135623730951px #1f2b32;
}

.hexagon:after {
  bottom: -70.71067811865474px;
  border-bottom: solid 14.142135623730951px #1f2b32;
  border-left: solid 14.142135623730951px #1f2b32;
}

.hexagon span {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 25px;
  color: #f47721;
  top: 5.773502691896257px;
  left: 0;
  width: 180px;
  height: 103.923px;
  z-index: 2;
  background: inherit;
  transition: 0s;
}

/**********************2 */

.hexagon-2 {
  cursor: default;
  position: relative;
  width: 100px;
  height: 57.73502691896258px;
  background-color: #2b2f38;
  margin: 28.86751345948129px auto 0 auto;
  box-shadow: 0 0 50px rgba(255, 255, 255, 1);
  border-left: solid 10px #1f2b32;
  border-right: solid 10px #1f2b32;
  display: grid;
  transition: 0s;
  margin-bottom: 20px;
}

.hexagon-2:before,
.hexagon-2:after {
  content: "";
  position: absolute;
  z-index: 1;
  width: 70.71067811865474px;
  height: 70.71067811865474px;
  transform: scaleY(0.5774) rotate(-45deg);
  background-color: inherit;
  left: 4.64466094067263px;
  box-shadow: 0 0 50px rgba(255, 255, 255, 1);
  transition: 0s;
}

.hexagon-2:before {
  top: -35.35533905932737px;
  border-top: solid 14.142135623730951px #1f2b32;
  border-right: solid 14.142135623730951px #1f2b32;
}

.hexagon-2:after {
  bottom: -35.35533905932737px;
  border-bottom: solid 14.142135623730951px #1f2b32;
  border-left: solid 14.142135623730951px #1f2b32;
}

.hexagon-2 span {
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 25px;
  color: #ffffff;
  top: 5.773502691896257px;
  left: 0;
  width: 80px;
  height: 46.188px;
  z-index: 2;
  background: inherit;
  transition: 0s;
}
</style>