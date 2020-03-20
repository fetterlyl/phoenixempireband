<template>
    <div>
    <AppHeader></AppHeader>
    <landing-parallax></landing-parallax>
    <AppGallery></AppGallery>
    <AppConcertsTable></AppConcertsTable>
    <AppFooter></AppFooter>
    </div>
</template>

<script>

import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import LandingParallax from './LandingParallax.vue'
import AppGallery from './AppGallery.vue'
import AppConcertsTable from './AppConcertsTable.vue'


export default {

    name: AppHome,

    components: {
        
    AppFooter,
    AppHeader,
    LandingParallax,
    AppGallery,
    AppConcertsTable
    
    }
    
}
</script>