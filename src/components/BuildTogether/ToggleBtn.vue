<template>
    <div class="flipswitch">
    <input type="checkbox" name="flipswitch" class="flipswitch-cb" id="fs" v-model="isChecked" @change="emitValue">
    <label class="flipswitch-label" for="fs">
        <div class="flipswitch-inner"></div>
        <div class="flipswitch-switch"></div>
    </label>
</div>
  
</template>
  
  <script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    emitValue() {
      this.$emit("toggle", this.isChecked);
    },
  },
};
</script>
  
  <style scoped>.flipswitch {
    position: relative;
    width: 72px;
  }
  .flipswitch input[type=checkbox] {
    display: none;
  }
  .flipswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid #668682;
    border-radius: 50px;
  }
  .flipswitch-inner {
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
  }
  .flipswitch-inner:before, .flipswitch-inner:after {
    float: left;
    width: 50%;
    height: 32px;
    padding: 0;
    line-height: 32px;
    font-size: 18px;
    color: rgb(65, 12, 12);
    font-family: Trebuchet, Arial, sans-serif;
    font-weight: bold;
    box-sizing: border-box;
  }
  .flipswitch-inner:before {
    content: "";
    padding-left: 12px;
    background-color: #668682;
    color: #668682;
  }
  .flipswitch-inner:after {
    content: "";
    padding-right: 12px;
    background-color: #668682;
    color: #668682;
    text-align: right;
  }
  .flipswitch-switch {
    width: 25px;
    margin: 3.5px;
    background: #FFFFFF;
    border: 1px solid #668682;
    border-radius: 50px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 39px;
    transition: all 0.3s ease-in 0s;
  }
  .flipswitch-cb:checked + .flipswitch-label .flipswitch-inner {

    margin-left: 0;
  }
  .flipswitch-cb:checked + .flipswitch-label .flipswitch-switch {
    right: 0;
    background: #4AC18E;
  }
</style>