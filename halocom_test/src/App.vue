<template>
  <div id="app">
    <header-view v-if="showHeader()" />
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import HeaderView from "./views/Header.vue";

export default {
  name: "App",
  components: {
    HeaderView
  },
  computed: {
      
  },
  methods: {
    showHeader() {
      return this.$route.name !== "login";
    }
  }
};
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/font/fontawesome/css/all.min.css";
</style>
