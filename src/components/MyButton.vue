<template>
    <button class="grow_skew_forward"> {{ props.title }} <v-icon>mdi-chevron-right</v-icon></button>
   

</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
    title:{
        type:String,
        required:true,
    }
});
</script>
<style scoped>

  
  button {
    border-radius:150px;
    height: 50px;
    font-size: 2em;
    background: #111111;
    color: #fff;
    border: 0.25rem solid #f8af01;
    padding: 0.5em .5em 0.5em 0.5em;
    margin: 1rem;
    position: relative;
    z-index: 1;
    overflow: hidden;
    font: 1em sans-serif;
    
  }
  button:hover {
    color: #ffffff;
  }
  button::after {
    content: "";
    background: #f8af01;
    position: absolute;
    z-index: -1;
    padding: 0.85em 0.75em;
    display: block;
    
  }
  button[class^="slide"]::after {
    transition: all 0.35s;
  }
  button[class^="slide"]:hover::after {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all 0.35s;
  }
  button.slide_from_left::after {
    top: 0;
    bottom: 0;
    left: -100%;
    right: 100%;
  }
  button.slide_from_right::after {
    top: 0;
    bottom: 0;
    left: 100%;
    right: -100%;
  }
  button.slide_from_top::after {
    left: 0;
    right: 0;
    top: -100%;
    bottom: 100%;
  }
  button.slide_from_bottom::after {
    left: 0;
    right: 0;
    top: 100%;
    bottom: -100%;
  }
  button[class^="grow"]::after {
    transition: all 0.3s ease;
  }
  button[class^="grow"]:hover::after {
    transition: all 0.3s ease-out;
  }
  
  button.grow_skew_forward::after {
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(-45deg) scale(0, 1);
  }
  button.grow_skew_forward:hover::after {
    transform: skewX(-45deg) scale(1, 1);
  }
 
</style>