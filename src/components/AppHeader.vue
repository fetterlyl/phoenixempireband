<template>
<v-container fluid>
  <v-row>

      <v-app-bar
        dense
        dark
        app
        prominent
      >

      <v-col md="7" sm="9" xs="12">
        <div class="ma-3" id="player">
          <aplayer

            listFolded

            :music="{
              
              title: 'Prove You Wrong',
              artist: 'Phoenix Empire',
              src: require('../assets/Music/Prove You Wrong.mp3'),
              pic: require('../assets/PELogo.png')
              }"

            :list="[{
              title: 'Prove You Wrong',
              artist: 'Phoenix Empire',
              src: require('../assets/Music/Prove You Wrong.mp3'),
              pic: require('../assets/PELogo.png'),
            },
            {
              title: 'Legacy',
              artist: 'Phoenix Empire',
              src: require('../assets/Music/Legacy.mp3'),
              pic: require('../assets/PELogo.png'),
            }]"
          />
        </div>
      </v-col>

      <v-spacer></v-spacer>

      <v-row align="center" justify="center">
        <v-col>
          <div class="mx-5">
          <v-btn 
                v-for="icon in icons"
                :key="icon"
                rounded
                depressed
                color="primary"
                icon
                dark
              >
                <v-icon size="16px">{{icon.iconName}}</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
  </v-row>
</v-container>
</template>

<script>

import Aplayer from 'vue-aplayer'

export default {
  data: () => ({
      icons: [
        {iconName: "fas fa-images", link: ""},
        {iconName: "fas fa-table", link: ""}
      ],
    }),

    components: {
      Aplayer
    }
  }
</script>