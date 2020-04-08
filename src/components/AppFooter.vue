<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="white mx-4"
          dark
          icon
        >
          <a :href="icon.link" target="_blank" class="myIcon">
            <v-icon size="24px">{{ icon.iconName }}</v-icon>
          </a>
        </v-btn>

        <v-spacer></v-spacer>

      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Phoenix Empire</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {iconName: "fab fa-facebook", link: "https://www.facebook.com/phoenixempiremusic"},
        {iconName: "fab fa-twitter", link: ""},
        {iconName: "fab fa-instagram", link: "https://www.instagram.com/phoenixempireband/"}
      ],
    }),
  }
</script>

<style>
  a {
    color: #ffffff;
    text-decoration: none;
}
  .myIcon {
    color: black !important;
  }
</style>