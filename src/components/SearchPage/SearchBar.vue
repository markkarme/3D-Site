<template>
  <div class="search-bar">
    <v-row>
      <v-col>
        <v-sheet class="card pa-1">
          <v-row>
            <v-col cols="12" sm="1">
              <div class="select-dropdown">
                <select>
                  <option value="Option 1">Standard</option>
                  <option value="Option 2">Lucene</option>
                </select>
              </div>
            </v-col>
            <v-col cols="12" sm="10">
              <input
                type="text"
                placeholder="Search.."
                name="search"
                class="search-input"
              />
            </v-col>
            <v-col cols="12" sm="1" class="d-flex justify-end">
              <div class="search-btn-style">
                <v-btn class="search-btn"
                  ><v-icon size="25">mdi-magnify</v-icon></v-btn>
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<style  lang="scss">
.search-bar{
  width: 100%;
}
.search-bar .search-btn-style .v-btn {
  background: #68d3a5;
  color: black;
  min-width: 10px;
  min-height: 20px;
  margin-top: 5px;
}
.search-bar .search-btn-style .v-btn.v-btn--density-default {
  height: 30px;
  width: 10px;
}
.search-input {
  border: 0px solid #00b4cc;
  outline: none;
  color: white;
  margin-top: 10px;
}
.search-bar .v-sheet {
  width: 100%;
}
.card {
  background-color: #292c3d;
  border: 1px solid #304a4e;
  width: 100%;
}
.select-dropdown,
.select-dropdown * {
  margin: 0;
  padding: 0;
  position: relative;
  box-sizing: border-box;
}
.select-dropdown {
  position: relative;
  background-color: #292c3d;
  border-radius: 4px;
  color: white;
}
.select-dropdown select {
  font-size: 1rem;
  font-weight: normal;
  max-width: 100%;
  padding: 8px 24px 8px 10px;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: white;
}

.select-dropdown select:active,
.select-dropdown select:focus {
  outline: none;
  box-shadow: none;
  background-color: #292c3d;
  color: white;
}
.select-dropdown:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 8px;
  width: 0;
  height: 0;
  margin-top: -2px;
  border-top: 5px solid #aaa;
  border-right: 5px solid transparent;

  border-left: 5px solid transparent;
  &:hover {
    background-color: red;
    color: #292c3d;
  }
}
</style>