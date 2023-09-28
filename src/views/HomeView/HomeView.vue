<template>
  <div class="home body-section">
    <ImageHero />
    <UploadProject />
    <AboutUs />
    <LatestProject />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImageHero from '@/components/HeroImage/HeroImage.components.vue'
import UploadProject from '@/components/UploadProject/UploadProject.components.vue'
import LatestProject from '@/components/LatestProject/LatestProject.components.vue'
import AboutUs from '@/components/AboutUs/AboutUs.components.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    ImageHero,
    UploadProject,
    LatestProject,
    AboutUs,
  },
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './HomeView.styles.scss';
</style>