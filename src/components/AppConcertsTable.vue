<template>
  <v-simple-table height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">City</th>
          <th class="text-left">Venue</th>
          <th class="text-left">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Concerts" :key="item.Concerts">
          <td>{{ item.City }}</td>
          <td>{{ item.Venue }}</td>
          <td>{{item.Date}}</td>
        </tr>
        <v-button></v-button>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
        Concerts: [
          {
            City: 'Edmonton',
            Venue: 'Union Hall',
            Date: '2020-05-21, 19:00'
          },
          {
            City: 'Calgary',
            Venue: 'Birds Nest',
            Date: '2020-06-22, 20:00'
          }
        ],
      }
    },
  }
</script>