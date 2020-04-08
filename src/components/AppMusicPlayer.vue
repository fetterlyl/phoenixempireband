<template>
    <v-container fluid>
        <v-row class="d-flex fill-height align-center justify-center mx-5">
            
                <v-card
                    v-for="song in songs"
                    v-bind:key="song.songTitle"
                    dark
                    class="ma-5 pa-1"
                >

                    <div class="d-flex fill-height align-center justify-center">
                    <av-line
                            :line-width="2"
                            line-color="#fd4952"
                            :audio-src="song.songPath"
                        ></av-line>
                    </div>
                
                <v-card-title>{{song.songTitle}}</v-card-title>
                <v-card-subtitle>{{song.songArtist}}</v-card-subtitle>
                </v-card>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            songs: [

                {
                    songTitle: 'Prove You Wrong',
                    songArtist: 'Phoenix Empire',
                    songPath: require('../assets/Music/Prove You Wrong.mp3')
                },
                {
                    songTitle: 'Legacy',
                    songArtist: 'Phoenix Empire',
                    songPath: require('../assets/Music/Legacy.mp3')
                },
            ]
        }
    }
}
</script>