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
          <img :src="logoOne" alt="Images" width="64" height="28" />
          <v-divider class="" vertical></v-divider>
        </div>
        <v-icon size="50" color="#49BD8C" class="head-icon">mdi-hexagon</v-icon>
        <div>
          <p class="title-page"> Threat Detection</p>
          <p class="title-page">marketplace </p>
          
        </div>

        <div class="green-bg-left"></div>

        <div class="trapezoid-left"></div>

        <div class="navbar">
          <a href="intro" :class="{ active: activeMenuItem === 'home' }"
            >OverView</a
          >
          <a href="expert" :class="{ active: activeMenuItem === 'search' }"
            >Search</a
          >
          <a href="quick-hunt" :class="{ active: activeMenuItem === 'hunt' }"
            >hunt {{ hunt }}</a
          >
          <a href="ccm" :class="{ active: activeMenuItem === 'lists' }">lists</a>
          <div class="dropdown">
            <button class="dropbtn" :class="{ active: activeMenuItem === 'auto' }">
              Automation
              <v-icon color="#4AC18E" size="25">mdi-chevron-down</v-icon>
            </button>
            <div class="dropdown-content">
              <a
                href="ccm-inventory"
                :class="{ subactive: activeSubMenuItem === 'inventory' }"
                >Inventory</a
              >
              <a
                href="ccm-history"
                :class="{ subactive: activeSubMenuItem === 'history' }"
                >History</a
              >
              <a
                href="ccm-jobs"
                :class="{ subactive: activeSubMenuItem === 'job' }"
                >Jobs</a
              >
            </div>
          </div>
          <div class="dropdown">
            <button
              class="dropbtn"
              :class="{ btnborder: activeMenuItem === 'analysis' }"
            >
              Analytics
              <v-icon color="#4AC18E" size="25">mdi-chevron-down</v-icon>
            </button>
            <div class="dropdown-content">
              <a
                href="leaderboards"
                :class="{ subactive: activeSubMenuItem === 'leader' }"
                >Leaderboards</a
              >
              <a
                href="dashboard"
                :class="{ subactive: activeSubMenuItem === 'dashboard' }"
                >Dashboards</a
              >
              <a
                href="log-source-coverage"
                :class="{ subactive: activeSubMenuItem === 'log' }"
                >Log Source Coverage</a
              >
              <a
                href="mitre-coverage"
                :class="{ subactive: activeSubMenuItem === 'mitre' }"
                >MITRE ATT&CK Coverage</a
              >
            </div>
          </div>
        </div>
        <div class="trapezoid-right"></div>
        <!-- <v-divider class="" vertical></v-divider> -->
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
    setActiveMenuItem(menuItem) {
      this.activeMenuItem = menuItem;
    },
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
  props: ["activeMenuItem", "activeSubMenuItem"],
};
</script>
    
<style lang="scss">
// .head-icon{
//   box-shadow: 0 0px 0px 0 rgb(255, 0, 0), 0 6px 0px 0 rgba(255, 204, 2, 0.19);

// }
.title-page {
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.01071em;
  color: rgb(249, 249, 249);
  font-weight: 700;
}
.navbar {
  margin: 0px 0 0 5px;
}
.navbar a {
  float: left;
  font-size: 14px;
  color: white;
  text-align: center;
  padding: 8px 8px;
  text-decoration: none;
  margin-left: 10px;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 14px;
  border: none;
  outline: none;
  color: white;
  padding: 8px 8px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}
.navbar .active {
  border: 1px solid #4ac18e;
  border-radius: 10px;

  color: #fff;
}
.navbar a:hover,
.dropdown:hover .dropbtn {
  border: 1px solid #4ac18e;
  border-radius: 10px;

  color: #fff;
}
.dropdown .btnborder {
  border: 1px solid #4ac18e;
  border-radius: 10px;

  color: #fff;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #292c3d;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content .subactive {
  background: #292c3d;

  border-bottom: 2px solid #4ac18e;
  margin: 0 0em;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-radius: 0px;
}
.dropdown-content a:hover {
  background: #243f42;

  border-bottom: 2px solid #4ac18e;
  margin: 0 0em;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-radius: 0px;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.nav-menu .line-1 {
  height: 1px;
  background: rgb(255, 4, 4);
  width: 90%;
  padding-right: 10px;
}
.logo .v-divider {
  margin-left: 20px;
}
.nav-menu {
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 9999;
  background-color: #292c3d;
  border-bottom: 2px solid #345e58;
}

/******************trapexoid ******************/
.trapezoid-left {
  position: relative;
  height: 58px;
  width: 100px;
  background: #345e58;
  z-index: 9999;
  border: 1px solid #345e58;
  -webkit-clip-path: polygon(100% 100%, 3% 0, 0 0, 97% 100%);
  clip-path: polygon(100% 100%, 3% 0, 0 0, 97% 100%);
}
.trapezoid-right {
  position: relative;
  height: 57px;
  width: 100px;
  background: #345e58;
  z-index: 9999;
  border: 1px solid #345e58;
  -webkit-clip-path: polygon(3% 100%, 100% 0, 97% 0, 0 100%);
  clip-path: polygon(3% 100%, 100% 0, 97% 0, 0 100%);
}

.nav-content {
  display: flex;
  // justify-content: space-between;
  padding: 10px 0px;
  margin: 0px 50px;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  padding-left: 0px;
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
  .navbar {
    display: flex;
    flex-direction: column;
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

  .navigation-menu {
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