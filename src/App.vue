<template>
  <div id="app">
      <AppHeader></AppHeader>
      <landing-parallax></landing-parallax>
      <AppGallery></AppGallery>
      <div id="player">
        <aplayer
          :music="{
            title: 'Mexico',
            artist: 'Jenesia',
            src: require('./assets/Music/Mexico.mp3'),
            pic: require('./assets/PELogo.png'),
            theme: pic
          }"
        />
      </div>
      <AppConcertsTable></AppConcertsTable>
      <AppFooter></AppFooter>
  </div>
</template>

<script>

import LandingParallax from './components/LandingParallax.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppGallery from './components/AppGallery.vue'
import AppConcertsTable from './components/AppConcertsTable.vue'
import Aplayer from 'vue-aplayer'

export default {
  name: 'App',
  components: {
    AppHeader,
    LandingParallax,
    AppGallery,
    AppFooter,
    AppConcertsTable,
    Aplayer
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
