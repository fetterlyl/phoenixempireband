<template>
  <v-container>
    <v-row class="d-flex fill-height justify-center">
      <v-col cols="8">
        <v-carousel

        height="auto"
        show-arrows-on-hover
        cycle
        continuous
        hide-delimiter-background
        hide-delimiters
        >

          <v-carousel-item 
          
            v-for="(item, index) in itemsLandscape" 
            :key="index"

            >
              <v-img 
              
                :src="item" 
                aspect-ratio="1.7778"
                contain>

              </v-img>
        </v-carousel-item>
      </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    data () {
      return {

        itemsLandscape: [
          {
            src: require('@/assets/Images/samplePhoto0.jpg'),
          },
          {
            src: require('@/assets/Images/samplePhoto1.jpg'),
          },
          {
            src: require('@/assets/Images/samplePhoto2.jpg'),
          },
        ],
      }
    },
  }
</script>