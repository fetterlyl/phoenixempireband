<template>
  <v-app id="app">
      <landing-parallax></landing-parallax>
      <AppMusicPlayer></AppMusicPlayer>
      <AppGallery></AppGallery>
      <AppConcertsTable></AppConcertsTable>
      <app-video-player></app-video-player>
      <AppFooter></AppFooter>
  </v-app>
</template>

<script>

import LandingParallax from './components/LandingParallax.vue'
import AppFooter from './components/AppFooter.vue'
import AppGallery from './components/AppGallery.vue'
import AppConcertsTable from './components/AppConcertsTable.vue'
import AppMusicPlayer from './components/AppMusicPlayer.vue'
import AppVideoPlayer from  './components/AppVideoPlayer.vue'

export default {
  name: 'App',
  components: {
    LandingParallax,
    AppGallery,
    AppFooter,
    AppConcertsTable,
    AppMusicPlayer,
    AppVideoPlayer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: black;
}

</style>
