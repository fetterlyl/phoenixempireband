<template>
    <v-container fluid>
          <v-img
            :src="require('@/assets/Images/parallaxWeb.jpg')"
            contain
          >
            <v-row class="d-flex fill-height" v-resize="onResize" align="center" justify="center">
              <v-col cols="12">
                <div class="logoSplash d-flex fill-height align-center justify-center">
                  <v-img
                    :src="require('@/assets/PELogo.png')"
                    contain
                    max-height="300"
                    max-width="300"
                    >
                  </v-img>
                </div>
              </v-col>
            </v-row>
          </v-img>
    </v-container>
</template>

<script>

export default {

    data: () => ({
    icons: [
        "fas fa-image",
        "fas fa-table"
      ],
    })
}
</script>

<style>
  .logoSplash {
    opacity: 80%;
  }
</style>