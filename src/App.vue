<template>
  <v-app>
    <v-app-bar app color="rgb(231,75,74)" dark>
      <v-toolbar-title>
        <span>
          <strong>FIU PAVEMENT</strong>
        </span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn to="/" text v-if="!isLoggedIn">HOME2</v-btn>
        <v-btn to="/about" v-if="!isLoggedIn" text>ABOUT2</v-btn>
        <v-btn @click="View()" v-if="isLoggedIn" text> Switch View2</v-btn>
        <v-btn v-if="isLoggedIn" @click="logout" to="/" text>LOGOUT2</v-btn>
      </v-toolbar-items>

    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
import Home from "./views/Home/Home.vue";
import About from "./components/About/About.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Home,
    About
  },
  computed: {
    ...mapGetters(["isLoggedIn", "ShowList"])
  },
  methods: {
    ...mapActions(["changeView", "logout", "login"]),
    View() {
      this.changeView();
      //this.updateUserInfo(this.username, this.password);
    }
  },

  data: () => ({
    
  })
};
</script>

<style>
/*
html {
    overflow: hidden;
    height: 100%;
}

body {
    height: 100%;
    overflow: auto;
}*/
</style>