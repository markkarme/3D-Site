<template>
  <div>
    <div class="nav-menu">
      <div class="menu-icon">
        <span class="menu-text pl-1 pb-2 d-flex d-sm-none">Menu</span>
        <i
          class="mdi"
          :class="showMobileMenu ? 'mdi-close' : 'mdi-menu'"
          @click="showMenu()"
        ></i>
      </div>
      <div
        class="nav-content"
        :class="showMobileMenu ? 'open-menu' : 'closed-menu'"
      >
        <div class="logo">
          <img :src="logoOne" alt="Images" width="86" height="40" />
          <v-divider class="" vertical></v-divider>
        </div>
        <ul class="nav-items">
          <li @mouseenter="openMenu" id="menu-activator" :style="{color: color}"  @mouseleave="closeMenu">
            Why soc prime<v-icon color="#4AC18E" size="25">{{ icon }}</v-icon>
          </li>
          <v-menu
            v-model="showSiblingMenu"
            activator="#menu-activator"
            @mouseleave="closeMenu"
            @mouseenter="openMenu"
          >
            <v-list>
              <v-list-item>
                <v-list-item-title>
                  <p>adsdas</p>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <p>adsdasdasdas</p>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <li>
            Platform<v-icon color="#4AC18E" size="25">mdi-chevron-down</v-icon>
          </li>
          <li>
            Community<v-icon color="#4AC18E" size="25">mdi-chevron-down</v-icon>
          </li>
          <li>
            Resources<v-icon color="#4AC18E" size="25">mdi-chevron-down</v-icon>
          </li>
          <li>
            Company<v-icon color="#4AC18E" size="25">mdi-chevron-down</v-icon>
          </li>
          <li>
            Pricing<v-icon color="#4AC18E" size="25">mdi-chevron-down</v-icon>
          </li>
        </ul>

        <v-divider class="" vertical></v-divider>
        <div class="login-button">
          <v-btn :to="`/login`" variant="text" elevation="0" class="log-btn">
            Login
          </v-btn>
          <v-btn class="ml-4 sign-up-btn" variant="outlined" color="#4AC18E">
            Sign-Up
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      showMobileMenu: false,
      logoOne: require("@/assets/images/logo.svg"),
      showSiblingMenu: false,
      icon: "mdi-chevron-down",
      color: "white",
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    openMenu() {
      this.showSiblingMenu = true;
      this.icon = "mdi-chevron-up";
      this.color = "#4AC18E";
    },
    closeMenu() {
      this.showSiblingMenu = false;
      this.icon = "mdi-chevron-down";
      this.color = "white";
    },
  },
};
</script>
  
<style lang="scss">
.logo .v-divider {
  margin-left: 20px;
}
.nav-menu {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background-color: #0f1119;
}

.nav-content {
  display: flex;
  // justify-content: space-between;
  padding: 10px 10px;
  margin: 0px 50px;
  align-items: center;
}

.nav-items {
  display: flex;
  justify-content: start;
  align-items: start;
  list-style: none;
  margin: 0;
  padding: 0;
  margin: 0px 250px 0px 40px;
  li {
    overflow: hidden;
    display: inline-block;
    position: relative;
    padding: 12px 10px 12px;
    min-height: 44px;
    font-size: 12px;
    line-height: 1;
    font-weight: 600;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s;
    font-family: "Inter", sans-serif;
    color: #f9f9f9;
    text-transform: uppercase;
  }
  // li:hover {
  //   margin-top: -2px;
  //   background: rgba(255, 255, 255, 0.151);
  // }
}

.logo {
  display: flex;
  align-items: center;
  padding-left: 20px;
  .logo-text {
    margin-right: 10px;
  }
}

.menu-icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

i {
  display: none;
}
.login-button .v-btn.v-btn--density-default {
  width: 120px;
  height: 44px;
  text-transform: none;
}
.login-button .log-btn:hover {
  background-color: #0f1119;
  color: #4ac18e;
  text-decoration: underline #4ac18e;
  text-underline-offset: 5px;
}
.login-button .sign-up-btn .v-btn__content {
  color: white;
}
.login-button .sign-up-btn:hover {
  background-color: #4ac18e;
}

// Mobile version - hidden hamburger menu
@media screen and (max-width: 768px) {
  body {
    max-width: 100%;
    background: red;
  }
  .nav-menu {
    padding-top: 10px;
    position: absolute;
    max-width: 100%;
  }

  .open-menu {
    opacity: 1;
    // height: 150px;
  }

  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }

  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }

  .nav-items {
    flex-direction: column;
  }

  i {
    display: block;
    text-align: right;
    padding: 0 10px 10px 0;
  }
}
@media screen and (max-width: 991px) {
  .nav-content {
    margin: 0px 10px;
    justify-content: start;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1299px) {
  .nav-content {
    margin: 0px 10px;
    justify-content: start;
  }
}
@media screen and (max-width: 991px) {
  .nav-content {
    margin: 0px 10px;
    justify-content: start;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .nav-content {
    margin: 0px 10px;
    justify-content: start;
  }
}
</style>