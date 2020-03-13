<template>
  <div id="app">
    <AppHeader></AppHeader>
    <landing-parallax></landing-parallax>
    <AppGallery></AppGallery>
    <AppFooter></AppFooter>
  </div>
</template>

<script>

import LandingParallax from './components/LandingParallax.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppGallery from './components/AppGallery.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    LandingParallax,
    AppGallery,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
