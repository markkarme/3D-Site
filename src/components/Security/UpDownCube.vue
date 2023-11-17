<template>
    <div id="byebyecube">
      <div class="cube-before"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ByeByeCube',
  }
  </script>
  
  <style>
  #byebyecube {
    width: 300px;
    height: 400px;
    position: relative;
    left: 50%;
    top: -150px;
    margin-left: -150px; /* (@width/2) */
    transform-style: preserve-3d;
  }
  
  .cube-before {
    width: 200px;
    height: 280px;
    left: 50px;
    top: -8px;
    background-repeat: no-repeat;
    background-image: linear-gradient(
     
        30deg,
        transparent 26%,
        #4b8573 26.3%,
        #4b8573 74%,
        transparent 74.3%
      ),
      linear-gradient(
        150deg,
        transparent 26%,
        #315f51 26.3%,
        #315f51 74%,
        transparent 74.3%
      ),
      linear-gradient(
        150deg,
        transparent 26%,
        #589884 26.3%,
        #589884 73%,
        transparent 73%
      ),
      linear-gradient(
        30deg,
        transparent 27%,
        #589884 27%,
        #589884 74%,
        transparent 74.3%
      ),
      radial-gradient(circle at center, #589884 20%, transparent 20%);
    background-size: 50% 60%;
    background-position: 0 100%, 100% 100% , 0 48.5%, 100% 48.5%, 50% 60%;
    animation: cube-drop 6000ms infinite alternate linear;
    z-index: -1;
    margin: 100px; /* Add margin to create space between cube parts */
  }
  
  @keyframes cube-drop {
    20% {
      transform: translateY(0) translateZ(-1px);
      opacity: 1;
    }
    80%,
    100% {
      transform: translateY(153px) translateZ(-1px);
      opacity: 0;
    }
  }
  </style>