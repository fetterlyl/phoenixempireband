<template>
    <v-container fluid>
        <v-row class="d-flex fill-height align-center justify-center">
            <v-col cols="9">
                <vue-plyr ref="plyr">
                    <div class="plyr__video-embed">
                      <iframe width="1280" height="720" src="https://www.youtube.com/embed/n45P6hwXQiY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </vue-plyr>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import VuePlyr from 'vue-plyr'

export default {
    components:
    {
      VuePlyr
    }
}

</script>