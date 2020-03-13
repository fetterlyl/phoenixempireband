<template>
  <div id="app">
    <landing-parallax></landing-parallax>
    <AppHeader></AppHeader>
  </div>
</template>

<script>

import LandingParallax from './components/LandingParallax.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    LandingParallax
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
