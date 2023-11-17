<template>
  <v-row>
    <v-col>
      <v-row>
      <span   class="text-h13">
        <v-icon>mdi-hexagon</v-icon>
        <span id="hide">&nbsp;to see some more text</span>
      </span>
      <span   class="text-h13">
        <v-icon>mdi-hexagon</v-icon>
        <span id="hide">&nbsp;to see some more text</span>
      </span>
      </v-row>
    </v-col>
  </v-row>
</template>
<style>
.text-h13{
  width: 100px;
}
.text-h13:hover{
  width: 100px;
}
#hide {

  display: inline-block;
  max-width: 0%;
  vertical-align: bottom;
  overflow: hidden;
  white-space: nowrap;
  transition: max-width 0.5s ease-in-out;
}
span:hover #hide {
  max-width: 100%;
}
</style>