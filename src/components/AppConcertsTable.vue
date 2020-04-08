<template>
  <v-container fluid>
    <v-row class="d-flex fill-height justify-center">
      <v-col cols="8">
        <v-data-table

          dark
          :headers="headers"
          :items="concerts"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'WHEN',
            align: 'start',
            sortable: false,
            value: 'time',
            class: 'white--text'
          },
          { text: 'LOCATION', value: 'city', class: 'white--text' },
          { text: 'VENUE', value: 'place', class: 'white--text' },
        ],

        concerts: [
          {
            time: 'November 6, 7:30pm',
            city: 'Edmonton',
            place: 'Union Hall'
            
          },
          {
            time: 'July 9, 7:30pm',
            city: 'Calgary',
            place: 'Nose Hill'
            
          },
          {
            time: 'July 13, 8:30pm',
            city: 'Red Deer',
            place: 'Birds Nest'
            
          },
          {
            time: 'July 23, 10:00pm',
            city: 'Fort McMurray',
            place: 'Awesome Place'
            
          },
          {
            time: 'August 15, 6:15pm',
            city: 'Calgary',
            place: 'SAIT'
            
          },
          {
            time: 'August 22, 7:00pm',
            city: 'Calgary',
            place: 'University of Calgary'
            
          },
          {
            time: 'September 11, 4:00pm',
            city: 'Edmonton',
            place: 'MacEwan University'
            
          },
          {
            time: 'September 14, 11:00pm',
            city: 'Edmonton',
            place: 'Have Mercy + Booze'
            
          },
        ]
      }
    },
  }
</script>